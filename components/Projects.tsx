import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, Zap } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Projects</h2>
                <div className="h-1 w-full bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-slate-400 max-w-sm text-right">
               Exploring the boundaries of code and hardware.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={project.id} 
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                >
                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                    
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent opacity-90" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 text-primary text-xs font-mono mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                <Zap size={12} /> {project.category}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                            <div className="h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-500"></div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      {/* Modern Modal */}
      <AnimatePresence>
        {selectedProject && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center px-4"
                onClick={() => setSelectedProject(null)}
            >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                
                <motion.div 
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    className="glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl relative flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white/70 hover:text-white hover:bg-black/80 transition-colors z-20"
                    >
                        <X size={20} />
                    </button>
                    
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <img 
                            src={selectedProject.imageUrl} 
                            alt={selectedProject.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto bg-darker/50">
                        <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
                            <Layers size={14} />
                            {selectedProject.category}
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h3>
                        
                        <div className="prose prose-invert prose-sm mb-8 text-slate-300">
                            <p>{selectedProject.description}</p>
                        </div>
                        
                        <div className="mb-8">
                            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300 text-xs font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                            View Project Source <ExternalLink size={18} />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;