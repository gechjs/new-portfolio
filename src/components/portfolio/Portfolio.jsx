import { useRef, useState, useEffect, useMemo } from "react";
import React from "react";
import "./portfolio.scss";
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useMotionValueEvent 
} from "framer-motion";
import { ExternalLink, Github, Play, Rocket, Globe, FileText, Users } from 'lucide-react';

// ---------- Custom hook for responsive parallax ----------
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = (e) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// ---------- Project Data (unchanged) ----------
import amazon from "../../assets/img/amazonClone.png";
import habeshaPlayImg from "../../assets/img/habeshaplay.png";
import garageImg from "../../assets/img/portfolio/abegarage.png";
import evangadiForumImg from "../../assets/img/evangadiForum.png";
import freshstart from "../../assets/img/freshstart.png";
import mwcc from "../../assets/img/mwcc.png";
import pharmacy0 from "../../assets/img/pharmacy0.jpg";
import pharmacy1 from "../../assets/img/pharmacy1.jpg";
import pharmacy2 from "../../assets/img/pharmacy2.png";

const items = [
  {
    id: 1,
    title: "Fresh Start House",
    img: freshstart,
    desc: "U.S.-based recovery organization offering structured sober living and transitional support services for long-term sobriety and independent living.",
    links: [
      { url: "https://freshstarthouse.com/", text: "Live Site", icon: Globe },
      { url: "#", text: "Case Study", icon: FileText }
    ],
    gradient: "from-purple-500 to-pink-600",
    lightGradient: "from-orange-400 to-red-500",
    iconColor: "text-emerald-400",
    bgPattern: "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.1) 0%, transparent 50%)"
  },
  {
    id: 2,
    title: "Abe Garage Pro",
    img: garageImg,
    desc: "Revolutionary garage management ecosystem with real-time operational insights and advanced analytics for automotive businesses.",
    links: [
      { url: "https://abegaragepro.com/", text: "Live Demo", icon: Rocket },
      { url: "https://github.com/gechjs/Abe-Garage-Pro", text: "GitHub", icon: Github }
    ],
    gradient: "from-purple-500 to-pink-600",
    lightGradient: "from-orange-400 to-red-500",
    iconColor: "text-blue-400",
    bgPattern: "radial-gradient(circle at 80% 70%, rgba(59,130,246,0.1) 0%, transparent 50%)"
  },
  {
    id: 3,
    title: "Habesha Play",
    img: habeshaPlayImg,
    desc: "Netflix-inspired streaming platform with advanced content discovery, genre-based categorization, trailer viewing, and fully responsive modern UI.",
    links: [
      { url: "https://habesha-play-trailers.vercel.app/", text: "Live Demo", icon: Play },
      { url: "https://github.com/gechjs/Habesha-Play", text: "GitHub", icon: Github }
    ],
    gradient: "from-purple-500 to-pink-600",
    lightGradient: "from-orange-400 to-red-500",
    iconColor: "text-purple-400",
    bgPattern: "radial-gradient(circle at 40% 60%, rgba(168,85,247,0.1) 0%, transparent 50%)"
  },
  {
    id: 4,
    title: "MWCCO",
    img: mwcc,
    desc: "A responsive web platform for Meheret Women & Children's Charitable Organization that streamlines volunteer coordination, event management, and secure donations, supporting impactful initiatives for women and children in Addis Ababa.",
    links: [
      { url: "https://mwcoo-frontend-62s8.vercel.app/", text: "Live Platform", icon: Globe },
      { url: "#", text: "Case Study", icon: FileText }
    ],
    gradient: "from-purple-500 to-pink-600",
    lightGradient: "from-orange-400 to-red-500",
    iconColor: "text-green-400",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)"
  },
  {
    id: 5,
    title: "Amazon Prime Clone",
    img: amazon,
    desc: "Feature-rich e-commerce platform with secure payment processing, user authentication, product filtering, and shopping cart functionality.",
    links: [
      { url: "https://amazon-clone63.netlify.app/", text: "Shop Demo", icon: Rocket }
    ],
    gradient: "from-purple-500 to-pink-600",
    lightGradient: "from-orange-400 to-red-500",
    iconColor: "text-orange-400",
    bgPattern: "radial-gradient(circle at 60% 40%, rgba(249,115,22,0.1) 0%, transparent 50%)"
  },
  {
    id: 6,
    title: "Evangadi Forum",
    img: evangadiForumImg,
    desc: "Developer community hub with real-time discussions, Q&A forums, user profiles, and knowledge sharing platform for developers.",
    links: [
      { url: "https://evangadi-forum-frontend-deploy-main.vercel.app/", text: "Join Community", icon: Users },
      { url: "https://github.com/gechjs/evangadi-forum-frontend-deploy-main", text: "GitHub", icon: Github }
    ],
    gradient: "from-purple-500 to-pink-600",
    lightGradient: "from-orange-400 to-red-500",
    iconColor: "text-cyan-400",
    bgPattern: "radial-gradient(circle at 30% 80%, rgba(34,211,238,0.1) 0%, transparent 50%)"
  },
  {
    id: 7,
    title: "Kibkab Pharmacy",
    img: [pharmacy0, pharmacy1, pharmacy2],
    desc: "Full-stack web application with React/TypeScript frontend and Go backend, featuring inventory management, sales tracking, customer management, and reporting for kibkab pharmacy operations.",
    links: [
      { url: "#", text: "Live Demo - Coming Soon", icon: Rocket }
    ],
    gradient: "from-purple-500 to-pink-600",
    lightGradient: "from-orange-400 to-red-500",
    iconColor: "text-cyan-400",
    bgPattern: "radial-gradient(circle at 70% 20%, rgba(6,182,212,0.1) 0%, transparent 50%)"
  }
];

// ---------- Optimized Image Component (unchanged) ----------
const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const placeholderColor = useMemo(() => {
    const hash = src.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;
    return `linear-gradient(135deg, hsl(${hue}, 70%, 20%), hsl(${hue}, 80%, 30%))`;
  }, [src]);

  return (
    <div className="image-wrapper" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: placeholderColor,
            backdropFilter: 'blur(10px)',
            zIndex: 1,
          }}
        >
          <div className="shimmer" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            animation: 'shimmer 2s infinite',
          }} />
        </motion.div>
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 2 }}
        {...props}
      />
      {isError && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: '#1a1a1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          zIndex: 3
        }}>
          Failed to load
        </div>
      )}
    </div>
  );
};

// ---------- Project Preview Component (new) ----------
const ProjectPreview = ({ item, position, onClick }) => {
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      backdropFilter: "blur(0px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      backdropFilter: "blur(20px)",
      transition: { 
        type: "spring", 
        stiffness: 300,  // Fast/Snap
        damping: 25,     // Controlled
        mass: 0.8,       // Lighter
        delayChildren: 0.05, 
        staggerChildren: 0.05 // Very quick stagger
      }
    },
    hover: { 
      scale: 1.02,
      backgroundColor: 'rgba(0,0,0,0.6)',
      transition: { duration: 0.15 } // Snappy hover
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0, rotate: -5 }, // Smaller offset for speed perception
    visible: { 
      x: 0, 
      opacity: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 250, damping: 20 } 
    }
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 }, // Smaller offset
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 250, damping: 20 } 
    }
  };

  if (!item) return null;

  return (
    <motion.div
      className={`project-preview project-preview--${position}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: false, amount: 0.5 }}
      onClick={onClick}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0, 
        height: '120px',
        background: 'rgba(0,0,0,0.4)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 3rem',
        cursor: 'pointer',
        zIndex: 50,
        overflow: 'hidden',
        boxShadow: '0 -10px 50px rgba(0,0,0,0.5)',
      }}
    >
      {/* Background gradient matching project */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(90deg, ${item.gradient.includes('emerald') ? '#10b981' : item.gradient.includes('blue') ? '#3b82f6' : item.gradient.includes('purple') ? '#a855f7' : item.gradient.includes('orange') ? '#f97316' : '#06b6d4'}, transparent)`,
        opacity: 0.05,
        zIndex: -1
      }} />
      
      {/* Image Concept: "Show only the image" context - emphasized image */}
      <motion.div 
        variants={imageVariants}
        style={{ 
          width: '180px', 
          height: '100%', 
          position: 'absolute',
          left: 0,
          bottom: 0,
          maskImage: 'linear-gradient(90deg, black 60%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, black 60%, transparent)',
          opacity: 0.8
        }}
      >
        <OptimizedImage
          src={Array.isArray(item.img) ? item.img[0] : item.img}
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Spacer to push text to "other side" slightly */}
      <div style={{ width: '160px' }}></div> 

      {/* Text Content */}
      <motion.div variants={textVariants} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '1rem', zIndex: 10 }}>
        <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          Next Project
        </span>
        <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          {item.title}
        </span>
      </motion.div>

      {/* Action Arrow */}
      <motion.div 
        variants={textVariants}
        whileHover={{ x: 10 }}
        style={{ 
          opacity: 0.8, 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <span style={{ fontSize: '1.5rem' }}>→</span>
      </motion.div>
    </motion.div>
  );
};

// ---------- Single Project Component – with previews ----------
const Single = React.memo(({ item, index, prevItem, nextItem, onActive }) => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Track scroll position for image parallax and other effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll progress for parallax to prevent jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const imageY = useTransform(smoothProgress, [0, 1], [-50, 50]); // Use smooth progress
  const textY = useTransform(smoothProgress, [0, 1], [100, -100]); // Use smooth progress

  const isEven = index % 2 === 0;

  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5, // Start smaller for dramatic effect
      filter: "blur(10px)",
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 0.8,
        delay: 0
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isEven ? -100 : 100 }, // No scale/y conflict here
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.1 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: isEven ? 100 : -100 }, // Use X instead of Y to avoid fighting parallax
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.2
      }
    }
  };

  // Smooth scroll to another project section
  const scrollToProject = (targetId) => {
    const element = document.getElementById(`project-${targetId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.section
      id={`project-${item.id}`}
      ref={sectionRef}
      className="portfolio-section"
      style={{
        height: '100vh',
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
        overflow: 'hidden'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: false }}
      onViewportEnter={() => onActive(index)}
    >
      {/* Animated background blobs (unchanged) */}
      <div className="absolute inset-0 opacity-30" style={{ background: item.bgPattern }} />

      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.7))',
          opacity: 0.6,
          y: imageY // Use smoothed value
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
        style={{ 
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.5))',
          opacity: 0.7,
          y: textY  // Use smoothed value
        }}
        animate={{ scale: [1, 1.3, 1], rotate: [360, 0, 360] }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                          linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />


      {/* PREVIEW: Next project (bottom) - always shown if next project exists */}
      {nextItem && (
        <ProjectPreview
          item={nextItem}
          position="bottom"
          onClick={() => scrollToProject(nextItem.id)}
        />
      )}

      {/* Main container */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          className={`wrapper ${isEven ? '' : 'row-reverse'}`}
          variants={containerVariants}
          // Removing viewport/onViewportEnter from here as parent controls visibility state now
        >
          {/* IMAGE CONTAINER with parallax */}
          <motion.div
            ref={imageRef}
            className="imageContainer"
            style={{ y: !isMobile ? imageY : 0 }}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: false }}
          >
            <div className="imageWrapper" style={{ position: 'relative', padding: '1.5rem', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <OptimizedImage
                src={Array.isArray(item.img) ? item.img[0] : item.img}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* TEXT CONTAINER with parallax */}
          <motion.div
            className="textContainer"
            style={{ y: !isMobile ? textY : 0 }}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '0rem' }}>
              <span style={{ 
                background: `linear-gradient(135deg, ${item.gradient.includes('emerald') ? '#10b981' : item.gradient.includes('blue') ? '#3b82f6' : item.gradient.includes('purple') ? '#a855f7' : item.gradient.includes('orange') ? '#f97316' : '#06b6d4'}, ${item.gradient.includes('teal') ? '#14b8a6' : item.gradient.includes('indigo') ? '#6366f1' : item.gradient.includes('pink') ? '#ec4899' : item.gradient.includes('red') ? '#ef4444' : '#0891b2'})`, 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                color: '#ffffff',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
              }}>
                {item.title}
              </span>
            </h2>

            <p style={{ fontSize: '1.25rem', color: '#e5e7eb', lineHeight: 1.7, maxWidth: '600px', marginBottom: '2.5rem', fontWeight: '400' }}>
              {item.desc}
            </p>

            {/* Action Buttons (unchanged) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {item.links.map((link, i) => {
                const isPrimary = i === 0;
                return (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'relative',
                      padding: '0.875rem 2rem',
                      borderRadius: '16px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      background: isPrimary 
                        ? `linear-gradient(135deg, ${item.gradient.includes('emerald') ? '#10b981' : item.gradient.includes('blue') ? '#3b82f6' : item.gradient.includes('purple') ? '#a855f7' : item.gradient.includes('orange') ? '#f97316' : '#06b6d4'}, ${item.gradient.includes('teal') ? '#14b8a6' : item.gradient.includes('indigo') ? '#6366f1' : item.gradient.includes('pink') ? '#ec4899' : item.gradient.includes('red') ? '#ef4444' : '#0891b2'})` 
                        : 'rgba(255,255,255,0.08)',
                      border: isPrimary 
                        ? '1px solid rgba(255,255,255,0.2)' 
                        : '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      textDecoration: 'none',
                      overflow: 'hidden',
                      backdropFilter: 'blur(10px)',
                      boxShadow: isPrimary 
                        ? '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1)' 
                        : '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {link.icon && <link.icon size={18} style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }} />}
                      <span style={{ fontSize: '1rem', fontWeight: '600' }}>{link.text}</span>
                      <ExternalLink size={14} style={{ opacity: 0.7, transition: 'all 0.3s ease' }} className="group-hover:opacity-100 group-hover:translate-x-1" />
                    </span>
                    {isPrimary && (
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)', opacity: 0, transition: 'opacity 0.3s ease' }} className="hover:opacity-100" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
});

// ---------- Navigation Bar Component (new) ----------
const PortfolioNavigation = ({ activeIndex, total, onNavigate }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100, damping: 20 }}
      style={{
        position: 'sticky',
        bottom: '2rem',
        left: '50%',
        margin: '0 auto', 
        width: 'fit-content',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0.75rem 2rem',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(15px)',
        borderRadius: '50px',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      }}
    >
      <button 
        onClick={() => onNavigate(Math.max(0, activeIndex - 1))}
        disabled={activeIndex === 0}
        style={{ 
          background: 'none', 
          border: 'none', 
          color: 'white', 
          cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
          opacity: activeIndex === 0 ? 0.3 : 1,
          display: 'flex', alignItems: 'center'
        }}
      >
        <span style={{ fontSize: '1.25rem' }}>←</span>
      </button>

      <span style={{ fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '2px', color: 'rgba(255,255,255,0.8)', minWidth: '60px', textAlign: 'center' }}>
        {String(activeIndex + 1).padStart(2, '0')} <span style={{ opacity: 0.5 }}>/</span> {String(total).padStart(2, '0')}
      </span>

      <button
        onClick={() => onNavigate(Math.min(total - 1, activeIndex + 1))}
        disabled={activeIndex === total - 1}
        style={{ 
          background: 'none', 
          border: 'none', 
          color: 'white', 
          cursor: activeIndex === total - 1 ? 'not-allowed' : 'pointer',
          opacity: activeIndex === total - 1 ? 0.3 : 1,
          display: 'flex', alignItems: 'center'
        }}
      >
        <span style={{ fontSize: '1.25rem' }}>→</span>
      </button>
    </motion.div>
  );
};

// ---------- Main Portfolio Component – with sticky progress bar and nav ----------
const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  const scrollToProject = (index) => {
    setActiveIndex(index);
    const targetId = items[index].id;
    const element = document.getElementById(`project-${targetId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="portfolio" 
      ref={ref} 
      style={{ 
        backgroundColor: 'black', 
        color: 'white', 
        position: 'relative'
      }}
    >
      {/* Global gradient overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(88,28,135,0.1), transparent, rgba(8,145,178,0.1))',
          y: bgY,
          zIndex: 1
        }}
      />

      {/* Sticky progress bar */}
      <div className="progress" style={{ 
        zIndex: 60, 
        background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.8))',
        backdropFilter: 'blur(20px)',
        borderBottom: '3px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 4vw, 3.5rem)', 
          fontWeight: '800', 
          background: 'linear-gradient(135deg, #ffffff, #e5e7eb, #9ca3af)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#ffffff',
          marginBottom: '1rem',
          textShadow: '0 0 30px rgba(255,255,255,0.2)'
        }}>Featured Works</h1>
        <motion.div style={{ 
          scaleX, 
          height: '8px',
          background: 'linear-gradient(90deg, #ffffff, #f0f0f0, #ffffff)',
          borderRadius: '0px',
          boxShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.3)',
          border: '1px solid rgba(255,255,255,0.8)'
        }} className="progressBar"></motion.div>
      </div>

      {/* Project list with prev/next awareness */}
      {items.map((item, index) => (
        <Single
          key={item.id}
          item={item}
          index={index}
          prevItem={items[index - 1]}
          nextItem={items[index + 1]}
          onActive={setActiveIndex}
        />
      ))}

      {/* Bottom Navigation */}
      <PortfolioNavigation 
        activeIndex={activeIndex} 
        total={items.length} 
        onNavigate={scrollToProject} 
      />

    </div>
  );
};

export default Portfolio; 