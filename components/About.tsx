import React from 'react';
import { Award, BookOpen, Code, Cpu, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cpu size={120} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Bridging Hardware & Intelligence</h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              I am a Computer Engineering student at <span className="text-primary font-semibold">Politeknik Elektronika Negeri Surabaya</span>, driven by a relentless curiosity for how things work.
              My journey involves merging the physical world with digital logic through IoT, Robotics, and Embedded Systems.
            </p>
            <div className="flex flex-wrap gap-3">
              {['C++', 'IoT', 'Robotics', 'Node-RED', 'Linux', 'ROS', 'Python', 'React', 'Tailwind', 'Scientific papers', 'Computer Vision', 'Kotlin'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-primary font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Education</h3>
              <p className="text-slate-400 text-sm mb-4">My academic path</p>
            </div>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-white/10">
                <div className="text-white font-medium">Politeknik Elektronika Negeri Surabaya</div>
                <div className="text-xs text-slate-500">Computer Engineering | 2025 - 2029</div>
              </div>
              <div className="pl-4 border-l-2 border-white/10">
                <div className="text-white font-medium">SMK Antartika 2 Sidoarjo</div>
                <div className="text-xs text-slate-500">Computer and Network Engineering | 2022 - 2025</div>
              </div>
            </div>
          </motion.div>

          {/* Stats / Interest Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
              <Zap size={32} />
            </div>
            <div className="text-3xl font-bold text-white">7+</div>
            <div className="text-slate-400 text-sm">IoT Projects</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
              <Code size={32} />
            </div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-slate-400 text-sm">Languages</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
              <Shield size={32} />
            </div>
            <div className="text-3xl font-bold text-white">Top 6</div>
            <div className="text-slate-400 text-sm">Robotics Comp</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;