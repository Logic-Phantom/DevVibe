'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, FolderOpen, Mail, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-2xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="relative w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <span className="relative z-10">PF</span>
            </motion.div>
            <motion.span 
              className="text-xl font-bold gradient-text"
              animate={{ opacity: isScrolled ? 1 : 0.9 }}
            >
              Forest_LIM
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-gray-800 shadow-lg'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                }`}
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.label}</span>
                </div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
          >
            <span>연락하기</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={20} className="text-gray-300" /> : <Menu size={20} className="text-gray-300" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="glass-effect mx-4 mb-4 rounded-xl border border-gray-700/50 p-4">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg font-medium transition-all duration-300 text-left ${
                        activeSection === item.id
                          ? 'text-blue-400 bg-gray-800 shadow-lg'
                          : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                      }`}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon size={18} className="flex-shrink-0" />
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActiveSection"
                          className="w-2 h-2 bg-blue-400 rounded-full ml-auto"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="pt-3"
                  >
                    <motion.button
                      onClick={() => scrollToSection('contact')}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>연락하기</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
