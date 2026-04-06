import { motion } from 'framer-motion';
import { pantone } from '../../theme/colors';

const skillCategories = [
  {
    name: 'Languages',
    icon: '💻',
    skills: ['Java (Expert)', 'Python', 'Golang'],
  },
  {
    name: 'Backend & Architecture',
    icon: '⚙️',
    skills: [
      'Object-Oriented Architecture',
      'Microservices',
      'RESTful API',
      'RPC',
      'Distributed Systems',
      'Multithreading',
      'Schema Design',
      'MVC',
    ],
  },
  {
    name: 'Frameworks & Build',
    icon: '🔧',
    skills: ['Spring', 'Spring Boot', 'Maven', 'Gradle', 'Apache Wicket', 'Tomcat'],
  },
  {
    name: 'Data & Storage',
    icon: '🗄️',
    skills: ['SQL (Relational)', 'NoSQL', 'Redis'],
  },
  {
    name: 'Data Interchange',
    icon: '📦',
    skills: ['JSON', 'XML', 'YAML'],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Terraform', 'Docker', 'Jenkins', 'Agile/Scrum', 'CI/CD Pipelines', 'Linux'],
  },
  {
    name: 'Observability & Tools',
    icon: '🔍',
    skills: ['Grafana', 'Git', 'IntelliJ', 'Jira', 'Confluence'],
  },
  {
    name: 'Testing',
    icon: '✅',
    skills: ['JUnit', 'Integration Testing', 'Functional Testing'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Skills & Tools</h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#E0E0E0' }}
          >
            A comprehensive toolkit for building modern, scalable applications
          </p>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                className="tech-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: pantone.brightGold }}
                  >
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="px-4 py-2 rounded-lg text-sm font-medium"
                      style={{
                        background: `${pantone.deepBlue}60`,
                        color: pantone.brightGold,
                        border: `1px solid ${pantone.brightGold}30`,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: pantone.brightGold,
                        background: `${pantone.brightGold}15`,
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
