'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Star, Award, Zap } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '개발',
      links: [
        { name: 'Frontend', href: '#skills' },
        { name: 'Backend', href: '#skills' },
        { name: 'Mobile', href: '#skills' },
        { name: 'DevOps', href: '#skills' }
      ]
    },
    {
      title: '프로젝트',
      links: [
        { name: 'Portfolio', href: '#projects' },
        { name: 'E-Commerce', href: '#projects' },
        { name: 'Mobile Apps', href: '#projects' },
        { name: 'APIs', href: '#projects' }
      ]
    },
    {
      title: '서비스',
      links: [
        { name: '웹 개발', href: '#about' },
        { name: '앱 개발', href: '#about' },
        { name: 'UI/UX 디자인', href: '#about' },
        { name: '컨설팅', href: '#about' }
      ]
    },
    {
      title: '연락처',
      links: [
        { name: 'Email', href: 'mailto:your.email@example.com' },
        { name: 'Phone', href: 'tel:+821012345678' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
        { name: 'GitHub', href: 'https://github.com/Logic-Phantom' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Logic-Phantom', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Twitter, href: 'https://twitter.com/yourprofile', label: 'Twitter', color: 'hover:bg-blue-400 hover:text-white' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:bg-red-500 hover:text-white' }
  ];

  const achievements = [
    { icon: Star, text: '5년 연속 우수 개발자', color: 'from-yellow-500 to-yellow-600' },
    { icon: Award, text: '고객 만족도 100%', color: 'from-blue-500 to-blue-600' },
    { icon: Zap, text: '빠른 응답 시간', color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 20
          }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          {/* Top Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Left Side - Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  DV
                </div>
                <span className="text-2xl font-bold gradient-text">DevVibe</span>
              </div>
              
              <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
                개발에 대한 열정과 창의성을 바탕으로 사용자에게 가치 있는 서비스를 제공합니다. 
                최신 기술과 트렌드를 활용하여 혁신적인 솔루션을 개발합니다.
              </p>
              
              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}>
                      <achievement.icon size={12} className="text-white" />
                    </div>
                    <span className="text-blue-200 text-sm">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Quick Links Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {footerLinks.map((section, sectionIndex) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-blue-200 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-12"
          ></motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-blue-200 text-sm">
                © {currentYear} <span className="font-semibold">DevVibe</span>. All rights reserved.
              </p>
              <p className="text-blue-300 text-xs mt-1">
                Made with <Heart className="inline w-3 h-3 text-red-400" /> in South Korea
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-blue-200 border border-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} className="mx-auto group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>

      {/* Floating Elements */}
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
        className="absolute top-20 right-20 text-blue-400/20"
      >
        <Star size={32} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-20 text-purple-400/20"
      >
        <Award size={28} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/3 left-1/3 text-indigo-400/20"
      >
        <Zap size={24} />
      </motion.div>
    </footer>
  );
};

export default Footer;
