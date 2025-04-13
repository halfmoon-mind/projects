import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold">
            Half to Full
          </NavLink>

          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/resume" className="nav-link">
              Resume
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <NavLink to="/" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/resume" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md" onClick={closeMenu}>
              Resume
            </NavLink>
            <NavLink to="/projects" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md" onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink to="/blog" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md" onClick={closeMenu}>
              Blog
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
