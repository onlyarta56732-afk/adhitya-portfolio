import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Instagram, Cpu, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["IoT Enthusiast", "Robotics Developer", "Network Engineer", "Scientific Papers", "AI Enthusiast", "Machine Learning Engineer", "Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-mono text-green-400">Available for Projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Adhitya <br />
              <span className="text-gradient">Ramadhani</span>
            </h1>

            <div className="h-8 mb-8 flex justify-center md:justify-start overflow-hidden">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-xl md:text-2xl text-slate-400 font-mono"
              >
                &lt; {roles[roleIndex]} /&gt;
              </motion.span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <a href="#projects" className="group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  View Work <ArrowRight size={18} />
                </span>
              </a>

              {/* BAGIAN YANG DIPERBAIKI: Button diganti menjadi Tag <a> */}
              <a
                href="/Muhammad Adhitya Ramadhani_CV.pdf"
                download="CV_Adhitya_Ramadhani.pdf"
                className="px-8 py-3 glass rounded-full text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                Download CV <Download size={18} />
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start items-center">
              <div className="h-px w-12 bg-slate-700"></div>
              <a href="https://github.com/onlyarta56732-afk" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Github size={22} /></a>
              <a href="https://www.linkedin.com/in/muhammad-adhitya-ramadhani-98461336a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={22} /></a>
              <a href="https://www.instagram.com/adhitya_arta?igsh=MTJzZTk1ZjJ6Zm9qcA==" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><Instagram size={22} /></a>
            </div>
          </motion.div>

          {/* Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative flex justify-center order-1 md:order-2"
          >
            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
              {/* Floating Tech Icons */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-0 right-10 z-20 p-4 glass rounded-2xl border-white/10 bg-black/40 backdrop-blur-md">
                <Cpu className="text-primary w-8 h-8" />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute bottom-10 left-0 z-20 p-4 glass rounded-2xl border-white/10 bg-black/40 backdrop-blur-md">
                <Database className="text-secondary w-8 h-8" />
              </motion.div>
              <motion.div animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }} className="absolute top-1/2 -right-4 z-20 p-3 glass rounded-full border-white/10 bg-black/40 backdrop-blur-md">
                <Globe className="text-accent w-6 h-6" />
              </motion.div>

              {/* Main Image Container */}
              <div className="w-full h-full relative z-10 rounded-full md:rounded-[3rem] overflow-hidden border-2 border-white/5 shadow-2xl shadow-primary/20 bg-gradient-to-b from-white/5 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 mix-blend-overlay"></div>

                {/* DITAMBAHKAN GARIS MIRING PADA SRC */}
                <img
                  src="/adhit jpg.jpeg"
                  alt="Muhammad Adhitya Ramadhani"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full z-0 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;