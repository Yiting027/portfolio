import { motion } from 'framer-motion';
import { pantone } from '../../theme/colors';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yiting-lin-a48350133/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Yiting027',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'yiting.lin027@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Get In Touch</h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: '#E0E0E0' }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-card h-full">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: pantone.brightGold }}
                >
                  Let's Connect
                </h3>

                <p className="mb-8" style={{ color: '#E0E0E0' }}>
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Let's create something
                  amazing together.
                </p>

                {/* Social Links */}
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg transition-all"
                      style={{ background: `${pantone.slateBlue}60` }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        background: `${pantone.brightGold}15`,
                        x: 8,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${pantone.brightGold} 0%, ${pantone.bronzeGold} 100%)`,
                          color: pantone.navyBlue,
                        }}
                      >
                        {link.icon}
                      </div>
                      <span className="font-medium" style={{ color: '#E0E0E0' }}>
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${pantone.brightGold}33` }}>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: pantone.brightGold }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-card">
                {submitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${pantone.brightGold} 0%, ${pantone.bronzeGold} 100%)`,
                      }}
                      initial={{ rotate: -180 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={pantone.navyBlue} strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </motion.div>
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: pantone.brightGold }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: '#E0E0E0' }}>
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                    <motion.button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 btn-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#E0E0E0' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                        style={{
                          background: `${pantone.slateBlue}80`,
                          border: `1px solid ${pantone.deepBlue}`,
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = pantone.brightGold)}
                        onBlur={(e) => (e.target.style.borderColor = pantone.deepBlue)}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#E0E0E0' }}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                        style={{
                          background: `${pantone.slateBlue}80`,
                          border: `1px solid ${pantone.deepBlue}`,
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = pantone.brightGold)}
                        onBlur={(e) => (e.target.style.borderColor = pantone.deepBlue)}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#E0E0E0' }}>
                        Message
                      </label>
                      <textarea
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg outline-none transition-all resize-none"
                        style={{
                          background: `${pantone.slateBlue}80`,
                          border: `1px solid ${pantone.deepBlue}`,
                          color: '#FFFFFF',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = pantone.brightGold)}
                        onBlur={(e) => (e.target.style.borderColor = pantone.deepBlue)}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 rounded-full"
                            style={{ borderTopColor: pantone.navyBlue, borderColor: `${pantone.navyBlue}30` }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
