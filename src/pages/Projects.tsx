import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: "project-1",
    title: "프로젝트 1",
    description: "React와 TypeScript를 활용한 웹 애플리케이션",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "#",
    live: "#",
    longDescription: `
      이 프로젝트는 최신 웹 기술을 활용하여 개발된 현대적인 웹 애플리케이션입니다.
      사용자 경험을 최우선으로 고려하여 설계되었으며, 반응형 디자인을 통해 모든 디바이스에서
      완벽하게 작동합니다.

      주요 기능:
      - 실시간 데이터 동기화
      - 사용자 인증 및 권한 관리
      - 고성능 상태 관리
      - 최적화된 성능
    `,
    features: [
      "실시간 협업 기능",
      "드래그 앤 드롭 인터페이스",
      "다크/라이트 모드 지원",
      "오프라인 지원"
    ]
  },
  {
    id: "project-2",
    title: "프로젝트 2",
    description: "Next.js로 구현한 풀스택 애플리케이션",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    github: "#",
    live: "#",
    longDescription: `
      Next.js의 강력한 기능을 활용하여 개발된 풀스택 웹 애플리케이션입니다.
      서버 사이드 렌더링을 통해 뛰어난 성능과 SEO 최적화를 실현했습니다.
      
      데이터베이스 설계부터 프론트엔드 구현까지 전체 개발 과정을 담당했으며,
      확장 가능한 아키텍처를 구축했습니다.
    `,
    features: [
      "서버 사이드 렌더링",
      "자동 데이터 캐싱",
      "API 라우트 최적화",
      "데이터베이스 자동 마이그레이션"
    ]
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-gray-400">제가 작업한 주요 프로젝트들입니다</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 rounded-xl overflow-hidden group"
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;