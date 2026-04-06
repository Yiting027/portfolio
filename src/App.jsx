import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { pantone } from './theme/colors';
import CurtainIntro from './components/CurtainIntro';
import TopBar from './components/TopBar';
import InteractiveSidebar from './components/InteractiveSidebar';
import {
  Introduction,
  About,
  Projects,
  Skills,
  Experience,
  Education,
  Contact,
} from './components/sections';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 1024);
  const [activeSection, setActiveSection] = useState('introduction');

  const sectionRefs = useRef({
    introduction: null,
    about: null,
    projects: null,
    skills: null,
    experience: null,
    education: null,
    contact: null,
  });

  // Handle navigation
  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle search navigation
  const handleSearchNavigate = (sectionId) => {
    handleNavigate(sectionId);
  };

  // Intersection Observer for active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections by querying DOM
    const sectionIds = ['introduction', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Set refs for sections
  const setSectionRef = (sectionId) => (el) => {
    sectionRefs.current[sectionId] = el;
  };

  return (
    <div className="relative">
      {/* Intro Animation */}
      {showIntro && (
        <CurtainIntro
          onComplete={() => {
            setTimeout(() => setShowIntro(false), 1000);
          }}
        />
      )}

      {/* Top Navigation Bar */}
      <TopBar
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onNavigate={handleNavigate}
        onSearchNavigate={handleSearchNavigate}
      />

      {/* Sidebar Navigation */}
      <InteractiveSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-64'}`}>
        {/* Tech Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Grid Pattern */}
          <div className="tech-grid opacity-20" />

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: 'rgba(241, 196, 15, 0.3)',
                borderRadius: '50%',
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Sections */}
        <div ref={setSectionRef('introduction')}>
          <Introduction />
        </div>
        <div ref={setSectionRef('about')}>
          <About />
        </div>
        <div ref={setSectionRef('projects')}>
          <Projects />
        </div>
        <div ref={setSectionRef('skills')}>
          <Skills />
        </div>
        <div ref={setSectionRef('experience')}>
          <Experience />
        </div>
        <div ref={setSectionRef('education')}>
          <Education />
        </div>
        <div ref={setSectionRef('contact')}>
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-center relative z-10"
        style={{
          background: `linear-gradient(180deg, ${pantone.slateBlue} 0%, ${pantone.navyBlue} 100%)`,
          borderTop: `1px solid ${pantone.brightGold}33`,
        }}
      >
        <p className="text-sm" style={{ color: '#9CA3AF' }}>
          © {new Date().getFullYear()} Yiting Lin Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
