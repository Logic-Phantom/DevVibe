'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Zap,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-800' },
        { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-cyan-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-orange-600' },
      ]
    },
    {
      title: 'Backend',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 80, color: 'from-gray-600 to-gray-700' },
        { name: 'Python', level: 75, color: 'from-blue-500 to-blue-600' },
        { name: 'Django', level: 70, color: 'from-green-600 to-green-700' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-500 to-blue-600' },
      ]
    },
    {
      title: 'Mobile & Tools',
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: 'React Native', level: 70, color: 'from-blue-500 to-blue-600' },
        { name: 'Git', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Docker', level: 65, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS', level: 60, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Figma', level: 75, color: 'from-purple-500 to-purple-600' },
      ]
    }
  ];

  const additionalSkills = [
    { name: 'RESTful APIs', icon: <Code2 className="w-6 h-6" /> },
    { name: 'GraphQL', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'Performance Optimization', icon: <Zap className="w-6 h-6" /> },
    { name: 'Security Best Practices', icon: <Shield className="w-6 h-6" /> },
    { name: 'CI/CD', icon: <Cloud className="w-6 h-6" /> },
    { name: 'Testing', icon: <Code2 className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 효율적이고 확장 가능한 솔루션을 개발합니다.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Additional <span className="gradient-text">Skills</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-3">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              현재 학습 중인 기술
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                Rust
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                WebAssembly
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm">
                Blockchain
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
