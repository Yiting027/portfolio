import { motion } from 'framer-motion';
import { pantone } from '../../theme/colors';

const experiences = [
  {
    role: 'BACKEND / PLATFORM SOFTWARE ENGINEER',
    company: 'ORACLE AMERICA',
    period: '2020 - 2025',
    description: 'Led the architecture and development of a distributed Identity Shard Service, a core IAM data plane component powering high-throughput authentication and authorization systems at scale.',
    achievements: [
      'Architected a horizontally scalable, sharded and replicated data layer ensuring strong consistency across regions for mission-critical identity workflows',
      'Designed a schema-agnostic object mapping layer on key-value storage, eliminating migrations and accelerating onboarding of new identity object types',
      'Built a parallel Recovery Domain Service with versioned protocols, enabling zero-downtime upgrades during production promotions',
      'Automated regional expansion via CI/CD, reducing new-region launch time from ~3 months to near-zero manual effort',
      'Established core infrastructure and operational standards, including deployment lifecycle, monitoring, and alerting for high availability',
      'Partnered cross-functionally with security and platform teams to ensure system reliability, correctness, and long-term scalability',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'CFM (NOW KINECTIVE)',
    period: '2018 - 2020',
    description: 'Developed backend services for a banking web platform, supporting both client-facing experiences and internal banker workflows, with a focus on reliability and system integration.',
    achievements: [
      'Built an asynchronous orchestration service to manage complex hardware–software interactions, improving transaction reliability and response aggregation',
      'Designed and implemented backend APIs supporting high-volume financial workflows and internal operations',
      'Contributed to full-stack delivery, ensuring end-to-end feature velocity while maintaining backend ownership',
      'Improved system integration across services, enabling smoother coordination between frontend, backend, and external systems',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Experience</h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#E0E0E0' }}
          >
            A journey of continuous growth and impact in the tech industry
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: `linear-gradient(180deg, ${pantone.brightGold} 0%, ${pantone.bronzeGold} 100%)` }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} pl-8 md:pl-0`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-[-5px] md:left-auto top-0 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: pantone.brightGold,
                    boxShadow: `0 0 10px ${pantone.brightGold}`,
                    [index % 2 === 0 ? 'right' : 'left']: index % 2 === 0 ? '-4px' : '-4px',
                  }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                />

                {/* Content Card */}
                <div className="tech-card text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: `linear-gradient(135deg, ${pantone.brightGold} 0%, ${pantone.bronzeGold} 100%)`,
                        color: pantone.navyBlue,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-1 text-left"
                    style={{ color: '#FFFFFF' }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-sm mb-3 text-left"
                    style={{ color: pantone.brightGold }}
                  >
                    {exp.company}
                  </p>

                  <p className="text-sm mb-4 text-left" style={{ color: '#9CA3AF' }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-left"
                        style={{ color: '#E0E0E0' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <span
                          className="mt-1"
                          style={{ color: pantone.brightGold }}
                        >
                          ▸
                        </span>
                        <span>
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
