import { motion } from 'framer-motion';
import { pantone, gradients } from '../../theme/colors';

const projects = [
  {
    title: 'Pet Food Review Analysis',
    description: 'An analysis tool for reviewing and comparing pet food products. Built with AI and data visualization libraries.',
    tags: ['Java', 'Stanford CoreNLP', 'Google Gemini API'],
    image: '📊',
    link: 'https://github.com/Yiting027/PetFoodReviewAnalysis',
  },
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio built with React and Markdown for easy content management. Ai assisted content generation and SEO optimization.',
    tags: ['React', 'Markdown', 'CSS', 'Claude Coding'],
    image: '📖',
    link: 'https://github.com/Yiting027/YitingPortfolio',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#E0E0E0' }}
          >
            A showcase of innovative solutions pushing the boundaries of technology
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="tech-card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Project Icon/Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{project.image}</span>
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${pantone.brightGold}15` }}
                    whileHover={{ scale: 1.1, background: pantone.brightGold }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={pantone.brightGold}
                      strokeWidth="2"
                      className="group-hover:stroke-white transition-colors"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </motion.div>
                </div>

                {/* Project Info */}
                <h3
                  className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors"
                  style={{ color: '#FFFFFF' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${pantone.deepBlue}60`,
                        color: pantone.brightGold,
                        border: `1px solid ${pantone.brightGold}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Yiting027"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>View More on GitHub</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
