import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Smartphone, Monitor, Store, Code, Youtube, Brain } from "lucide-react";
import { projects } from "./Projects";

const getLinkIcon = (linkType: string) => {
  switch (linkType) {
    case "github":
      return <Github size={20} />;
    case "ios":
      return <Smartphone size={20} />;
    case "android":
      return <Smartphone size={20} />;
    case "web":
      return <Monitor size={20} />;
    case "store":
      return <Store size={20} />;
    case "slack":
      return <ExternalLink size={20} />;
    case "youtube":
      return <Youtube size={20} />;
    default:
      return <ExternalLink size={20} />;
  }
};

const getLinkLabel = (linkType: string) => {
  switch (linkType) {
    case "github":
      return "GitHub 저장소";
    case "ios":
      return "iOS 앱 다운로드";
    case "android":
      return "Android 앱 다운로드";
    case "web":
      return "웹사이트 방문";
    case "store":
      return "스토어 방문";
    case "slack":
      return "Slack 마켓플레이스";
    case "youtube":
      return "데모 영상 보기";
    default:
      return "링크 방문";
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center bg-[#111111]">
        <div className="text-center">
          <h1 className="text-3xl font-medium tracking-tight mb-4 text-white">프로젝트를 찾을 수 없습니다</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] overflow-hidden">
      {/* 헤더 영역 */}
      <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/projects" className="group inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300">
            <ArrowLeft size={18} />
            <span className="font-medium">프로젝트 목록</span>
          </Link>

          <h1 className="text-white text-lg font-medium">{project.title}</h1>
        </div>
      </header>

      {/* 이미지 섹션 (축소됨) */}
      <div className="w-full pt-28 pb-10 px-6 bg-black">
        <div
          className={`relative w-full max-w-3xl h-[300px] mx-auto rounded-2xl overflow-hidden ${
            project.id === "pickiverse" ? "bg-white" : "bg-white/5"
          } border border-white/10 shadow-xl`}
          style={project.containerStyle}
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-contain p-6" style={project.imageStyle} />
        </div>
      </div>

      {/* 내용 섹션 */}
      <div className="bg-black min-h-screen pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-20">
            {/* 프로젝트 타이틀과 설명 */}
            <div className="pt-10">
              <h1 className="text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{project.title}</h1>
              <p className="text-gray-300 text-xl font-light leading-relaxed">{project.description}</p>
            </div>

            {/* 링크 섹션 */}
            {project.links && Object.keys(project.links).length > 0 && (
              <div>
                <h2 className="text-xl font-medium text-white mb-6">링크</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(project.links).map(([linkType, url], linkIndex) => (
                    <a
                      key={linkIndex}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300"
                    >
                      <div className="text-blue-400">{getLinkIcon(linkType)}</div>
                      <span className="text-white font-medium">{getLinkLabel(linkType)}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 기술 스택 */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                <Code size={20} className="text-blue-400" />
                기술 스택
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-900/20 hover:border-blue-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 프로젝트 개요 */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-white mb-2">프로젝트 개요</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-gray-300 whitespace-pre-line leading-relaxed shadow-lg">
                {project.longDescription}
              </div>
            </div>

            {/* 개발 과정에서의 고민들 */}
            {project.challenges && (
              <div className="space-y-6">
                <h2 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                  <Brain size={20} className="text-blue-400" />
                  개발 과정에서의 고민들
                </h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-gray-300 whitespace-pre-line leading-relaxed shadow-lg">
                  {project.challenges}
                </div>
              </div>
            )}

            {/* 주요 기능 */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium text-white mb-6">주요 기능</h2>
              <ul className="space-y-5">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-4 text-gray-300 group">
                    <div className="w-2 h-2 mt-[0.6rem] bg-blue-400 rounded-full flex-shrink-0" />
                    <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
