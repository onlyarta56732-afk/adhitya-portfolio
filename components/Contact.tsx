import React from 'react';
import { Mail, Instagram, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            {/* Inner Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
            
                <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-mono w-fit mb-6">
                        <MessageSquare size={12} /> GET IN TOUCH
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something <span className="text-gradient">amazing</span>.</h2>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                    Have an idea for an IoT project or need a robotics engineer? I'm always open to discussing new opportunities.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:onlyarta56732@gmail.com" className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-mono">Email Me</div>
                                <div className="text-white font-medium text-lg group-hover:text-primary transition-colors">onlyarta56732@gmail.com</div>
                            </div>
                        </a>

                        <a href="#" className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-mono">Call Me</div>
                                <div className="text-white font-medium text-lg group-hover:text-secondary transition-colors">0895321758494</div>
                            </div>
                        </a>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-slate-500 font-mono">Location</div>
                                <div className="text-white font-medium text-lg">East Java, Indonesia</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all" placeholder="you@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button className="w-full bg-white text-black hover:bg-slate-200 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-white/10">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;