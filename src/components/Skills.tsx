'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Database, Smartphone, Target } from 'lucide-react';

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

  const skillLevels = [
    { level: 'Beginner', color: 'from-gray-400 to-gray-500', range: '0-30%' },
    { level: 'Intermediate', color: 'from-blue-400 to-blue-500', range: '31-70%' },
    { level: 'Advanced', color: 'from-green-400 to-green-500', range: '71-90%' },
    { level: 'Expert', color: 'from-purple-400 to-purple-500', range: '91-100%' }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900 relative">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700/50 mb-6"
          >
            <Target size={20} className="text-indigo-400" />
            <span className="text-indigo-300 font-medium">Technical Skills</span>
            <Target size={20} className="text-indigo-400" />
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
          <div className="skill-card">
            <h3 className="text-xl font-bold text-gray-100 mb-4 text-center">숙련도 기준</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillLevels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-4 h-4 bg-gradient-to-r ${level.color} rounded-full mx-auto mb-2`}></div>
                  <div className="text-sm font-semibold text-gray-100">{level.level}</div>
                  <div className="text-xs text-gray-400">{level.range}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="skill-card group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
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
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">{skill.experience}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} group-hover/skill:shadow-lg transition-all duration-300`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;