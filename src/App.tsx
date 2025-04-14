import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

// SEO를 위한 Helmet 컨텍스트
export const helmetContext: { helmet?: HelmetServerState } = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-black">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
