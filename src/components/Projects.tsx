'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Star, GitBranch, Calendar, Code, Eye, TrendingUp, Award, Sparkles, Zap, Clock, Users, Globe, ArrowRight } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  topics: string[];
}

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getSampleRepositories = (): Repository[] => [
    {
      id: 1,
      name: 'DevVibe Portfolio',
      description: 'Next.js와 Tailwind CSS를 사용한 현대적인 포트폴리오 웹사이트. 반응형 디자인과 애니메이션을 통해 사용자 경험을 향상시켰습니다.',
      html_url: 'https://github.com/Logic-Phantom/DevVibe',
      homepage: 'https://dev-vibe.vercel.app',
      stargazers_count: 15,
      forks_count: 8,
      language: 'TypeScript',
      updated_at: '2024-01-15T10:30:00Z',
      topics: ['nextjs', 'typescript', 'tailwindcss', 'portfolio', 'responsive']
    },
    {
      id: 2,
      name: 'E-Commerce Platform',
      description: 'React와 Node.js를 사용한 풀스택 이커머스 플랫폼. 결제 시스템, 사용자 관리, 상품 카탈로그 등 완전한 기능을 제공합니다.',
      html_url: 'https://github.com/Logic-Phantom/ecommerce',
      homepage: 'https://ecommerce-demo.vercel.app',
      stargazers_count: 25,
      forks_count: 12,
      language: 'JavaScript',
      updated_at: '2024-01-10T14:20:00Z',
      topics: ['react', 'nodejs', 'mongodb', 'ecommerce', 'payment']
    },
    {
      id: 3,
      name: 'Task Management App',
      description: 'React Native로 개발한 크로스 플랫폼 태스크 관리 애플리케이션. 실시간 동기화와 오프라인 지원을 제공합니다.',
      html_url: 'https://github.com/Logic-Phantom/taskmanager',
      homepage: null,
      stargazers_count: 18,
      forks_count: 6,
      language: 'JavaScript',
      updated_at: '2024-01-05T09:15:00Z',
      topics: ['react-native', 'mobile', 'task-management', 'offline']
    },
    {
      id: 4,
      name: 'API Gateway Service',
      description: '마이크로서비스 아키텍처를 위한 API 게이트웨이. 인증, 로깅, 레이트 리미팅 등 고급 기능을 포함합니다.',
      html_url: 'https://github.com/Logic-Phantom/api-gateway',
      homepage: null,
      stargazers_count: 12,
      forks_count: 4,
      language: 'Go',
      updated_at: '2024-01-01T16:45:00Z',
      topics: ['go', 'microservices', 'api-gateway', 'authentication']
    },
    {
      id: 5,
      name: 'Data Visualization Dashboard',
      description: 'D3.js와 React를 사용한 인터랙티브 데이터 시각화 대시보드. 실시간 데이터 업데이트와 다양한 차트 타입을 지원합니다.',
      html_url: 'https://github.com/Logic-Phantom/data-viz',
      homepage: 'https://data-viz-demo.vercel.app',
      stargazers_count: 22,
      forks_count: 9,
      language: 'TypeScript',
      updated_at: '2023-12-28T11:20:00Z',
      topics: ['d3js', 'react', 'typescript', 'data-visualization', 'dashboard']
    },
    {
      id: 6,
      name: 'Chat Application',
      description: 'Socket.io와 React를 사용한 실시간 채팅 애플리케이션. 그룹 채팅, 파일 공유, 이모지 지원 등 다양한 기능을 제공합니다.',
      html_url: 'https://github.com/Logic-Phantom/chat-app',
      homepage: 'https://chat-demo.vercel.app',
      stargazers_count: 19,
      forks_count: 7,
      language: 'JavaScript',
      updated_at: '2023-12-25T13:30:00Z',
      topics: ['socketio', 'react', 'real-time', 'chat', 'file-sharing']
    }
  ];

  const fetchRepositories = async () => {
    try {
      const username = 'Logic-Phantom';
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);

      if (!response.ok) {
        throw new Error('GitHub API 요청에 실패했습니다.');
      }

      const data = await response.json();

      const filteredRepos = data
        .filter((repo: GitHubRepo) => !repo.fork && repo.description)
        .map((repo: GitHubRepo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          updated_at: repo.updated_at,
          topics: repo.topics || []
        }));

      setRepositories(filteredRepos.length > 0 ? filteredRepos : getSampleRepositories());
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      setRepositories(getSampleRepositories());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'TypeScript': 'from-blue-500 to-blue-600',
      'JavaScript': 'from-yellow-500 to-yellow-600',
      'Python': 'from-blue-500 to-blue-600',
      'Java': 'from-orange-500 to-orange-600',
      'C++': 'from-pink-500 to-pink-600',
      'Go': 'from-cyan-500 to-cyan-600',
      'Rust': 'from-orange-500 to-orange-600',
      'PHP': 'from-purple-500 to-purple-600',
      'Ruby': 'from-red-500 to-red-600',
      'Swift': 'from-orange-500 to-orange-600'
    };
    return colors[language || ''] || 'from-gray-500 to-gray-600';
  };

  const projectStats = [
    { icon: Users, value: '100+', label: 'GitHub Followers', color: 'from-blue-500 to-blue-600' },
    { icon: Star, value: '200+', label: 'Total Stars', color: 'from-yellow-500 to-yellow-600' },
    { icon: GitBranch, value: '50+', label: 'Total Forks', color: 'from-green-500 to-green-600' },
    { icon: Globe, value: '15+', label: 'Live Projects', color: 'from-purple-500 to-purple-600' }
  ];

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full"
            ></motion.div>
            <p className="mt-8 text-gray-600 text-xl">프로젝트를 불러오는 중...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-white/50 backdrop-blur-sm relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/25 to-indigo-100/25 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -70, 0],
            y: [0, 70, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 20
          }}
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:35px_35px]"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-3 rounded-full border border-purple-200 mb-6"
          >
            <Zap size={20} className="text-purple-600" />
            <span className="text-purple-700 font-medium">Projects</span>
            <Zap size={20} className="text-purple-600" />
          </motion.div>
          
          <h2 className="section-title">프로젝트 포트폴리오</h2>
          <p className="section-subtitle">
            GitHub에서 다양한 프로젝트를 확인할 수 있습니다. 각 프로젝트는 사용자 경험과 코드 품질을 중시하여 개발되었습니다.
          </p>
          
          {/* Projects Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full border border-blue-200 mt-6"
          >
            <Award size={20} className="text-blue-600" />
            <span className="text-blue-700 font-medium">창의적이고 혁신적인 프로젝트</span>
            <Sparkles size={20} className="text-purple-600" />
          </motion.div>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 text-center shadow-lg"
          >
            <p className="text-red-600 font-medium">{error}</p>
          </motion.div>
        )}

        <div className="grid-responsive">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card group relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {repo.name}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-lg">
                {repo.description}
              </p>

              {/* Project Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Star size={18} className="text-yellow-500" />
                    <span className="text-sm font-semibold">{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <GitBranch size={18} className="text-blue-500" />
                    <span className="text-sm font-semibold">{repo.forks_count}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Clock size={18} className="text-green-500" />
                  <span className="text-sm font-medium">{formatDate(repo.updated_at)}</span>
                </div>
              </div>

              {/* Language and Topics */}
              <div className="space-y-4 mb-6">
                {repo.language && (
                  <div className="flex items-center space-x-2">
                    <Code size={18} className="text-gray-500" />
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getLanguageColor(repo.language)} text-white shadow-lg`}>
                      {repo.language}
                    </span>
                  </div>
                )}
                
                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 5).map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors border border-gray-200"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 5 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200">
                        +{repo.topics.length - 5}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* View Project Button */}
              <div className="mt-6">
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={18} />
                  <span>프로젝트 보기</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-blue-500/20 rounded-bl-lg"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/Logic-Phantom"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-secondary inline-flex items-center space-x-3 text-lg px-10 py-4"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            <span>더 많은 프로젝트 보기</span>
            <TrendingUp size={24} />
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
