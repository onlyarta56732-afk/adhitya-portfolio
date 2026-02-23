import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Shield, Wifi, Bot, Layers, Monitor, User } from 'lucide-react';
import { TECHNICAL_SKILLS, DEVICE_PLATFORMS, SOFT_SKILLS } from '../constants';

// ─── Types ────────────────────────────────────────────────────────────────────
type TechCategory = 'Embedded & IoT' | 'Programming' | 'Cybersecurity' | 'Networking' | 'Robotics';
type Tab = 'technical' | 'devices' | 'personal';

// ─── Category meta ────────────────────────────────────────────────────────────
const categoryMeta: Record<TechCategory, { gradient: string; glow: string; icon: React.ReactNode }> = {
    'Embedded & IoT': { gradient: 'from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/20', icon: <Cpu size={18} /> },
    'Programming': { gradient: 'from-purple-500 to-pink-600', glow: 'shadow-purple-500/20', icon: <Code size={18} /> },
    'Cybersecurity': { gradient: 'from-red-500 to-orange-500', glow: 'shadow-red-500/20', icon: <Shield size={18} /> },
    'Networking': { gradient: 'from-green-500 to-teal-600', glow: 'shadow-green-500/20', icon: <Wifi size={18} /> },
    'Robotics': { gradient: 'from-orange-500 to-yellow-500', glow: 'shadow-orange-500/20', icon: <Bot size={18} /> },
};

const proficiencyColor: Record<string, string> = {
    Expert: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    Advanced: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    Intermediate: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    Familiar: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

const levelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 55) return 'Intermediate';
    return 'Beginner';
};

// ─── Tabs config ──────────────────────────────────────────────────────────────
const TABS: { id: Tab; label: string; icon: React.ReactNode; subtitle: string }[] = [
    { id: 'technical', label: 'Technical Skills', icon: <Layers size={18} />, subtitle: 'Proficiency across domains' },
    { id: 'devices', label: 'Devices & Platforms', icon: <Monitor size={18} />, subtitle: 'Hardware & tools I work with' },
    { id: 'personal', label: 'Personal Skills', icon: <User size={18} />, subtitle: 'Soft skills & mindset' },
];

const categories = [...new Set(TECHNICAL_SKILLS.map((s) => s.category))] as TechCategory[];

// ─── Sub-panels ───────────────────────────────────────────────────────────────
const TechnicalPanel: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<TechCategory | null>(null);
    const filtered = activeCategory
        ? TECHNICAL_SKILLS.filter((s) => s.category === activeCategory)
        : TECHNICAL_SKILLS;

    return (
        <div>
            {/* Category filter chips */}
            <div className="flex flex-wrap gap-2 mb-8">
                <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === null
                        ? 'bg-white/10 border-white/30 text-white'
                        : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                >
                    All
                </button>
                {categories.map((cat) => {
                    const meta = categoryMeta[cat];
                    return (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                                ? `bg-gradient-to-r ${meta.gradient} border-transparent text-white shadow-lg`
                                : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                                }`}
                        >
                            {meta.icon}
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Skill cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {categories
                    .filter((cat) => !activeCategory || cat === activeCategory)
                    .map((cat, catIdx) => {
                        const catSkills = filtered.filter((s) => s.category === cat);
                        if (catSkills.length === 0) return null;
                        const { gradient, glow, icon } = categoryMeta[cat];
                        return (
                            <motion.div
                                key={cat}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: catIdx * 0.07 }}
                                className={`glass-card rounded-2xl p-5 md:p-6 shadow-xl ${glow} hover:bg-white/5 transition-colors duration-300`}
                            >
                                <div className="flex items-center gap-2.5 mb-5">
                                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md`}>
                                        {icon}
                                    </div>
                                    <h4 className="text-base font-bold text-white">{cat}</h4>
                                </div>

                                <div className="space-y-3.5">
                                    {catSkills.map((skill, idx) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.35, delay: idx * 0.04 }}
                                        >
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-slate-200 text-sm font-medium">{skill.name}</span>
                                                <span className="text-xs text-slate-500 font-mono">{levelLabel(skill.level)}</span>
                                            </div>
                                            <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.9, delay: idx * 0.05, ease: 'easeOut' }}
                                                    className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
            </div>
        </div>
    );
};

const DevicesPanel: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {DEVICE_PLATFORMS.map((device, idx) => (
            <motion.div
                key={device.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-5 group hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                {/* Icon + name */}
                <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{device.icon}</span>
                    <div>
                        <h4 className="text-white font-semibold text-sm leading-snug">{device.name}</h4>
                        <span className={`mt-1 inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${proficiencyColor[device.proficiency] ?? 'bg-slate-500/20 text-slate-400 border-slate-500/30'}`}>
                            {device.proficiency}
                        </span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {device.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
);

const PersonalPanel: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {SOFT_SKILLS.map((skill, idx) => (
            <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card rounded-2xl p-5 group hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-3"
            >
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h4 className="text-white font-bold text-sm">{skill.name}</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{skill.description}</p>
            </motion.div>
        ))}
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('technical');

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    <p className="text-slate-400 mt-4 text-lg max-w-2xl">
                        From hardware to soft skills a complete view of what I bring to the table.
                    </p>
                </motion.div>

                {/* Tab Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`group flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-primary to-secondary border-transparent text-white shadow-lg shadow-primary/25'
                                : 'glass-card border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                                }`}
                        >
                            <span className={`transition-transform duration-200 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                                {tab.icon}
                            </span>
                            {tab.label}
                        </button>
                    ))}
                </motion.div>

                {/* Tab subtitle */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeTab + '-sub'}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-500 text-sm mb-8 -mt-4 font-mono"
                    >
                        {TABS.find((t) => t.id === activeTab)?.subtitle}
                    </motion.p>
                </AnimatePresence>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 'technical' && <TechnicalPanel />}
                        {activeTab === 'devices' && <DevicesPanel />}
                        {activeTab === 'personal' && <PersonalPanel />}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Skills;
