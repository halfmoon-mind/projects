import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const experiences = [
    {
      company: "회사 이름",
      position: "시니어 웹 개발자",
      period: "2020 - 현재",
      description: "주요 프로젝트 리드 및 팀 관리"
    },
    // Add more experiences as needed
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Next.js",
    "TailwindCSS", "GraphQL", "AWS", "Docker"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Resume</h1>
          <p className="text-gray-400">
            웹 개발 및 소프트웨어 엔지니어링 경력
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/5 rounded-lg p-6 space-y-2"
            >
              <h3 className="text-xl font-medium">{exp.position}</h3>
              <p className="text-gray-400">{exp.company} | {exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/10 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Resume;