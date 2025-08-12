'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);
      
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating 3D Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-full blur-xl"
        />
      </div>

      <div 
        ref={containerRef}
        className="container-custom relative z-10 perspective-1000"
      >
        <motion.div 
          className="text-center px-4"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Main Heading with 3D Effect */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
            style={{ transform: "translateZ(50px)" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ transform: "translateZ(100px)" }}
            >
              <span className="gradient-text">안녕하세요, 임채명입니다</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
              style={{ transform: "translateZ(75px)" }}
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

          {/* Social Links with 3D Effect */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center items-center space-x-6 mb-12"
            style={{ transform: "translateZ(25px)" }}
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
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <social.icon size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button with 3D Effect */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center items-center"
            style={{ transform: "translateZ(0px)" }}
          >
            <motion.button 
              onClick={scrollToAbout}
              className="group btn-primary text-base px-8 py-3 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span>더 알아보기</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
