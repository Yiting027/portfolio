import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pantone } from '../theme/colors';

const CurtainIntro = ({ onComplete }) => {
  const [stage, setStage] = useState('welcome'); // welcome, splitting, complete

  useEffect(() => {
    // Show welcome text for 1.5 seconds
    const welcomeTimer = setTimeout(() => {
      setStage('splitting');
    }, 1500);

    // Wait for curtain animation then signal completion
    const completeTimer = setTimeout(() => {
      setStage('complete');
      onComplete?.();
    }, 2500);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'complete' && (
        <>
          {/* Left Curtain */}
          <motion.div
            className="curtain curtain-left fixed inset-y-0 left-0 w-1/2"
            style={{
              background: `linear-gradient(180deg, ${pantone.navyBlue} 0%, ${pantone.slateBlue} 100%)`,
              borderRight: `2px solid ${pantone.brightGold}`,
            }}
            initial={{ x: 0 }}
            animate={stage === 'splitting' ? { x: '-100%' } : {}}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {stage === 'welcome' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: '-50%' }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-4"
                    style={{
                      background: `linear-gradient(135deg, #FFFFFF 0%, ${pantone.brightGold} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(241, 196, 15, 0.3)',
                        '0 0 40px rgba(241, 196, 15, 0.6)',
                        '0 0 20px rgba(241, 196, 15, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Welcome!
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl"
                    style={{ color: pantone.deepBlue }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Enter the Future
                  </motion.p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Curtain */}
          <motion.div
            className="curtain curtain-right fixed inset-y-0 right-0 w-1/2"
            style={{
              background: `linear-gradient(180deg, ${pantone.navyBlue} 0%, ${pantone.slateBlue} 100%)`,
              borderLeft: `2px solid ${pantone.brightGold}`,
            }}
            initial={{ x: 0 }}
            animate={stage === 'splitting' ? { x: '100%' } : {}}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {stage === 'welcome' && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {/* Decorative tech elements */}
                  <motion.div
                    className="w-24 h-24 border-4 rounded-full mx-auto mb-4"
                    style={{ borderColor: pantone.brightGold }}
                    initial={{ rotate: 0, scale: 0.8 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="w-16 h-16 border-2 rounded-full mx-auto"
                    style={{ borderColor: pantone.bronzeGold }}
                    initial={{ rotate: 360, scale: 0.8 }}
                    animate={{ rotate: -360, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Center Welcome Text (visible during welcome stage) */}
          {stage === 'welcome' && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold"
                  style={{ color: '#FFFFFF' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span style={{ color: pantone.brightGold }}>Future</span> Tech
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl"
                  style={{ color: pantone.deepBlue }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Portfolio Experience
                </motion.p>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CurtainIntro;
