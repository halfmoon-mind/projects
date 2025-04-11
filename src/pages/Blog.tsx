import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Clock, ArrowRight } from "lucide-react";
import Meta from "../components/Meta";
import { getAllBlogPosts } from "../data/blogPosts";

// 블로그 데이터를 불러옵니다
const posts = getAllBlogPosts();

const Blog = () => {
  return (
    <>
      <Meta
        title="블로그 | 심상현 (Eddy)"
        description="심상현(Eddy)의 개발 블로그입니다. 개발 경험, 기술 팁, 그리고 업계 인사이트를 공유합니다."
        keywords="개발 블로그, 기술 블로그, 프로그래밍, Flutter, React, 개발자 경험"
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 px-4 max-w-4xl mx-auto">
        <div className="space-y-12">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="text-gray-400">개발 경험과 기술적 인사이트를 공유합니다</p>
          </motion.div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 rounded-xl overflow-hidden group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-48 md:h-[200px] relative overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          style={{ height: "200px", objectPosition: "center" }}
                        />
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">{post.title}</h2>
                        <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <time>{format(new Date(post.date), "yyyy년 MM월 dd일")}</time>
                          <span className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            {post.readingTime}
                          </span>
                        </div>
                        <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
