import { motion } from 'framer-motion';
import { pantone } from '../../theme/colors';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Arizona State University',
    period: '2018 - 2019',
    highlights: [
      'Relevant Coursework: Data Visualization, Artificial Intelligence',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Arizona State University',
    period: '2015 - 2017',
    highlights: [
      'Dean\'s List: Spring 2015, Spring 2016, Spring 2017',
    ],
  },
];

const certifications = [
  { name: 'Generative AI for Java and Spring Development', issuer: 'SkillUp', year: '2025' },
  { name: 'Programming with Google Go', issuer: 'University of California, Irvine', year: '2025' },
  { name: 'The Full Stack', issuer: 'Meta', year: '2026' },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20">
      <div className="max-w-5xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Education</h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#E0E0E0' }}
          >
            Academic foundation and continuous learning journey
          </p>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: '#FFFFFF' }}
                    >
                      {edu.school}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: pantone.brightGold }}
                    >
                      {edu.degree}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-lg text-sm font-semibold"
                    style={{
                      background: `${pantone.brightGold}15`,
                      border: `1px solid ${pantone.brightGold}`,
                      color: pantone.brightGold,
                    }}
                  >
                    {edu.period}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: '#E0E0E0' }}
                    >
                      <motion.span
                        style={{ color: pantone.brightGold }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        ✓
                      </motion.span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3
              className="text-xl font-bold mb-6 text-center"
              style={{ color: pantone.brightGold }}
            >
              Certifications & Continuous Learning
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="text-center p-4 rounded-lg"
                  style={{ background: `${pantone.slateBlue}80` }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    background: `${pantone.brightGold}10`,
                  }}
                >
                  <motion.div
                    className="text-3xl mb-2"
                    initial={{ rotate: -10 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ once: true }}
                  >
                    📜
                  </motion.div>
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{ color: '#FFFFFF' }}
                  >
                    {cert.name}
                  </h4>
                  <p className="text-xs" style={{ color: pantone.deepBlue }}>
                    {cert.issuer}
                  </p>
                  <p
                    className="text-xs mt-1 font-semibold"
                    style={{ color: pantone.brightGold }}
                  >
                    {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
