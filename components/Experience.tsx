import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Journey</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Building my path through hands-on experience and leadership roles.
            </p>
        </div>

        <div className="relative">
            {/* Glowing Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent opacity-30 rounded-full"></div>

            <div className="space-y-12">
                {EXPERIENCES.map((exp, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={exp.id} 
                        className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        
                        {/* Timeline Node */}
                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-darker border-2 border-primary shadow-[0_0_15px_rgba(14,165,233,0.5)] z-10 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={12} />
                                        {exp.period}
                                    </div>
                                </div>
                                <h4 className="text-secondary font-medium mb-4 flex items-center gap-2">
                                    <Briefcase size={16} />
                                    {exp.company}
                                </h4>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                                            <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={16} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;