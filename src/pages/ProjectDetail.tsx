import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "./Projects";

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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <Link to="/projects" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8">
        <ArrowLeft size={20} />
        <span>프로젝트 목록으로 돌아가기</span>
      </Link>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-8">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 ${
                project.github === "#" ? "bg-white/5 cursor-not-allowed" : "bg-white/10 hover:bg-white/20"
              } px-6 py-3 rounded-lg transition-colors`}
            >
              <Github size={20} />
              <span>GitHub 저장소</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 ${
                project.live === "#" ? "bg-white/5 cursor-not-allowed" : "bg-white/10 hover:bg-white/20"
              } px-6 py-3 rounded-lg transition-colors`}
            >
              <ExternalLink size={20} />
              <span>라이브 데모</span>
            </a>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/5 rounded-xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold">프로젝트 개요</h2>
              <div className="text-gray-300 whitespace-pre-line">{project.longDescription}</div>
            </div>

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
