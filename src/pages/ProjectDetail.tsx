import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Smartphone, Monitor, Store, Code, Youtube, Brain } from 'lucide-react';
import { projects } from './Projects';

const getLinkIcon = (linkType: string) => {
  switch (linkType) {
    case 'github':
      return <Github size={20} />;
    case 'ios':
      return <Smartphone size={20} />;
    case 'android':
      return <Smartphone size={20} />;
    case 'web':
      return <Monitor size={20} />;
    case 'store':
      return <Store size={20} />;
    case 'slack':
      return <ExternalLink size={20} />;
    case 'youtube':
      return <Youtube size={20} />;
    default:
      return <ExternalLink size={20} />;
  }
};

const getLinkLabel = (linkType: string) => {
  switch (linkType) {
    case 'github':
      return 'GitHub 저장소';
    case 'ios':
      return 'iOS 앱 다운로드';
    case 'android':
      return 'Android 앱 다운로드';
    case 'web':
      return '웹사이트 방문';
    case 'store':
      return '스토어 방문';
    case 'slack':
      return 'Slack 마켓플레이스';
    case 'youtube':
      return '데모 영상 보기';
    default:
      return '링크 방문';
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20"
    >
      <Link
        to="/projects"
        className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        <span>프로젝트 목록으로 돌아가기</span>
      </Link>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        <div
          className={`relative h-[400px] rounded-xl overflow-hidden ${
            project.id === 'pickeebus' ? 'bg-white' : 'bg-white/5'
          }`}
          style={project.containerStyle}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-4"
            style={project.imageStyle}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-300 text-xl mb-6">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.links &&
              Object.entries(project.links).map(([linkType, url], linkIndex) => (
                <a
                  key={linkIndex}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  {getLinkIcon(linkType)}
                  <span>{getLinkLabel(linkType)}</span>
                </a>
              ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Code size={24} />
                기술 스택
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 mt-8 space-y-6">
              <h2 className="text-2xl font-semibold">프로젝트 개요</h2>
              <div className="text-gray-300 whitespace-pre-line leading-relaxed">{project.longDescription}</div>
            </div>

            {project.challenges && (
              <div className="bg-white/5 rounded-xl p-8 mt-8 space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <Brain size={24} />
                  개발 과정에서의 고민들
                </h2>
                <div className="text-gray-300 whitespace-pre-line leading-relaxed">{project.challenges}</div>
              </div>
            )}

            <div className="bg-white/5 rounded-xl p-8 mt-8">
              <h2 className="text-2xl font-semibold mb-6">주요 기능</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
