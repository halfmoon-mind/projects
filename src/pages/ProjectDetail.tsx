import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Smartphone, Store, Monitor, Youtube, Code, Brain } from "lucide-react";
import { projects } from "./Projects";
import Meta from "../components/Meta";
import ReactMarkdown from "react-markdown";
import "../styles/markdown.css";

// 프로젝트 이미지 기반 OG 이미지 URL 생성 함수
const getOgImageUrl = (projectId: string) => {
  // 공개 URL로 매핑
  // 참고: 이 방식을 사용하려면 프로젝트 이미지들이 public/assets/projects/ 디렉토리에
  // 프로젝트 ID와 같은 이름으로 저장되어 있어야 합니다.
  return `/assets/projects/${projectId}.png`;
};

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
    case "doc":
      return "문서 보기";
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
          <Link
            to="/projects"
            className="inline-flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg border border-white/10 transition-all duration-300"
          >
            <ArrowLeft size={16} className="mr-2" />
            프로젝트 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  // 프로젝트 URL
  const projectUrl = `https://halfmoon-mind.vercel.app/projects/${project.id}`;

  // 기술 스택을 쉼표로 구분된 문자열로 변환
  const techKeywords = project.tech.join(", ");

  // 프로젝트 이미지
  const ogImage = getOgImageUrl(project.id);

  return (
    <>
      <Meta title={project.title} description={project.description} keywords={techKeywords} ogImage={ogImage} ogUrl={projectUrl} />
      <div className="min-h-screen bg-[#111111] overflow-hidden">
        {/* 헤더 영역 */}
        <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-black/70 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-md border border-white/10 transition-all duration-300"
            >
              <ArrowLeft size={16} className="mr-1 sm:mr-1.5" />
              <span className="text-sm">뒤로</span>
            </Link>

            <h1 className="text-white text-lg font-medium">{project.title}</h1>
          </div>
        </header>

        {/* 콘텐츠 영역 */}
        <div className="pt-[60px] sm:pt-[72px] bg-black">
          <div className="max-w-4xl mx-auto px-3 sm:px-6">
            <div className="flex items-center pt-3 sm:pt-6 pb-2 sm:pb-4">
              <Link to="/projects" className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-all duration-300">
                <ArrowLeft size={16} className="mr-1 sm:mr-1.5" />
                <span className="text-sm font-medium">프로젝트 목록</span>
              </Link>
            </div>
          </div>

          {/* 이미지 섹션 */}
          <div className="w-full pb-5 sm:pb-10 bg-black">
            <div className="max-w-4xl mx-auto px-3 sm:px-6">
              <div
                className={`relative w-full max-w-3xl h-[200px] sm:h-[300px] mx-auto rounded-2xl overflow-hidden ${
                  project.id === "pickiverse" ? "bg-white" : "bg-white/5"
                } border border-white/10 shadow-xl`}
                style={project.containerStyle}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-contain p-3 sm:p-6" style={project.imageStyle} />
              </div>
            </div>
          </div>

          {/* 내용 섹션 */}
          <div className="bg-black min-h-screen pb-16 sm:pb-32">
            <div className="max-w-4xl mx-auto px-3 sm:px-6">
              <div className="grid grid-cols-1 gap-y-10 sm:gap-y-20">
                {/* 프로젝트 타이틀과 설명 */}
                <div className="pt-5 sm:pt-10">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {project.title}
                  </h1>
                  <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed">{project.description}</p>
                </div>

                {/* 링크 섹션 */}
                {project.links && Object.keys(project.links).length > 0 && (
                  <div>
                    <h2 className="text-xl font-medium text-white mb-3 sm:mb-6">링크</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {Object.entries(project.links).map(([linkType, url], linkIndex) => (
                        <a
                          key={linkIndex}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 sm:space-x-3 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300"
                        >
                          <div className="text-blue-400">{getLinkIcon(linkType)}</div>
                          <span className="text-white font-medium">{getLinkLabel(linkType)}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* 기술 스택 */}
                <div className="space-y-3 sm:space-y-6">
                  <h2 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                    <Code size={20} className="text-blue-400" />
                    기술 스택
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/5 border border-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-medium text-white hover:bg-blue-900/20 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 프로젝트 개요 */}
                <div className="space-y-3 sm:space-y-6">
                  <h2 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                    <Code size={20} className="text-blue-400" />
                    프로젝트 개요
                  </h2>
                  <div className="bg-[#1a1a1a] backdrop-blur-sm rounded-xl px-5 py-0 sm:p-8 border border-[#333333] text-gray-100 leading-7 shadow-xl">
                    <div className="prose prose-invert prose-sm sm:prose-base max-w-none markdown-body">
                      <ReactMarkdown>{project.longDescription.trim()}</ReactMarkdown>
                    </div>
                  </div>
                </div>

                {/* 개발 과정에서의 고민들 */}
                {project.challenges && (
                  <div className="space-y-3 sm:space-y-6">
                    <h2 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                      <Brain size={20} className="text-blue-400" />
                      개발 과정에서의 고민들
                    </h2>
                    <div className="bg-[#1a1a1a] backdrop-blur-sm rounded-xl px-5 py-0 sm:p-8 border border-[#333333] text-gray-100 leading-7 shadow-xl">
                      <div className="prose prose-invert prose-sm sm:prose-base max-w-none markdown-body">
                        <ReactMarkdown>{project.challenges.trim()}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                )}

                {/* 주요 기능 */}
                <div className="space-y-3 sm:space-y-6">
                  <h2 className="text-xl font-medium text-white mb-3 sm:mb-6">주요 기능</h2>
                  <ul className="space-y-3 sm:space-y-5">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3 sm:space-x-4 text-gray-300 group">
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
      </div>
    </>
  );
};

export default ProjectDetail;
