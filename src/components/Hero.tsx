'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update mouse position immediately for cursor
      setMousePosition({ x: e.clientX, y: e.clientY });
      
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

  // Predefined particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "20%", top: "80%" },
    { left: "30%", top: "40%" },
    { left: "40%", top: "60%" },
    { left: "50%", top: "30%" },
    { left: "60%", top: "70%" },
    { left: "70%", top: "50%" },
    { left: "80%", top: "25%" },
    { left: "90%", top: "75%" },
    { left: "15%", top: "65%" },
    { left: "25%", top: "35%" },
    { left: "35%", top: "85%" },
    { left: "45%", top: "15%" },
    { left: "55%", top: "55%" },
    { left: "65%", top: "45%" },
    { left: "75%", top: "95%" },
    { left: "85%", top: "5%" },
    { left: "95%", top: "85%" },
    { left: "5%", top: "55%" },
    { left: "55%", top: "95%" }
  ];

  if (!isClient) {
    return (
      <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center px-4">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text-animate">안녕하세요, 임채명입니다</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                <span className="inline-block">
                  프론트엔드와 백엔드 개발에 열정을 가진{' '}
                  <span className="text-blue-400 font-semibold">풀스택 개발자</span>입니다.
                </span>
                <br className="hidden md:block" />
                <span className="inline-block">
                  사용자 경험을 중시하며,{' '}
                  <span className="text-purple-400 font-semibold">깔끔하고 효율적인 코드</span> 작성을 지향합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Custom Mouse Cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />
      
      {/* Mouse Trail Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400/30 rounded-full pointer-events-none z-40"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* 3D Floating Cubes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotateY: [0, 180, 360],
            rotateX: [0, 90, 180]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg backdrop-blur-sm border border-blue-500/30"
          style={{ transformStyle: "preserve-3d" }}
        />
        
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            rotateY: [0, -180, -360],
            rotateZ: [0, 90, 180]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-lg backdrop-blur-sm border border-purple-500/30"
          style={{ transformStyle: "preserve-3d" }}
        />
        
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            rotateX: [0, 180, 360],
            rotateZ: [0, -90, -180]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
            delay: 10
          }}
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-lg backdrop-blur-sm border border-indigo-500/30"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Floating Geometric Shapes */}
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
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-xl"
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
          className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-full blur-xl"
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
          className="absolute top-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-blue-600/10 rounded-full blur-xl"
        />

        {/* Particle Effect with predefined positions */}
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: pos.left,
              top: pos.top,
            }}
          />
        ))}
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
          {/* Main Heading with Enhanced 3D Effect */}
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
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              <span className="gradient-text-animate">안녕하세요, 임채명입니다</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
              style={{ transform: "translateZ(75px)" }}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                프론트엔드와 백엔드 개발에 열정을 가진{' '}
                <span className="text-blue-400 font-semibold">풀스택 개발자</span>입니다.
              </motion.span>
              <br className="hidden md:block" />
              <motion.span 
                className="inline-block"
                whileHover={{ color: "#A78BFA" }}
                transition={{ duration: 0.3 }}
              >
                사용자 경험을 중시하며,{' '}
                <span className="text-purple-400 font-semibold">깔끔하고 효율적인 코드</span> 작성을 지향합니다.
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links with 3D Effect */}
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
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                </motion.div>
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Button with 3D Effect */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center items-center"
            style={{ transform: "translateZ(0px)" }}
          >
            <motion.button 
              onClick={scrollToAbout}
              className="group btn-primary text-base px-8 py-3 flex items-center space-x-2 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">더 알아보기</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
