import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Meta from "../components/Meta";

const Home = () => {
  return (
    <>
      <Meta
        title="심상현 (Eddy) | 풀스택 개발자 & 플러터 엔지니어"
        description="창의적인 문제 해결과 사용자 경험을 중요시하는 개발자입니다. 프로그래밍이라는 기술을 활용해 세상에 도움이 되는 서비스를 만들고 있습니다."
        keywords="심상현, 풀스택 개발자, 플러터 엔지니어, React, Flutter, JavaScript, TypeScript"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-4xl w-full space-y-12">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-center space-y-6">
            <h1 className="text-6xl font-bold">안녕하세요 👋</h1>
            <p className="text-2xl font-medium">심상현 (Eddy)</p>
            <p className="text-xl text-gray-400">풀스택 개발자 & 플러터 엔지니어</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              창의적인 문제 해결과 사용자 경험을 중요시하는 개발자입니다. 프로그래밍이라는 기술을 활용해 세상에 도움이 되는 서비스를 만들고 있으며,
              계속해서 성장하고 발전하는 사람이 되고자 합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/halfmoon-mind" className="text-white hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/eddy-sim/" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:simsanghyeon00@gmail.com" className="text-white hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
