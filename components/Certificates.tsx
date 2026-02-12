import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { Certificate } from '../types';

const categoryConfig = {
    competition: { icon: Trophy, color: 'from-amber-500 to-orange-600', bg: 'bg-amber-500/10', text: 'text-amber-400', label: 'Competition' },
    seminar: { icon: Star, color: 'from-blue-500 to-cyan-600', bg: 'bg-blue-500/10', text: 'text-blue-400', label: 'Seminar' },
    training: { icon: Medal, color: 'from-emerald-500 to-green-600', bg: 'bg-emerald-500/10', text: 'text-emerald-400', label: 'Training' },
};

const filters = [
    { key: 'all', label: 'All' },
    { key: 'competition', label: 'Competitions' },
    { key: 'seminar', label: 'Seminars' },
    { key: 'training', label: 'Training' },
] as const;

const Certificates: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const filtered = activeFilter === 'all'
        ? CERTIFICATES
        : CERTIFICATES.filter((c) => c.category === activeFilter);

    return (
        <section id="certificates" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Certificates & Achievements
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                    <p className="text-slate-400 mt-4 max-w-2xl text-lg">
                        Recognition from various competitions, seminars, and professional training programs.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === f.key
                                    ? 'text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                                }`}
                        >
                            {activeFilter === f.key && (
                                <motion.div
                                    layoutId="activeCertFilter"
                                    className="absolute inset-0 bg-gradient-to-r from-amber-500/80 to-orange-500/80 rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {f.key === 'all' ? <Filter size={14} /> : React.createElement(categoryConfig[f.key as keyof typeof categoryConfig].icon, { size: 14 })}
                                {f.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Certificates Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((cert, index) => (
                            <CertificateCard key={cert.id} cert={cert} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16 text-slate-500"
                    >
                        <Award className="mx-auto mb-4 opacity-30" size={48} />
                        <p>No certificates in this category yet.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

const CertificateCard: React.FC<{ cert: Certificate; index: number }> = ({ cert, index }) => {
    const config = categoryConfig[cert.category];
    const IconComponent = config.icon;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:bg-white/[0.06] transition-all duration-300"
        >
            {/* Decorative glow */}
            <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${config.color} rounded-full opacity-[0.07] group-hover:opacity-[0.12] blur-2xl transition-opacity duration-500`} />

            <div className="relative z-10 flex gap-5">
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="text-white" size={26} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-100 transition-colors">
                            {cert.title}
                        </h3>
                    </div>

                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {cert.issuer}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                        {/* Achievement Badge */}
                        {cert.achievement && (
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text} border border-current/10`}>
                                <Award size={12} />
                                {cert.achievement}
                            </span>
                        )}

                        {/* Category Badge */}
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 font-mono">
                            {config.label}
                        </span>

                        {/* Year */}
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-500 font-mono">
                            {cert.date}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Certificates;
