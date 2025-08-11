'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitBranch, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  topics: string[];
  fork: boolean;
}

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GitHub API에서 저장소 정보 가져오기
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        // 실제 GitHub 사용자명으로 변경하세요
        const username = 'yourusername';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        
        if (!response.ok) {
          throw new Error('GitHub API 요청에 실패했습니다.');
        }
        
        const data = await response.json();
        
        // 포크된 저장소 제외하고, 설명이 있는 저장소만 필터링
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
        
        setRepositories(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
        // 에러 발생 시 샘플 데이터 사용
        setRepositories(getSampleRepositories());
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // 샘플 프로젝트 데이터 (GitHub API 실패 시 사용)
  const getSampleRepositories = (): Repository[] => [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'React와 Node.js를 사용한 풀스택 이커머스 플랫폼. 결제 시스템, 사용자 관리, 상품 관리 기능 포함.',
      html_url: '#',
      homepage: '#',
      stargazers_count: 45,
      forks_count: 12,
      language: 'TypeScript',
      updated_at: '2024-01-15T10:30:00Z',
      topics: ['react', 'nodejs', 'typescript', 'mongodb']
    },
    {
      id: 2,
      name: 'Task Management App',
      description: '팀 협업을 위한 태스크 관리 애플리케이션. 실시간 업데이트, 드래그 앤 드롭 기능 제공.',
      html_url: '#',
      homepage: '#',
      stargazers_count: 32,
      forks_count: 8,
      language: 'JavaScript',
      updated_at: '2024-01-10T14:20:00Z',
      topics: ['react', 'firebase', 'javascript', 'css']
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      description: 'OpenWeatherMap API를 활용한 날씨 대시보드. 위치 기반 날씨 정보와 7일 예보 제공.',
      html_url: '#',
      homepage: '#',
      stargazers_count: 28,
      forks_count: 5,
      language: 'Python',
      updated_at: '2024-01-05T09:15:00Z',
      topics: ['python', 'flask', 'api', 'bootstrap']
    },
    {
      id: 4,
      name: 'Portfolio Website',
      description: 'Next.js와 Tailwind CSS로 제작된 반응형 포트폴리오 웹사이트. SEO 최적화 및 빠른 로딩 속도.',
      html_url: '#',
      homepage: '#',
      stargazers_count: 15,
      forks_count: 3,
      language: 'TypeScript',
      updated_at: '2024-01-01T16:45:00Z',
      topics: ['nextjs', 'typescript', 'tailwind', 'vercel']
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-400',
      'TypeScript': 'bg-blue-600',
      'Python': 'bg-green-500',
      'React': 'bg-blue-500',
      'HTML': 'bg-orange-500',
      'CSS': 'bg-purple-500',
      'Java': 'bg-red-500',
      'C++': 'bg-pink-500',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">프로젝트를 불러오는 중...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GitHub에서 진행한 주요 프로젝트들을 소개합니다. 각 프로젝트는 사용자 경험과 
            코드 품질을 중시하여 개발되었습니다.
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-center"
          >
            <p className="text-yellow-800">
              {error} 샘플 프로젝트를 표시합니다.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {repo.description}
                </p>

                {/* Language and Stats */}
                <div className="flex items-center justify-between">
                  {repo.language && (
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                      <span className="text-sm text-gray-600">{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star size={16} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch size={16} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Footer */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>Updated {formatDate(repo.updated_at)}</span>
                  </div>
                </div>
                
                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 4).map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub에서 더 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
