import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gech_logo from '../../assets/img/gech_logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const { scrollY } = useScroll();
  
  // Transform header background opacity based on scroll
  const headerBgOpacity = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.95)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(8px)', 'blur(12px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#services', label: 'Services', icon: '⚡' },
    { href: '#portfolio', label: 'Portfolio', icon: '✨' },
    { href: '#experience', label: 'Experience', icon: '💼' },
    { href: '#contact', label: 'Contact', icon: '�' },
  ];

  const scrollToSection = (sectionId) => {
    console.log('Attempting to scroll to section:', sectionId);
    const element = document.getElementById(sectionId.replace('#', ''));
    console.log('Found element:', element);
    if (element) {
      console.log('Scrolling to element:', element);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Element not found for ID:', sectionId);
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] via-[#9D4EDD] to-[#FF6B35] z-50"
        style={{ 
          scaleX: useTransform(scrollY, [0, document.body.scrollHeight - window.innerHeight], [0, 1]),
          transformOrigin: '0%'
        }}
      />

      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: headerBgOpacity,
          backdropFilter: headerBlur,
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with enhanced animation */}
            <motion.a 
              href="#home"
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated gradient glow */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Main logo image */}
              <div className="relative">
                <img 
                  src={gech_logo} 
                  alt="GIZACHEW MOHAMMED" 
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>

              {/* Subtle underline animation */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex items-center gap-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => {
                    setActiveLink(item.href);
                    scrollToSection(item.href);
                  }}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                    <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </span>
                  
                  {/* Active indicator */}
                  {activeLink === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#9D4EDD]/20 rounded-lg border border-white/10"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#9D4EDD]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ scale: 0.95 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.a>
              ))}
            </motion.nav>

            {/* Right side - Contact Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD]"
                  animate={{
                    background: [
                      'linear-gradient(45deg, #FF6B35 0%, #9D4EDD 100%)',
                      'linear-gradient(45deg, #9D4EDD 0%, #FF6B35 100%)',
                      'linear-gradient(45deg, #FF6B35 0%, #9D4EDD 100%)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Button content */}
                <span className="relative z-10 text-white text-sm font-semibold flex items-center gap-2">
                  Let's Talk
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 rounded-lg bg-gradient-to-r from-[#FF6B35]/20 to-[#9D4EDD]/20 flex items-center justify-center border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] rounded-full" />
                <span className="w-full h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] rounded-full" />
                <span className="w-full h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] rounded-full" />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu (hidden by default - you can expand this) */}
      <motion.div 
        className="fixed inset-x-0 top-16 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden z-30"
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#FF6B35]/20 hover:to-[#9D4EDD]/20 transition-all duration-300 border border-transparent hover:border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll to top button (appears after scrolling) */}
      {isScrolled && (
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#9D4EDD] text-white shadow-lg shadow-purple-500/25 flex items-center justify-center z-50 border border-white/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default Header;
