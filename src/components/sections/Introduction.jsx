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
      <div className="relative z-10 text-center px-4">
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{
              background: `linear-gradient(135deg, #FFFFFF 0%, ${pantone.brightGold} 50%, #FFFFFF 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building the
            <br />
            <span className="text-glow">Future of Tech</span>
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
            style={{ borderColor: pantone.brightGold }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: pantone.brightGold }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
