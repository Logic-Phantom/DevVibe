'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Star, GitBranch, Code, Eye, TrendingUp, Award, Sparkles, Zap, Clock, Users, Globe, ArrowRight } from 'lucide-react';

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
  features?: string[];
  tech?: string[];
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

// Repositories to exclude from the visible list
const EXCLUDE_REPOS = new Set([
  'Tlog',
  'Springboot_JPA',
  'one-s-first-trip',
  'Logic-Phantom.github.io',
  'DevVibe',
]);

// Optional metadata to enrich specific repositories
const repoMeta: Record<string, { homepage?: string; features?: string[]; tech?: string[]; description?: string }> = {
  'TechLog': {
    homepage: 'https://logic-phantom.github.io/',
    features: ['정적 생성(Gatsby)', '콘텐츠 태깅/검색', '반응형 UI', 'PWA 지원'],
    tech: ['React', 'TypeScript', 'Gatsby', 'GraphQL', 'GitHub Pages'],
    description:
      'React + Gatsby 기반 기술 블로그로 개발 학습과 기록을 정리합니다. 태그/검색, 반응형 UI, PWA를 지원하여 모바일에서도 앱처럼 사용할 수 있습니다.',
  },
  'invitation': {
    homepage: 'https://invitation-dusky-psi.vercel.app/',
    features: ['반응형 레이아웃', '갤러리', '일정/날씨 위젯', '공유하기', '계좌 보기 모달'],
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
    description:
      '모바일 청첩장 웹 앱으로 갤러리, 일정/날씨, 공유하기, 계좌 보기 등 실사용 기능을 담고 있습니다. 반응형으로 다양한 기기에서 쾌적하게 동작합니다.',
  },
  'Converter-Figma': {
    features: ['Figma → CLEOPATRA XML 변환', 'UI 코드 자동화', '디자인-개발 브릿지'],
    tech: ['JavaScript', 'Node.js', 'Figma'],
    description:
      'Figma 디자인을 CLEOPATRA XML(.clx) + JavaScript 코드로 변환하여 디자인과 개발 간 반복 작업을 줄이는 자동화 도구입니다.',
  },
  'UI-Detector': {
    features: ['YOLOv5 기반 객체 탐지', 'UI 요소 라벨링 자동화', '데이터셋 파이프라인'],
    tech: ['Python', 'PyTorch', 'YOLOv5'],
    description:
      '이미지 기반으로 버튼/입력창/텍스트 등 UI 요소를 탐지·분류하는 딥러닝 프로젝트로, 실제 화면에서 자동 라벨링을 지원합니다.',
  },
  'ScriptSense': {
    features: ['정적 분석', '자동 리뷰', '품질 리포트'],
    tech: ['Python', 'CLI'],
    description:
      '스크립트 품질을 자동 점검하고 일관된 리뷰 프로세스를 제공하는 경량 자동리뷰 도구입니다.',
  },
  'EmotiBurn': {
    features: ['감성 시각화', '불꽃 애니메이션', '몰입형 UX'],
    tech: ['Flutter', 'Dart'],
    description:
      '감정과 스트레스를 시각적으로 해소하는 감성 기반 모바일 앱으로, 불꽃 연출을 통해 몰입감 있는 사용자 경험을 제공합니다.',
  },
};

// Provide sample repositories upfront so it's available during initial state setup
function getSampleRepositories(): Repository[] {
  const samples: Repository[] = [
    {
      id: 1,
      name: 'TechLog',
      description:
        'React + Gatsby 기반 기술 블로그. 태그/검색과 반응형 UI를 통해 학습 기록을 쉽게 탐색할 수 있습니다. PWA를 지원하여 모바일에서도 앱처럼 사용 가능합니다.',
      html_url: 'https://github.com/Logic-Phantom/Techlog',
      homepage: repoMeta['TechLog'].homepage ?? null,
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      updated_at: '2024-01-15T10:30:00Z',
      topics: ['react', 'gatsby', 'typescript', 'blog', 'portfolio'],
      features: repoMeta['TechLog'].features,
      tech: repoMeta['TechLog'].tech,
    },
    {
      id: 2,
      name: 'Converter-Figma',
      description:
        'Figma 디자인을 CLEOPATRA XML(.clx) + JavaScript 코드로 자동 변환하여 디자인-개발 간 반복 작업을 줄이는 UI 자동화 툴입니다.',
      html_url: 'https://github.com/Logic-Phantom/Converter-Figma',
      homepage: null,
      stargazers_count: 1,
      forks_count: 0,
      language: 'JavaScript',
      updated_at: '2024-01-10T14:20:00Z',
      topics: ['figma', 'xml', 'javascript', 'automation', 'ui-tools'],
      features: repoMeta['Converter-Figma'].features,
      tech: repoMeta['Converter-Figma'].tech,
    },
    {
      id: 3,
      name: 'UI-Detector',
      description:
        '이미지 기반 UI 요소 탐지/분류 프로젝트로, YOLOv5 모델을 활용해 실제 화면에서 버튼·입력창·텍스트 등을 자동 라벨링합니다.',
      html_url: 'https://github.com/Logic-Phantom/UI-Detector',
      homepage: null,
      stargazers_count: 0,
      forks_count: 0,
      language: 'Python',
      updated_at: '2024-01-05T09:15:00Z',
      topics: ['python', 'yolov5', 'deep-learning', 'ui-detection', 'ai'],
      features: repoMeta['UI-Detector'].features,
      tech: repoMeta['UI-Detector'].tech,
    },
    {
      id: 4,
      name: 'invitation',
      description:
        '모바일 청첩장 웹 앱으로, 신랑·신부 정보·일정·장소·연락처·계좌 등 필요한 정보를 모던한 UI로 제공합니다. 갤러리/일정/공유 등 실사용 기능 제공.',
      html_url: 'https://github.com/Logic-Phantom/invitation',
      homepage: repoMeta['invitation'].homepage ?? null,
      stargazers_count: 0,
      forks_count: 0,
      language: 'TypeScript',
      updated_at: '2024-01-01T16:45:00Z',
      topics: ['react', 'typescript', 'mobile', 'wedding', 'responsive'],
      features: repoMeta['invitation'].features,
      tech: repoMeta['invitation'].tech,
    },
    {
      id: 5,
      name: 'ScriptSense',
      description:
        '스크립트 자동 리뷰/정적 분석 도구로, 일관된 품질 점검과 자동화된 리뷰 프로세스를 제공합니다.',
      html_url: 'https://github.com/Logic-Phantom/ScriptSense',
      homepage: null,
      stargazers_count: 0,
      forks_count: 0,
      language: 'Python',
      updated_at: '2023-12-28T11:20:00Z',
      topics: ['python', 'code-review', 'automation', 'quality', 'scripting'],
      features: repoMeta['ScriptSense'].features,
      tech: repoMeta['ScriptSense'].tech,
    },
    {
      id: 6,
      name: 'EmotiBurn',
      description:
        '감성 기반 모바일 앱으로 스트레스/감정을 시각화하여 해소를 돕습니다. 불꽃 연출과 몰입형 UX를 제공합니다.',
      html_url: 'https://github.com/Logic-Phantom/EmotiBurn',
      homepage: null,
      stargazers_count: 0,
      forks_count: 0,
      language: 'Dart',
      updated_at: '2023-12-25T13:30:00Z',
      topics: ['flutter', 'dart', 'mobile', 'emotion', 'ux'],
      features: repoMeta['EmotiBurn'].features,
      tech: repoMeta['EmotiBurn'].tech,
    }
  ];
  return samples;
}

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => getSampleRepositories());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fetchRepositories = useCallback(async () => {
    try {
      const username = 'Logic-Phantom';
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);

      if (!response.ok) {
        throw new Error('GitHub API 요청에 실패했습니다.');
      }

      const data = await response.json();

      const filteredRepos = data
        .filter((repo: GitHubRepo) => !repo.fork && repo.description && !EXCLUDE_REPOS.has(repo.name))
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
          topics: repo.topics || [],
        }))
        .map((repo: Repository) => {
          const meta = repoMeta[repo.name];
          if (!meta) return { ...repo };
          return {
            ...repo,
            homepage: (meta.homepage ?? repo.homepage) ?? null,
            description: meta.description ?? repo.description,
            features: meta.features ?? [],
            tech: meta.tech ?? [],
          } as Repository;
        });

      setRepositories(filteredRepos.length > 0 ? filteredRepos : getSampleRepositories());
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      setRepositories(getSampleRepositories());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepositories();
  }, [fetchRepositories]);

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
      'Swift': 'from-orange-500 to-orange-600',
      'Dart': 'from-blue-500 to-blue-600'
    };
    return colors[language || ''] || 'from-gray-500 to-gray-600';
  };

  const projectStats = [
    { icon: Users, value: '0', label: 'GitHub Followers', color: 'from-blue-500 to-blue-600' },
    { icon: Star, value: '1', label: 'Total Stars', color: 'from-yellow-500 to-yellow-600' },
    { icon: GitBranch, value: '0', label: 'Total Forks', color: 'from-green-500 to-green-600' },
    { icon: Globe, value: '6+', label: 'Projects', color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-900 relative">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {loading && (
          <div className="text-center mb-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            />
            <p className="mt-4 text-gray-400">프로젝트를 불러오는 중...</p>
          </div>
        )}
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
            <Zap size={20} className="text-purple-400" />
            <span className="text-purple-300 font-medium">프로젝트</span>
            <Zap size={20} className="text-purple-400" />
          </motion.div>
          
          <h2 className="section-title">프로젝트 포트폴리오</h2>
          <p className="section-subtitle">
            GitHub에서 다양한 프로젝트를 확인할 수 있습니다.
          </p>
          
          {/* Projects Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700/50 mt-6"
          >
            <Award size={20} className="text-blue-400" />
            <span className="text-blue-300 font-medium">프로젝트 개요</span>
            <Sparkles size={20} className="text-purple-400" />
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
                className="skill-card text-center"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/50 border border-red-700/50 rounded-xl p-6 mb-8 text-center"
          >
            <p className="text-red-400 font-medium">{error}</p>
          </motion.div>
        )}

        <div className="grid-responsive">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors mb-2">
                    {repo.name}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed text-sm">
                {repo.description}
              </p>

              {/* Features and Tech */}
              {(repo.features?.length || repo.tech?.length) && (
                <div className="mb-6 space-y-3">
                  {repo.features && repo.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.features.map((f, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full border border-blue-700/50">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                  {repo.tech && repo.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-700/50">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Project Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-sm font-semibold">{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <GitBranch size={16} className="text-blue-400" />
                    <span className="text-sm font-semibold">{repo.forks_count}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                  <Clock size={16} className="text-green-400" />
                  <span className="text-sm font-medium">{formatDate(repo.updated_at)}</span>
                </div>
              </div>

              {/* Language and Topics */}
              <div className="space-y-4 mb-6">
                {repo.language && (
                  <div className="flex items-center space-x-2">
                    <Code size={16} className="text-gray-500" />
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getLanguageColor(repo.language)} text-white`}>
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
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full font-medium hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 5 && (
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full font-medium border border-gray-700/50">
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
                  className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye size={16} />
                  <span>프로젝트 보기</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Logic-Phantom"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-secondary inline-flex items-center space-x-3 px-8 py-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={20} />
            <span>더 많은 프로젝트 보기</span>
            <TrendingUp size={20} />
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
