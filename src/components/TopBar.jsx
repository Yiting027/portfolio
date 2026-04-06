import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pantone } from '../theme/colors';

// Keyword to section ID mapping for search functionality
const searchMapping = {
  intro: 'introduction',
  introduction: 'introduction',
  home: 'introduction',
  start: 'introduction',
  about: 'about',
  me: 'about',
  bio: 'about',
  project: 'projects',
  projects: 'projects',
  work: 'projects',
  portfolio: 'projects',
  skill: 'skills',
  skills: 'skills',
  tools: 'skills',
  tech: 'skills',
  technology: 'skills',
  experience: 'experience',
  job: 'experience',
  jobs: 'experience',
  work: 'experience',
  career: 'experience',
  education: 'education',
  school: 'education',
  university: 'education',
  college: 'education',
  degree: 'education',
  study: 'education',
  contact: 'contact',
  get: 'contact',
  reach: 'contact',
  email: 'contact',
  social: 'contact',
  linkedin: 'external-linkedin',
  github: 'external-github',
  resume: 'external-resume',
};

const TopBar = ({ onMenuClick, onNavigate, onSearchNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    if (query) {
      // Check for external links first
      if (query.includes('linkedin')) {
        window.open('https://www.linkedin.com/in/yiting-lin-a48350133/', '_blank');
      } else if (query.includes('github')) {
        window.open('https://github.com/Yiting027', '_blank');
      } else if (query.includes('resume')) {
        // Handle resume download/link
        window.open('/resume.pdf', '_blank');
      } else {
        // Regular section search
        const sectionId = searchMapping[query];
        if (sectionId && sectionId.startsWith('external-')) {
          const externalLink = sectionId.replace('external-', '');
          window.open(`https://${externalLink}.com`, '_blank');
        } else if (sectionId) {
          onSearchNavigate?.(sectionId);
        }
      }
      setSearchQuery('');
      searchInputRef.current?.blur();
    }
  };

  const handleQuickLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 h-16 z-40 backdrop-blur-md"
      style={{
        background: `linear-gradient(180deg, ${pantone.navyBlue}EE 0%, ${pantone.navyBlue}CC 100%)`,
        borderBottom: `1px solid ${pantone.brightGold}33`,
      }}
    >
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        {/* Left Section: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu */}
          <motion.button
            onClick={onMenuClick}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg lg:hidden"
            style={{ background: `${pantone.brightGold}15` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="w-5 h-5 flex flex-col justify-center gap-1">
              <motion.span
                className="h-0.5 w-full rounded"
                style={{ background: pantone.brightGold }}
                animate={{ rotate: [0, 0, 45], y: [0, 3, 0] }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-full rounded"
                style={{ background: pantone.brightGold }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-full rounded"
                style={{ background: pantone.brightGold }}
                animate={{ rotate: [0, 0, -45], y: [0, -3, 0] }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.button>

          {/* Logo / Home Link */}
          <motion.a
            href="#introduction"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('introduction');
            }}
            className="text-xl font-bold tracking-wider"
            style={{
              background: `linear-gradient(135deg, #FFFFFF 0%, ${pantone.brightGold} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            whileHover={{ scale: 1.05 }}
          >
            PORTFOLIO
          </motion.a>
        </div>

        {/* Center: Quick Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: '#E0E0E0' }}
            whileHover={{ color: pantone.brightGold }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: '#E0E0E0' }}
            whileHover={{ color: pantone.brightGold }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors"
            style={{ color: '#E0E0E0' }}
            whileHover={{ color: pantone.brightGold }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Right Section: Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center gap-4">
          <motion.div
            className="relative"
            animate={{ width: isSearchFocused ? 280 : 200 }}
            transition={{ duration: 0.3 }}
          >
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Search sections... (e.g., projects, skills)"
              className="w-full px-4 py-2 pr-10 rounded-lg text-sm outline-none transition-all"
              style={{
                background: `${pantone.slateBlue}80`,
                border: `1px solid ${isSearchFocused ? pantone.brightGold : pantone.deepBlue}`,
                color: '#FFFFFF',
              }}
            />
            <motion.button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded"
              style={{ background: pantone.brightGold }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={pantone.navyBlue}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </motion.button>
          </motion.div>
        </form>
      </div>

      {/* Mobile Quick Links (shown below header on mobile) */}
      <AnimatePresence>
        {isSearchFocused && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 p-4"
            style={{ background: pantone.slateBlue }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleQuickLink('https://linkedin.com')}
                className="px-4 py-2 rounded text-sm"
                style={{ background: `${pantone.brightGold}20`, color: pantone.brightGold }}
              >
                LinkedIn
              </button>
              <button
                onClick={() => handleQuickLink('https://github.com')}
                className="px-4 py-2 rounded text-sm"
                style={{ background: `${pantone.brightGold}20`, color: pantone.brightGold }}
              >
                GitHub
              </button>
              <button
                onClick={() => handleQuickLink('/resume.pdf')}
                className="px-4 py-2 rounded text-sm"
                style={{ background: `${pantone.brightGold}20`, color: pantone.brightGold }}
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopBar;
