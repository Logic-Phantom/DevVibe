'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, Zap, Code2, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/15 to-pink-400/15 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Floating Tech Icons */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-32 text-blue-400/40"
        >
          <Code2 size={56} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-32 text-purple-400/40"
        >
          <Zap size={48} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/3 left-1/4 text-indigo-400/40"
        >
          <Sparkles size={44} />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center px-4">
          {/* Enhanced Profile Section */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              {/* Main Profile Circle */}
              <div className="relative w-36 h-36 md:w-44 md:h-44">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 rounded-full p-1"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-full flex items-center justify-center text-5xl md:text-7xl">
                    👨‍💻
                  </div>
                </motion.div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                >
                  ⭐
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-2 -right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                >
                  🚀
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="gradient-text">안녕하세요, 임채명입니다</span>
            </h1>
            
            {/* Animated subtitle with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-5xl mx-auto leading-relaxed"
            >
              <span className="inline-block">
                프론트엔드와 백엔드 개발에 열정을 가진{' '}
                <span className="text-blue-600 font-semibold">풀스택 개발자</span>입니다.
              </span>
              <br className="hidden md:block" />
              <span className="inline-block">
                사용자 경험을 중시하며,{' '}
                <span className="text-purple-600 font-semibold">깔끔하고 효율적인 코드</span> 작성을 지향합니다.
              </span>
              <br className="hidden md:block" />
         
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center items-center space-x-8 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/Logic-Phantom", label: "GitHub", color: "hover:bg-gray-900 hover:text-white" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/%EC%B1%84%EB%AA%85-%EC%9E%84-a8b456379/", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
              { icon: Mail, href: "mailto:dlacoaud92@naver.com", label: "Email", color: "hover:bg-red-500 hover:text-white" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? "_self" : "_blank"}
                rel={social.label === 'Email' ? "noopener" : "noopener noreferrer"}
                onClick={social.label === 'Email' ? (e) => {
                  e.preventDefault();
                  const email = 'dlacoaud92@naver.com';
                  if (navigator.share) {
                    navigator.share({
                      title: 'Forest_LIM 포트폴리오',
                      text: 'Forest_LIM에게 연락하기',
                      url: `mailto:${email}`
                    });
                  } else {
                    // Fallback: 클립보드에 복사
                    navigator.clipboard.writeText(email).then(() => {
                      alert('이메일 주소가 클립보드에 복사되었습니다: ' + email);
                    }).catch(() => {
                      // 클립보드 API가 지원되지 않는 경우
                      window.open(`mailto:${email}`);
                    });
                  }
                } : undefined}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className={`group p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={28} className="text-gray-700 group-hover:text-white transition-colors" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.button 
              onClick={scrollToAbout}
              className="group btn-primary text-lg px-10 py-4 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>더 알아보기</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              className="group btn-secondary text-lg px-10 py-4 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>이력서 다운로드</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
