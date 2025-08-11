'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Database, Smartphone, Code2, GitBranch, Zap, Shield, Cloud, TrendingUp, Star, Award, Target, CheckCircle, Rocket } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      description: '사용자 인터페이스와 경험을 담당',
      skills: [
        { name: 'HTML/CSS', level: 85, color: 'from-orange-500 to-orange-600', experience: '3년' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-yellow-600', experience: '3년' },
        { name: 'React', level: 40, color: 'from-blue-500 to-blue-600', experience: '1년 미만' },
        { name: 'Next.js', level: 35, color: 'from-purple-500 to-purple-600', experience: '1년 미만' },
        { name: 'TypeScript', level: 30, color: 'from-indigo-500 to-indigo-600', experience: '1년 미만' }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      description: '서버 사이드 로직과 데이터 처리',
      skills: [
        { name: 'Java', level: 75, color: 'from-orange-500 to-orange-600', experience: '1년' },
        { name: 'Spring Framework', level: 70, color: 'from-green-500 to-green-600', experience: '1년' },
        { name: 'Spring Boot', level: 65, color: 'from-emerald-500 to-emerald-600', experience: '1년' },
        { name: 'Python', level: 25, color: 'from-blue-500 to-blue-600', experience: '1년 미만' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Smartphone,
      description: '개발 도구와 기타 기술',
      skills: [
        { name: 'Git', level: 80, color: 'from-orange-500 to-orange-600', experience: '3년' },
        { name: 'SVN', level: 75, color: 'from-red-500 to-red-600', experience: '3년' },
        { name: 'Figma', level: 70, color: 'from-purple-500 to-purple-600', experience: '2년' },
        { name: 'Tailwind CSS', level: 30, color: 'from-cyan-500 to-cyan-600', experience: '1년 미만' }
      ]
    }
  ];

  const additionalSkills = [
    { icon: Code2, name: 'RESTful APIs', description: 'API 설계 및 개발', color: 'from-blue-500 to-blue-600', level: 'Intermediate' },
    { icon: GitBranch, name: 'Version Control', description: 'Git/SVN 형상관리', color: 'from-purple-500 to-purple-600', level: 'Advanced' },
    { icon: Zap, name: 'Web Development', description: '웹 개발 및 배포', color: 'from-yellow-500 to-yellow-600', level: 'Advanced' },
    { icon: Shield, name: 'Java Development', description: 'Spring 기반 백엔드', color: 'from-red-500 to-red-600', level: 'Intermediate' },
    { icon: Cloud, name: 'CI/CD', description: '지속적 통합/배포', color: 'from-indigo-500 to-indigo-600', level: 'Beginner' },
    { icon: TrendingUp, name: 'UI/UX Design', description: 'Figma 디자인', color: 'from-green-500 to-green-600', level: 'Intermediate' }
  ];

  const learningSkills = [
    { name: 'AI/ML', color: 'from-purple-500 to-purple-600', progress: 40 },
    { name: 'YOLO', color: 'from-blue-500 to-blue-600', progress: 35 },
    { name: 'LM Studio', color: 'from-green-500 to-green-600', progress: 30 },
    { name: 'Python', color: 'from-orange-500 to-orange-600', progress: 25 }
  ];

  const skillLevels = [
    { level: 'Beginner', color: 'from-gray-400 to-gray-500', range: '0-30%' },
    { level: 'Intermediate', color: 'from-blue-400 to-blue-500', range: '31-70%' },
    { level: 'Advanced', color: 'from-green-400 to-green-500', range: '71-90%' },
    { level: 'Expert', color: 'from-purple-400 to-purple-500', range: '91-100%' }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15
          }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-100/25 to-pink-100/25 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-100/15 to-purple-100/15 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-blue-50 px-6 py-3 rounded-full border border-indigo-200 mb-6"
          >
            <Target size={20} className="text-indigo-600" />
            <span className="text-indigo-700 font-medium">Technical Skills</span>
            <Target size={20} className="text-indigo-600" />
          </motion.div>
          
          <h2 className="section-title">기술 스택</h2>
          <p className="section-subtitle">
            다양한 기술 스택을 활용하여 효율적이고 확장 가능한 솔루션을 개발합니다.
          </p>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">숙련도 기준</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-4 h-4 bg-gradient-to-r ${level.color} rounded-full mx-auto mb-2`}></div>
                  <div className="text-sm font-semibold text-gray-800">{level.level}</div>
                  <div className="text-xs text-gray-600">{level.range}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="skill-card group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <category.icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
              
              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{skill.experience}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg group-hover/skill:shadow-xl transition-all duration-300`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-blue-500/20 rounded-bl-lg"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">추가 역량</h3>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full border border-blue-200">
              <Star size={20} className="text-yellow-500" />
              <span className="text-blue-700 font-medium">전문적인 개발 역량</span>
            </div>
          </div>
          
          <div className="grid-responsive">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="skill-card text-center group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${skill.color} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {skill.level}
                  </span>
                </div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${skill.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <skill.icon size={40} className="text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{skill.name}</h4>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-blue-500/20 rounded-bl-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">현재 학습 중인 기술</h3>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full border border-green-200">
              <TrendingUp size={20} className="text-green-500" />
              <span className="text-green-700 font-medium">새로운 기술 습득 중</span>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {learningSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-center group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Rocket size={24} className="text-white" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-2">{skill.name}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.progress}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-md`}
                    />
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{skill.progress}%</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Award size={32} className="text-blue-600" />
              <CheckCircle size={32} className="text-green-600" />
              <Star size={32} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">기술 역량 인증</h3>
            <p className="text-blue-700 font-medium text-lg">지속적인 기술 향상을 통해 최고의 솔루션을 제공합니다</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
