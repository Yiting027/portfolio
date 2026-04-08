import { motion } from 'framer-motion';
import { pantone } from '../../theme/colors';
import mypic from '../../assets/mypic.JPG';

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

          <div className="flex flex-col md:flex-row gap-8 mt-12">
            {/* Left Side - Avatar + Stats */}
            <div className="flex-shrink-0">
              {/* Image/Avatar - Bigger */}
              <motion.div
                className="relative w-48 h-48 md:w-56 md:h-56 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="w-full h-full rounded-2xl relative overflow-hidden"
                  style={{
                    border: `2px solid ${pantone.brightGold}40`,
                  }}
                >
                  <img
                    src={mypic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Stats - Below Image, 2 columns matching half image width each */}
              <motion.div
                className="grid grid-cols-2 gap-3 w-48 md:w-56"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
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
                      className="text-xl font-bold mb-1"
                      style={{ color: pantone.brightGold }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: pantone.deepBlue }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
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

                <p className="text-lg mb-4" style={{ color: '#E0E0E0' }}>
                  Brings 5 years of deep expertise in IAM, evolving from implementing core
                  authentication and authorization logic to architecting foundational sharding
                  solutions for scalable identity services. Strong background in distributed systems,
                  with hands-on experience in horizontal scaling, data partitioning, and developing
                  reliable, developer-friendly APIs for internal platforms.
                </p>

                <p className="text-lg mb-4" style={{ color: '#E0E0E0' }}>
                  Early career includes 2 years of full-stack development, providing a well-rounded
                  perspective on system design, user experience, and end-to-end application
                  architecture.
                </p>

                <p className="text-lg mb-6" style={{ color: '#E0E0E0' }}>
                  Currently exploring and actively building skills in AI programming, with a focus on
                  integrating AI capabilities into backend systems and improving developer productivity
                  through intelligent tooling.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
