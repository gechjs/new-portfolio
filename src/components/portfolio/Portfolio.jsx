import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Github, Play, Rocket, Globe } from 'lucide-react';

// ---------- Custom hook for responsive design ----------
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

// ---------- Project Data (concise descriptions) ----------
import habeshaPlayImg from "../../assets/img/tinified/habeshaplay.webp";
import garageImg from "../../assets/img/tinified/abegarage.jpg";
import houseRental from "../../assets/img/tinified/houseRental.jpg";
import freshstart from "../../assets/img/tinified/freshstart.webp";
import mwcc from "../../assets/img/tinified/mwcc.jpg";
import pharmacy0 from "../../assets/img/tinified/pharmacy0.jpg";
import pharmacy1 from "../../assets/img/pharmacy1.jpg";
import pharmacy2 from "../../assets/img/pharmacy2.png";

const items = [
  {
    id: 1,
    title: "Fresh Start House",
    img: freshstart,
    desc: "Sober living platform with transitional housing, recovery support services, resident management, and progress tracking dashboard.",
    links: [{ url: "https://freshstarthouse.com/", text: "Live Site", icon: Globe }],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 2,
    title: "Abe Garage Pro",
    img: garageImg,
    desc: "Garage management system with vehicle tracking, service scheduling, inventory management, analytics dashboard, and customer relationship management.",
    links: [
      { url: "https://abebe-garage.netlify.app/", text: "Live Demo", icon: Rocket },
      { url: "https://github.com/gechjs/Abe-Garage-Pro", text: "GitHub", icon: Github }
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Habesha Play",
    img: habeshaPlayImg,
    desc: "Netflix-inspired streaming platform with personalized content discovery, genre browsing, trailer previews, watchlist management, and user profiles.",
    links: [
      { url: "https://habesha-play-trailers.vercel.app/", text: "Live Demo", icon: Play },
      { url: "https://github.com/gechjs/Habesha-Play", text: "GitHub", icon: Github }
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "MWCCO",
    img: mwcc,
    desc: "Volunteer coordination and donation platform for women and children's organizations with matching, tracking, event management, and impact reporting.",
    links: [{ url: "https://mwcoo-frontend-62s8.vercel.app/", text: "Live Platform", icon: Globe }],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "House Rental Platform",
    img: houseRental,
    desc: "Property rental platform for Addis Ababa with advanced search, virtual tours, secure payments, tenant screening, and landlord dashboard.",
    links: [{ url: "https://yba.onrender.com/", text: "Live Platform", icon: Globe }],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 6,
    title: "Kibkab Pharmacy",
    img: [pharmacy0, pharmacy1, pharmacy2],
    desc: "Pharmacy management system with inventory tracking, prescription management, sales analytics, customer records, and automated reorder alerts.",
    links: [{ url: "#", text: "Live Demo - Coming Soon", icon: Rocket }],
    gradient: "from-purple-500 to-pink-600",
  }
];

// ---------- Optimized Image Component ----------
const OptimizedImage = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const getImageSrc = (src) => {
    if (typeof src === 'string') return src;
    if (src?.src) return src.src;
    if (src?.default) return src.default;
    if (Array.isArray(src)) return src[0];
    return src;
  };

  const imageSrc = getImageSrc(src);

  return (
    <div className="image-wrapper">
      {!isLoaded && <div className="shimmer" />}
      <motion.img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      />
      {isError && <div className="image-error">Failed to load</div>}
      <div className="corner top-left" />
      <div className="corner bottom-right" />
    </div>
  );
};

// ---------- Project Preview (Next Project) ----------
const ProjectPreview = ({ item, onClick, carouselSpeed, isMobile }) => {
  return (
    <motion.div
      className="project-preview"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: carouselSpeed.navigation.stiffness, damping: carouselSpeed.navigation.damping }}
      onClick={onClick}
      style={{
        height: isMobile ? 80 : 120,
        padding: isMobile ? '0 1rem' : '0 3rem',
      }}
    >
      <div className="preview-bg" style={{ background: `linear-gradient(90deg, ${item.gradient}, transparent)` }} />
      <motion.div
        className="preview-image"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: carouselSpeed.elements.stiffness }}
        style={{ width: isMobile ? 100 : 180 }}
      >
        <OptimizedImage src={Array.isArray(item.img) ? item.img[0] : item.img} alt={item.title} />
      </motion.div>
      <div className="preview-text">
        <span className="preview-label">Next Project</span>
        <span className="preview-title">{item.title}</span>
      </div>
      <motion.div
        className="preview-arrow"
        whileHover={{ x: 10 }}
        style={{ width: isMobile ? 40 : 50, height: isMobile ? 40 : 50 }}
      >
        <span>→</span>
      </motion.div>
    </motion.div>
  );
};

// ---------- Single Project Component ----------
const Single = ({ item, index, nextItem, onActive, carouselSpeed }) => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: carouselSpeed.parallax.stiffness,
    damping: carouselSpeed.parallax.damping,
  });

  const textParallaxY = useTransform(smoothProgress, [0, 1], [40, -40]);

  const scrollToProject = (targetId) => {
    document.getElementById(`project-${targetId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.section
      id={`project-${item.id}`}
      ref={sectionRef}
      className="portfolio-section"
      style={{ height: isMobile ? 'auto' : '80vh', minHeight: '600px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      onViewportEnter={() => onActive(index)}
    >
      <div className="section-background" />

      {nextItem && (
        <ProjectPreview
          item={nextItem}
          onClick={() => scrollToProject(nextItem.id)}
          carouselSpeed={carouselSpeed}
          isMobile={isMobile}
        />
      )}

      <div className="container" style={{ padding: isMobile ? '1rem' : '0 2rem' }}>
        <motion.div className="wrapper" variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}>
          {/* On mobile: title & description first, then image (via flex-col) */}
          <div className={`content-layout ${isMobile ? 'mobile-layout' : ''}`}>
            {/* Text Block */}
            <motion.div
              className="text-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <motion.div style={{ y: !isMobile ? textParallaxY : 0 }}>
                <h2 className="project-title">
                  <span className="gradient-text" style={{ backgroundImage: `linear-gradient(135deg, #a855f7, #ec4899)` }}>
                    {item.title}
                  </span>
                </h2>
                <p className="project-description">{item.desc}</p>
                <div className="button-group">
                  {item.links.slice(0, 2).map((link, i) => {
                    const isPrimary = i === 0;
                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-button ${isPrimary ? 'primary' : 'secondary'}`}
                      >
                        {link.icon && <link.icon size={14} />}
                        <span>{link.text}</span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Image Block */}
            <motion.div
              className="image-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <div className="image-frame">
                <OptimizedImage
                  src={Array.isArray(item.img) ? item.img[0] : item.img}
                  alt={item.title}
                  style={{ maxHeight: isMobile ? 250 : 400 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ---------- Main Portfolio Component ----------
const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Smooth spring for progress bar width
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });
  // Map progress to width percentage (0% to 100%)
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const [activeIndex, setActiveIndex] = useState(0);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const carouselSpeed = {
    parallax: { stiffness: 100, damping: 30 },
    elements: { stiffness: 80, damping: 25 },
    navigation: { stiffness: 100, damping: 20 }
  };

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="background-gradient" style={{ y: bgY }} />

      <div className="progress-header">
        <h1>Featured Works</h1>
        {/* Progress bar centered and expands horizontally */}
        <div className="progress-container">
          <motion.div className="progress-bar" style={{ width: progressWidth }} />
        </div>
      </div>

      {items.map((item, index) => (
        <Single
          key={item.id}
          item={item}
          index={index}
          nextItem={items[index + 1]}
          onActive={setActiveIndex}
          carouselSpeed={carouselSpeed}
        />
      ))}
    </div>
  );
};

export default Portfolio;