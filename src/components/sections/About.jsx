import { motion } from 'framer-motion';
import { pantone } from '../../theme/colors';

const About = () => {
  const stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '20+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            {/* Image/Avatar Side */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="aspect-square rounded-2xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${pantone.deepBlue} 0%, ${pantone.slateBlue} 100%)`,
                  border: `2px solid ${pantone.brightGold}40`,
                }}
              >
                {/* Decorative Tech Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 rounded-full border-4"
                    style={{ borderColor: `${pantone.brightGold}30` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute w-32 h-32 rounded-full border-2"
                    style={{ borderColor: `${pantone.brightGold}50` }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <div
                    className="absolute w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${pantone.brightGold} 0%, ${pantone.bronzeGold} 100%)` }}
                  >
                    <span className="text-4xl font-bold" style={{ color: pantone.navyBlue }}>YL</span>
                  </div>
                </div>

                {/* Corner Accents */}
                {[['top-4', 'left-4'], ['top-4', 'right-4'], ['bottom-4', 'left-4'], ['bottom-4', 'right-4']].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos[0]} ${pos[1]} w-8 h-8 border-2 rounded-lg`}
                    style={{ borderColor: pantone.brightGold }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ color: pantone.brightGold }}
              >
                Passionate About Creating Impact Through Code
              </h3>

              <p className="text-lg mb-4" style={{ color: '#E0E0E0' }}>
                Software Engineer with 7 years of experience specializing in high-scale backend 
                infrastructure and Identity & Access Management (IAM). Proven track record of 
                designing and building distributed systems that support high-throughput, 
                production-grade environments.
              </p>

              <p className="text-lg mb-6" style={{ color: '#E0E0E0' }}>
                Brings 5 years of deep expertise in IAM, evolving from implementing core 
                authentication and authorization logic to architecting foundational sharding 
                solutions for scalable identity services. Strong background in distributed systems, 
                with hands-on experience in horizontal scaling, data partitioning, and developing 
                reliable, developer-friendly APIs for internal platforms.
              </p>

              <p className="text-lg mb-6" style={{ color: '#E0E0E0' }}>
                Early career includes 2 years of full-stack development, providing a well-rounded 
                perspective on system design, user experience, and end-to-end application 
                architecture.
              </p>

              <p className="text-lg mb-6" style={{ color: '#E0E0E0' }}>
                Currently exploring and actively building skills in AI programming, with a focus on 
                integrating AI capabilities into backend systems and improving developer productivity 
                through intelligent tooling.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="tech-card text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: pantone.brightGold }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: pantone.deepBlue }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
