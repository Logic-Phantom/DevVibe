'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center px-4">
          {/* Simple Profile Section */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-full p-1"
                >
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-4xl md:text-6xl">
                    👨‍💻
                  </div>
                </motion.div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">안녕하세요, 임채명입니다</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="inline-block">
                프론트엔드와 백엔드 개발에 열정을 가진{' '}
                <span className="text-blue-400 font-semibold">풀스택 개발자</span>입니다.
              </span>
              <br className="hidden md:block" />
              <span className="inline-block">
                사용자 경험을 중시하며,{' '}
                <span className="text-purple-400 font-semibold">깔끔하고 효율적인 코드</span> 작성을 지향합니다.
              </span>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/Logic-Phantom", label: "GitHub", color: "hover:bg-gray-800 hover:text-white" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/%EC%B1%84%EB%AA%85-%EC%9E%84-a8b456379/", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className={`group p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center items-center"
          >
            <motion.button 
              onClick={scrollToAbout}
              className="group btn-primary text-base px-8 py-3 flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>더 알아보기</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
