import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Instagram, Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/gechjs', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gizachew-mohammed', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/gechjs', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/gechjs', label: 'Instagram' },
  ];

  const scrollToSection = (sectionId) => {
    console.log('Footer: Attempting to scroll to section:', sectionId);
    const element = document.getElementById(sectionId.replace('#', ''));
    console.log('Footer: Found element:', element);
    if (element) {
      console.log('Footer: Scrolling to element:', element);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Footer: Element not found for ID:', sectionId);
    }
  };

  return (
    <footer className="relative bg-black border-t border-purple-500/20">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)`,
        }} />
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                  GIZACHEW MOHAMMED
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Full-stack developer crafting elegant digital solutions with cutting-edge technology. 
                Specializing in scalable architectures and immersive user experiences.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#services', label: 'Services' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#contact', label: 'Contact' },
                ].map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Get In Touch</h4>
                  <div className="space-y-2">
                    <a 
                      href="mailto:gizachew.dev@gmail.com" 
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span>gizachew.dev@gmail.com</span>
                    </a>
                    <a 
                      href="tel:+251965726708" 
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-4 h-4 flex items-center justify-center text-xs">📱</span>
                      <span>+251 965 726 708</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Follow</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-white/10 pt-8 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                © {currentYear} GIZACHEW MOHAMMED
                <span className="text-purple-400">•</span>
                Made with 
                <Heart className="w-4 h-4 text-pink-500 mx-1" />
                passion
              </p>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Built with</span>
                <div className="flex gap-1">
                  {['React', 'Next.js', 'Tailwind'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
