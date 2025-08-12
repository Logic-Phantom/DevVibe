'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Lightbulb, Award, Clock, FolderOpen, Heart, TrendingUp, Rocket, Zap, CheckCircle, Sparkles, ArrowRight, Figma, Brain, Smartphone, FlaskRound } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
      icon: Clock, 
      value: '3+', 
      label: 'Years Experience', 
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      description: 'HTML/CSS/JavaScript'
    },
    { 
      icon: FolderOpen, 
      value: '3+', 
      label: 'Projects Completed', 
      gradient: 'from-violet-400 via-purple-500 to-indigo-500',
      description: '웹 개발 중심'
    },
    { 
      icon: Code, 
      value: '2+', 
      label: 'Tech Stacks', 
      gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
      description: '프론트엔드 + 백엔드'
    },
    { 
      icon: Heart, 
      value: '100%', 
      label: 'Passion Driven', 
      gradient: 'from-pink-400 via-rose-500 to-red-500',
      description: '지속적인 학습'
    }
  ];

  const features = [
    {
      icon: Figma,
      title: '디자인 도구',
      description: 'Figma를 활용한 UI/UX 디자인 경험을 바탕으로 개발자와의 협업을 원활하게 합니다.',
      gradient: 'from-blue-500 to-cyan-500',
      highlight: 'Figma'
    },
    {
      icon: Brain,
      title: 'AI 학습 중',
      description: 'YOLO 모델과 LM Studio를 활용한 AI 활용 방법을 학습하고 있습니다.',
      gradient: 'from-purple-500 to-pink-500',
      highlight: 'AI 학습'
    },
    {
      icon: Smartphone,
      title: '웹 개발',
      description: 'HTML, CSS, JavaScript 기반의 반응형 웹 개발에 집중하고 있습니다.',
      gradient: 'from-yellow-500 to-orange-500',
      highlight: '웹 개발'
    },
    {
      icon: FlaskRound,
      title: 'Java 개발',
      description: 'Spring Framework와 Spring Boot를 활용한 백엔드 개발 경험이 있습니다.',
      gradient: 'from-emerald-500 to-teal-500',
      highlight: 'Spring'
    }
  ];

  const achievements = [
    { icon: Rocket, text: '웹 개발', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Zap, text: 'Java/Spring', gradient: 'from-purple-500 to-pink-500' },
    { icon: CheckCircle, text: 'Git/SVN', gradient: 'from-emerald-500 to-teal-500' }
  ];

  return (
    <section id="about" className="section-padding relative bg-gray-900">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50 shadow-lg mb-8"
          >
            <Sparkles size={20} className="text-amber-400" />
            <span className="text-gray-300 font-medium">Logic Phantom</span>
            <Sparkles size={20} className="text-amber-400" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="section-title"
          >
            성장하는 개발자
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="section-subtitle"
          >
            "조용히 코딩하고, 과감히 배포한다"는 모토로 지속적인 학습과 성장을 추구하는 개발자입니다.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="skill-card">
              <h3 className="text-3xl font-bold text-gray-100 mb-6 relative">
                개발자로서의 여정
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                />
              </h3>
              
              <div className="space-y-4">
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
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors">
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
                className="mt-8 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Award size={20} className="text-white" />
                    </div>
                    <span className="text-gray-100 font-medium">성장하는 개발자</span>
                  </div>
                  <TrendingUp size={20} className="text-emerald-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="skill-card">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-base font-medium text-gray-100 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.description}</div>
                  </div>
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
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-3xl font-bold text-gray-100 mb-6"
            >
               현재 기술 영역
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50"
            >
              <Lightbulb size={20} className="text-indigo-400" />
              <span className="text-indigo-300 font-medium">실무 중심</span>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="skill-card h-full">
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-700/50">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
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

        </motion.div>
      </div>
    </section>
  );
};

export default About;
