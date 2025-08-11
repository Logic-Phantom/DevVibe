'use client';

import { motion } from 'framer-motion';
import { User, Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <User className="w-8 h-8" />,
      title: '사용자 중심',
      description: '사용자의 니즈를 최우선으로 생각하며 직관적인 인터페이스를 설계합니다.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '깔끔한 코드',
      description: '읽기 쉽고 유지보수가 용이한 코드 작성을 지향합니다.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '창의적 사고',
      description: '새로운 기술과 아이디어를 적극적으로 탐구하고 적용합니다.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '목표 지향',
      description: '명확한 목표를 설정하고 체계적으로 프로젝트를 진행합니다.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            개발에 대한 열정과 창의성을 바탕으로 사용자에게 가치 있는 서비스를 제공하고 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              개발자로서의 <span className="gradient-text">여정</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              웹 개발을 시작한 지 3년이 되었습니다. 처음에는 HTML과 CSS로 시작하여 
              점진적으로 JavaScript, React, Node.js 등 다양한 기술을 학습하고 적용해왔습니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              현재는 풀스택 개발자로서 프론트엔드와 백엔드를 모두 다루며, 
              사용자 경험을 향상시키는 서비스를 개발하는 것에 집중하고 있습니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              새로운 기술을 배우는 것을 좋아하며, 항상 최신 트렌드를 파악하고 
              프로젝트에 적용하려고 노력합니다.
            </p>
          </motion.div>

          {/* Right Column - Image or Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
