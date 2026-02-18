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

// ---------- Project Preview Component (updated with clean animation) ----------
const ProjectPreview = ({ item, position, onClick, carouselSpeed }) => {
  return (
    <motion.div
      className={`project-preview project-preview--${position}`}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.6)' }}
      transition={{
        type: "spring",
        stiffness: carouselSpeed.navigation.stiffness,
        damping: carouselSpeed.navigation.damping
      }}
      onClick={onClick}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '120px',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 3rem',
        cursor: 'pointer',
        zIndex: 0,
        boxShadow: '0 -10px 50px rgba(0,0,0,0.5)'
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(90deg, ${item.gradient}, transparent)`,
        opacity: 0.05,
        zIndex: -1
      }} />

      {/* Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: carouselSpeed.elements.stiffness }}
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

      {/* Spacer to push text right */}
      <div style={{ width: '160px' }} />

      {/* Text Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: carouselSpeed.elements.stiffness }}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '1rem', zIndex: 10 }}
      >
        <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          Next Project
        </span>
        <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          {item.title}
        </span>
      </motion.div>

      {/* Action Arrow */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: carouselSpeed.elements.stiffness }}
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

// ---------- Single Project Component – updated with clean parallax and entry animations ----------
const Single = React.memo(({ item, index, prevItem, nextItem, onActive, carouselSpeed }) => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isEven = index % 2 === 0;

  // Scroll progress for parallax (smoothed)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: carouselSpeed.parallax.stiffness,
    damping: carouselSpeed.parallax.damping,
    restDelta: 0.001
  });

  // Parallax transforms – applied to inner wrappers, not to elements with entry animation
  const imageParallaxY = useTransform(smoothProgress, [0, 1], [-20, 20]);
  const textParallaxY = useTransform(smoothProgress, [0, 1], [40, -40]);

  // Entry animation variants – simple fade + translate
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: carouselSpeed.elements.stiffness,
        damping: carouselSpeed.elements.damping,
        mass: 0.8,
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: isEven ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: carouselSpeed.elements.stiffness,
        damping: carouselSpeed.elements.damping
      }
    }
  };

  const scrollToProject = (targetId) => {
    document.getElementById(`project-${targetId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.section
      id={`project-${item.id}`}
      ref={sectionRef}
      className="portfolio-section"
      style={{
        height: '80vh',
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
        overflow: 'hidden',
        scrollSnapAlign: 'center',       // center projects instead of start
        scrollMarginTop: '10vh',          // add margin to account for progress bar
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}   // animate once, trigger earlier
      onViewportEnter={() => onActive(index)}
    >
      {/* Background blobs – unchanged */}
      <div className="absolute inset-0 opacity-30" style={{ background: item.bgPattern }} />
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.7))',
          opacity: 0.6,
          y: imageParallaxY
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: carouselSpeed.floating.imageDuration, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.5))',
          opacity: 0.7,
          y: textParallaxY
        }}
        animate={{ scale: [1, 1.3, 1], rotate: [360, 0, 360] }}
        transition={{ duration: carouselSpeed.floating.textDuration, repeat: Infinity, delay: 2 }}
      />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                          linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Next project preview */}
      {nextItem && (
        <ProjectPreview
          item={nextItem}
          position="bottom"
          onClick={() => scrollToProject(nextItem.id)}
          carouselSpeed={carouselSpeed}
        />
      )}

      {/* Main content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className={`wrapper ${isEven ? '' : 'row-reverse'}`}
          variants={containerVariants}
        >
          {/* Image container – parallax applied to inner wrapper */}
          <motion.div
            className="imageContainer"
            variants={childVariants}
          >
            <motion.div
              className="imageWrapper"
              style={{
                position: 'relative',
                padding: '1.5rem',
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                y: !isMobile ? imageParallaxY : 0
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <OptimizedImage
                src={Array.isArray(item.img) ? item.img[0] : item.img}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: carouselSpeed.hover.duration }}
                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
              />
            </motion.div>
          </motion.div>

          {/* Text container – parallax applied to inner wrapper */}
          <motion.div
            className="textContainer"
            variants={childVariants}
          >
            <motion.div style={{ y: !isMobile ? textParallaxY : 0 }}>
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

              {/* Action Buttons */}
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
        </motion.div>
      </div>
    </motion.section>
  );
});

// ---------- Navigation Bar Component (unchanged) ----------
const PortfolioNavigation = ({ activeIndex, total, onNavigate, carouselSpeed }) => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  
  // Hide navigation when scrolling near the end of Portfolio
  useMotionValueEvent(scrollY, "change", (latest) => {
    const viewportHeight = window.innerHeight;
    const scrollThreshold = viewportHeight * 0.3; // Hide when 30% from bottom
    
    // Get scroll position relative to document
    const scrollPercentage = latest / (document.documentElement.scrollHeight - viewportHeight);
    
    // Hide when scrolled past 65% of page (well before Experience section)
    if (scrollPercentage > 0.65) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ type: "spring", stiffness: carouselSpeed.navigation.stiffness, damping: carouselSpeed.navigation.damping }}
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
  
  // Speed controls for carousel animations
  const carouselSpeed = {
    parallax: { stiffness: 400, damping: 25 },
    elements: { stiffness: 350, damping: 18 },
    hover: { duration: 0.2 },
    floating: { imageDuration: 8, textDuration: 12 },
    navigation: { stiffness: 150, damping: 15 }
  };

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
        position: 'relative',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth'
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
          background: 'linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)',
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
          carouselSpeed={carouselSpeed}
        />
      ))}

      {/* Bottom Navigation */}
      <PortfolioNavigation 
        activeIndex={activeIndex} 
        total={items.length} 
        onNavigate={scrollToProject} 
        carouselSpeed={carouselSpeed}
      />

    </div>
  );
};

export default Portfolio;