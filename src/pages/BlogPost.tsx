import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { getBlogPost } from '../data/blogPosts';
import { loadMarkdownContent } from '../utils/markdownLoader';
import '../styles/markdown.css';
import Meta from '../components/Meta';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const post = getBlogPost(slug || '');

  useEffect(() => {
    const fetchContent = async () => {
      if (post) {
        try {
          setLoading(true);
          const markdownContent = await loadMarkdownContent(post.contentPath);
          setContent(markdownContent);
        } catch (error) {
          console.error('Error loading blog content:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchContent();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Meta
        title={`${post.title} | 심상현 (Eddy) 블로그`}
        description=""
        keywords={'블로그, 개발, 프로그래밍'}
        ogImage={post.coverImage}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20"
      >
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        <article className="space-y-8">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex items-center space-x-6 text-gray-200">
                  <div className="flex items-center space-x-2">
                    <Calendar size={20} />
                    <time>{format(new Date(post.date), 'yyyy년 MM월 dd일')}</time>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {loading ? (
              <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
              </div>
            )}
          </motion.div>
        </article>
      </motion.div>
    </>
  );
};

export default BlogPost;
