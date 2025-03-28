import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl w-full space-y-12">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl font-bold">
            안녕하세요 👋
          </h1>
          <p className="text-xl text-gray-400">
            저는 열정적인 웹 개발자입니다
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            창의적인 문제 해결과 사용자 경험을 중요시하는 개발자입니다. 
            최신 웹 기술을 활용하여 혁신적인 솔루션을 만드는 것을 좋아합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;