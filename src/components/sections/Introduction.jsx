import { motion } from 'framer-motion';
import { pantone, gradients } from '../../theme/colors';

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: gradients.hero }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 text-left px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full text-sm font-semibold"
            style={{
              background: `${pantone.brightGold}15`,
              border: `1px solid ${pantone.brightGold}`,
              color: pantone.brightGold,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            ✦ Backend Developer | Full-Stack Developer ✦
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12"
            style={{
              color: pantone.brightGold,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-glow">Yiting Lin</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ color: '#E0E0E0' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting innovative digital experiences through elegant code and
            cutting-edge technology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold border transition-all"
              style={{
                borderColor: pantone.brightGold,
                color: pantone.brightGold,
              }}
              whileHover={{
                background: `${pantone.brightGold}15`,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Introduction;
