'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Users, Globe, ArrowRight, Clock, Award, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      color: 'from-red-500 to-red-600',
      description: '가장 빠른 응답'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+82 10-1234-5678',
      link: 'tel:+821012345678',
      color: 'from-green-500 to-green-600',
      description: '직접 통화 가능'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Seoul, South Korea',
      link: null,
      color: 'from-blue-500 to-blue-600',
      description: '원격 협업 가능'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Logic-Phantom',
      color: 'hover:bg-gray-900 hover:text-white',
      followers: '100+'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      color: 'hover:bg-blue-600 hover:text-white',
      followers: '500+'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/yourprofile',
      color: 'hover:bg-blue-400 hover:text-white',
      followers: '200+'
    }
  ];

  const contactStats = [
    { icon: MessageCircle, value: '24/7', label: '응답 시간', color: 'from-blue-500 to-blue-600', description: '빠른 피드백' },
    { icon: Users, value: '100+', label: '만족한 클라이언트', color: 'from-purple-500 to-purple-600', description: '높은 만족도' },
    { icon: Globe, value: 'Worldwide', label: '서비스 지역', color: 'from-green-500 to-green-600', description: '글로벌 서비스' }
  ];

  const achievements = [
    { icon: Award, text: '우수 개발자 인증', color: 'from-yellow-500 to-yellow-600' },
    { icon: Star, text: '5년 연속 고객 만족', color: 'from-blue-500 to-blue-600' },
    { icon: Clock, text: '평균 2시간 응답', color: 'from-green-500 to-green-600' }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -70, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 20
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/8 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.6, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-200/8 to-purple-200/8 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-400/30 mb-6"
          >
            <MessageCircle size={20} className="text-blue-300" />
            <span className="text-blue-200 font-medium">Get In Touch</span>
            <MessageCircle size={20} className="text-blue-300" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            연락하기
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            프로젝트 협업이나 궁금한 점이 있으시다면 언제든 연락해 주세요. 빠른 시일 내에 답변 드리겠습니다.
          </p>
        </motion.div>

        {/* Contact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {contactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                <stat.icon size={40} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-3">{stat.value}</div>
              <div className="text-xl text-blue-200 mb-2">{stat.label}</div>
              <div className="text-blue-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex flex-wrap justify-center gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 px-6 py-4 rounded-2xl border border-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}>
                    <achievement.icon size={20} className="text-white" />
                  </div>
                  <span className="text-white font-semibold">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-10 text-white">
              연락처 정보
            </h3>
            <p className="text-blue-200 mb-10 leading-relaxed text-lg">
              다양한 채널을 통해 연락할 수 있습니다. 이메일이나 전화로 연락하시면 가장 빠르게 응답할 수 있습니다.
            </p>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start space-x-6 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                      <p className="text-blue-200 mb-1">{info.description}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-300 hover:text-white transition-colors font-medium text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-blue-300 font-medium text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-semibold text-white mb-6">소셜 미디어</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className={`group p-6 bg-white/10 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-blue-200 border border-white/20 transition-all duration-300 hover:scale-105 ${social.color}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={32} className="mb-3" />
                    <div className="text-center">
                      <div className="font-semibold text-lg">{social.name}</div>
                      <div className="text-sm opacity-80">{social.followers}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">메시지 보내기</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">메시지가 전송되었습니다!</h4>
                  <p className="text-blue-200">빠른 시일 내에 답변 드리겠습니다.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="이메일을 입력하세요"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-2">
                      제목 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="제목을 입력하세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                      메시지 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="메시지를 입력하세요"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        ></motion.div>
                        <span>전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        <span>메시지 보내기</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
