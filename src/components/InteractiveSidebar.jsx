import { motion, AnimatePresence } from 'framer-motion';
import { pantone } from '../theme/colors';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'introduction', label: 'Introduction', icon: '⟡' },
  { id: 'about', label: 'About Me', icon: '◈' },
  { id: 'projects', label: 'Projects', icon: '◇' },
  { id: 'skills', label: 'Skills & Tools', icon: '⬡' },
  { id: 'experience', label: 'Experience', icon: '◉' },
  { id: 'education', label: 'Education', icon: '◫' },
  { id: 'contact', label: 'Contact', icon: '✉' },
];

const InteractiveSidebar = ({ isOpen, onClose, activeSection, onNavigate }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // On desktop, sidebar is always visible regardless of isOpen
  const isVisible = isDesktop || isOpen;

  return (
    <>
      {/* Overlay - only on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - always visible on desktop (lg), toggleable on mobile */}
      <motion.aside
        className="fixed left-0 top-0 h-full w-64 z-50 lg:z-30 pt-20"
        style={{
          background: `linear-gradient(180deg, ${pantone.navyBlue} 0%, ${pantone.slateBlue} 100%)`,
          borderRight: `1px solid ${pantone.brightGold}33`,
        }}
        initial={{ x: isDesktop ? 0 : '-100%' }}
        animate={{ x: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center px-6 border-b" style={{ borderColor: `${pantone.brightGold}33` }}>
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${pantone.brightGold} 0%, ${pantone.bronzeGold} 100%)`,
              }}
            >
              <span className="text-xl font-bold" style={{ color: pantone.navyBlue }}>F</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Yiting Lin</h2>
              <p className="text-xs" style={{ color: pantone.deepBlue }}>Portfolio</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="py-6">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => {
                      onNavigate?.(item.id);
                      onClose?.();
                    }}
                    className="w-full px-6 py-4 flex items-center gap-4 text-left transition-all duration-300 relative"
                    style={{
                      background: isActive
                        ? `linear-gradient(90deg, ${pantone.brightGold}25 0%, transparent 100%)`
                        : 'transparent',
                      borderLeft: isActive
                        ? `4px solid ${pantone.brightGold}`
                        : '4px solid transparent',
                    }}
                    whileHover={{
                      x: 8,
                      background: `linear-gradient(90deg, ${pantone.brightGold}30 0%, transparent 100%)`,
                    }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(90deg, ${pantone.brightGold}10 0%, transparent 70%)`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <motion.span
                      className="text-xl relative z-10"
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        textShadow: isActive ? `0 0 10px ${pantone.brightGold}60` : 'none',
                      }}
                      style={{ color: isActive ? pantone.brightGold : pantone.deepBlue }}
                    >
                      {item.icon}
                    </motion.span>
                    <span
                      className="font-medium relative z-10"
                      style={{
                        color: isActive ? pantone.brightGold : '#E0E0E0',
                        textShadow: isActive ? '0 0 8px rgba(241, 196, 15, 0.4)' : 'none',
                      }}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        className="ml-auto relative z-10"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={pantone.brightGold}
                          strokeWidth="2"
                          style={{
                            filter: 'drop-shadow(0 0 4px rgba(241, 196, 15, 0.6))',
                          }}
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div
            className="h-px w-full"
            style={{ background: `linear-gradient(90deg, ${pantone.brightGold} 0%, transparent 100%)` }}
          />
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: pantone.brightGold }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default InteractiveSidebar;
