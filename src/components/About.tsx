'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code, Lightbulb, Target, Award, Clock, FolderOpen, Heart, Star, TrendingUp, Rocket, Zap, CheckCircle, Sparkles, ArrowRight, Globe, Shield, Zap as ZapIcon, Figma, Brain, MessageCircle, Smartphone, FlaskRound } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
      icon: Clock, 
      value: '3+', 
      label: 'Years Experience', 
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      description: 'HTML/CSS/JavaScript',
      bgGradient: 'from-amber-50 to-orange-50'
    },
    { 
      icon: FolderOpen, 
      value: '3+', 
      label: 'Projects Completed', 
      gradient: 'from-violet-400 via-purple-500 to-indigo-500',
      description: '웹 개발 중심',
      bgGradient: 'from-violet-50 to-purple-50'
    },
    { 
      icon: Code, 
      value: '2+', 
      label: 'Tech Stacks', 
      gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
      description: '프론트엔드 + 백엔드',
      bgGradient: 'from-cyan-50 to-blue-50'
    },
    { 
      icon: Heart, 
      value: '100%', 
      label: 'Passion Driven', 
      gradient: 'from-pink-400 via-rose-500 to-red-500',
      description: '지속적인 학습',
      bgGradient: 'from-pink-50 to-rose-50'
    }
  ];

  const features = [
    {
      icon: Figma,
      title: '디자인 도구',
      description: 'Figma를 활용한 UI/UX 디자인 경험을 바탕으로 개발자와의 협업을 원활하게 합니다.',
      gradient: 'from-blue-500 to-cyan-500',
      highlight: 'Figma',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Brain,
      title: 'AI 학습 중',
      description: 'YOLO 모델과 LM Studio를 활용한 AI 활용 방법을 학습하고 있습니다.',
      gradient: 'from-purple-500 to-pink-500',
      highlight: 'AI 학습',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Smartphone,
      title: '웹 개발',
      description: 'HTML, CSS, JavaScript 기반의 반응형 웹 개발에 집중하고 있습니다.',
      gradient: 'from-yellow-500 to-orange-500',
      highlight: '웹 개발',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      icon: FlaskRound,
      title: 'Java 개발',
      description: 'Spring Framework와 Spring Boot를 활용한 백엔드 개발 경험이 있습니다.',
      gradient: 'from-emerald-500 to-teal-500',
      highlight: 'Spring',
      bgGradient: 'from-emerald-50 to-teal-50'
    }
  ];

  const achievements = [
    { icon: Rocket, text: '웹 개발', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Zap, text: 'Java/Spring', gradient: 'from-purple-500 to-pink-500' },
    { icon: CheckCircle, text: 'Git/SVN', gradient: 'from-emerald-500 to-teal-500' }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
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
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 left-10 w-32 h-32 border border-blue-200/30 rounded-full" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-purple-200/30 rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-indigo-200/30 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-200/50 shadow-lg mb-8"
          >
            <Sparkles size={24} className="text-amber-500" />
            <span className="text-slate-700 font-semibold text-lg">Logic Phantom</span>
            <Sparkles size={24} className="text-amber-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6"
          >
            성장하는 개발자
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            "조용히 코딩하고, 과감히 배포한다"는 모토로 지속적인 학습과 성장을 추구하는 개발자입니다.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full opacity-20 blur-xl" />
            
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-8 relative">
                개발자로서의 여정
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                />
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />,
                    text: "HTML, CSS, JavaScript로 시작하여 3년간 웹 개발의 기초를 다졌습니다. 현재는 새로운 기술들을 학습하며 개발 역량을 키우고 있습니다."
                  },
                  {
                    icon: <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />,
                    text: "Java와 Spring Framework를 활용한 백엔드 개발 경험이 있으며, Git과 SVN을 통한 형상관리 경험이 있습니다."
                  },
                  {
                    icon: <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" />,
                    text: "Figma를 활용한 디자인 경험을 바탕으로 개발자와의 협업을 원활하게 하며, AI 기술(YOLO, LM Studio) 학습에 관심을 가지고 있습니다."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="mt-2 flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg group-hover:text-slate-900 transition-colors">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              {/* Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Award size={24} className="text-white" />
                    </div>
                    <span className="text-slate-800 font-semibold text-lg">성장하는 개발자</span>
                  </div>
                  <TrendingUp size={24} className="text-emerald-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group relative"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-6 shadow-xl border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center relative z-10">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-slate-800 mb-2">{stat.label}</div>
                    <div className="text-sm text-slate-600">{stat.description}</div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-white/30 rounded-bl-lg" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent mb-6"
            >
               현재 기술 영역
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-indigo-200/50 shadow-lg"
            >
              <Lightbulb size={24} className="text-indigo-600" />
              <span className="text-indigo-700 font-semibold text-lg">실무 중심</span>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="group relative"
                whileHover={{ y: -12, scale: 1.03 }}
              >
                <div className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm relative overflow-hidden h-full`}>
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 text-sm font-semibold rounded-full border border-white/50 shadow-lg">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <feature.icon size={40} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-white/30 rounded-bl-lg" />
                  
                  {/* Arrow Icon */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={20} className="text-slate-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_75%,transparent_75%)] bg-[size:20px_20px]" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-8">주요 경험 영역</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="group"
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-xl border border-white/50 relative overflow-hidden">
                      <div className={`w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon size={24} className="text-white" />
                      </div>
                      <span className="text-slate-800 font-semibold text-lg">{achievement.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
