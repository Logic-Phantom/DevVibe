'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || '전송 중 오류가 발생했습니다.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dlacoaud92@naver.com',
      link: 'mailto:dlacoaud92@naver.com',
      color: 'from-red-500 to-red-600',
      description: '가장 빠른 응답'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '010-2883-2999',
      link: 'tel:+821028832999',
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

  return (
    <section id="contact" className="section-padding bg-gray-900 relative">
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
            <MessageCircle size={20} className="text-blue-400" />
            <span className="text-blue-300 font-medium">Get In Touch</span>
            <MessageCircle size={20} className="text-blue-400" />
          </motion.div>
          
          <h2 className="section-title">연락하기</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-100">
              연락처 정보
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              다양한 채널을 통해 연락할 수 있습니다. 이메일이나 전화로 연락하시면 가장 빠르게 응답할 수 있습니다.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group"
                  whileHover={{ x: 5 }}
                >
                  <div className="skill-card">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-100 mb-1">{info.title}</h4>
                        <p className="text-gray-400 mb-1 text-sm">{info.description}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-blue-400 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="skill-card">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">메시지 보내기</h3>

              {errorMsg && (
                <div className="mb-6 rounded-lg border border-red-700/50 bg-red-900/50 text-red-300 px-4 py-3">
                  {errorMsg}
                </div>
              )}

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">메시지가 전송되었습니다!</h4>
                  <p className="text-gray-400">빠른 시일 내에 답변 드리겠습니다.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300"
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300"
                        placeholder="이메일을 입력하세요"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      제목 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300"
                      placeholder="제목을 입력하세요"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      메시지 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="메시지를 입력하세요"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>메시지 보내기</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
