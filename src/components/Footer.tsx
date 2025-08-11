'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Star, Award, Zap } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks: { title: string; links: { name: string; href: string }[] }[] = [];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Logic-Phantom', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/%EC%B1%84%EB%AA%85-%EC%9E%84-a8b456379/', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Mail, href: 'mailto:dlacoaud92@naver.com', label: 'Email', color: 'hover:bg-red-500 hover:text-white' }
  ];

  // Achievements removed as requested

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
            </motion.div>

            {/* Right Side - Quick Links Grid */}
            {/* Quick links removed as requested */}
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
              <p className="text-blue-200 text-sm">© {currentYear} DevVibe.</p>
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
      {/* Floating decorative icons removed to avoid unused references */}
    </footer>
  );
};

export default Footer;
