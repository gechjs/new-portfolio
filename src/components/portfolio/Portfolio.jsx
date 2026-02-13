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
import { ExternalLink, Github, Play, Rocket, Globe, Sparkles, Users, Code2, FileText } from 'lucide-react';


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



// ---------- Project Data (real projects from old component) ----------

import amazon from "../../assets/img/amazonClone.png";

import habeshaPlayImg from "../../assets/img/habeshaplay.png";

import garageImg from "../../assets/img/portfolio/abegarage.png";

import evangadiForumImg from "../../assets/img/evangadiForum.png";

import appleBotstrap from "../../assets/img/portfolio/apple-bootstrap.jpeg";

import appleReact from "../../assets/img/portfolio/appleLogo.jpg";

import freshstart from "../../assets/img/freshstart.png";

import mwcc from "../../assets/img/mwcc.png";



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

    title: "Evangadi Nexus",

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

    title: "Apple Vision Pro",

    img: appleBotstrap,

    desc: "Premium Apple product showcase with 3D-like interactions, smooth animations, and immersive user experience inspired by Apple's design.",

    links: [

      { url: "https://gizachew-project2.netlify.app", text: "Experience", icon: Sparkles }

    ],

    gradient: "from-purple-500 to-pink-600",

    lightGradient: "from-orange-400 to-red-500",

    iconColor: "text-gray-300",

    bgPattern: "radial-gradient(circle at 70% 20%, rgba(156,163,175,0.1) 0%, transparent 50%)"

  }

];



// ---------- Single Project Component – optimized ----------
const Single = React.memo(({ item, index }) => {
  const imageRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const isEven = index % 2 === 0;
  
  // Memoize gradient colors to avoid string splitting on every render
  const gradientColors = useMemo(() => {
    const colors = item.gradient.split(' ');
    return {
      start: colors[1] || '#a855f7',
      end: colors[3] || '#ec4899'
    };
  }, [item.gradient]);

  return (
    <section className="portfolio-section" style={{ height: '100vh', position: 'relative', backgroundColor: 'black', color: 'white', overflow: 'hidden' }}>

      {/* Animated background blobs */}

      <div className="absolute inset-0 opacity-30" style={{ background: item.bgPattern }} />

      <motion.div

        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"

        style={{

          background: `linear-gradient(135deg, ${item.gradient.split(' ')[1]}, ${item.gradient.split(' ')[3]})`,

          opacity: 0.1,

          y: imageY

        }}

        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}

        transition={{ duration: 20, repeat: Infinity }}

      />
      <motion.div

        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl"

        style={{ y: textY }}

        animate={{ scale: [1, 1.3, 1], rotate: [360, 0, 360] }}

        transition={{ duration: 25, repeat: Infinity, delay: 2 }}

      />

      {/* Subtle grid overlay */}

      <div className="absolute inset-0 opacity-5" style={{

        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                          linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,

        backgroundSize: '60px 60px'

      }} />



      {/* Main container using original BEM classes */}

      <div className="container">

        <div className={`wrapper ${isEven ? '' : 'row-reverse'}`}>

          

          {/* IMAGE CONTAINER with parallax */}

          <motion.div

            ref={imageRef}

            className="imageContainer"

            style={{ y: !isMobile ? imageY : 0 }}

          >

            <div className="imageWrapper" style={{ position: 'relative', padding: '1.5rem', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <motion.img

                src={item.img}

                alt={item.title}

                whileHover={{ scale: 1.05 }}

                transition={{ duration: 0.4 }}

                style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '16px' }}

              />

            </div>

          </motion.div>



          {/* TEXT CONTAINER with parallax */}

          <motion.div

            className="textContainer"

            style={{ y: !isMobile ? textY : 0 }}

          >

           



            {/* Title with gradient */}

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '2rem' }}>

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



            {/* Description */}

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

        </div>

      </div>

    </section>
  );

});



// ---------- Main Portfolio Component – with STICKY progress bar FIXED ----------

const Portfolio = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({

    target: ref,

    offset: ["start start", "end end"]

  });



  // Smooth progress bar animation

  const scaleX = useSpring(scrollYProgress, {

    stiffness: 150,

    damping: 30,

    restDelta: 0.001

  });



  // Track active section for circular progress (optional)

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    const newIndex = Math.floor(latest * items.length);

    setActiveIndex(Math.min(newIndex, items.length - 1));

  });



  // Global parallax background shift

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);



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

          zIndex: 1 // lower than progress bar

        }}

      />



      {/* ---------- ORIGINAL STICKY PROGRESS BAR (now sticky again!) ---------- */}

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

          height: '4px',

          background: 'linear-gradient(90deg, #a855f7, #06b6d4, #a855f7)',

          borderRadius: '2px',

          boxShadow: '0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(6,182,212,0.3)'

        }} className="progressBar"></motion.div>

      </div>



      {/* ---------- Project list ---------- */}

      {items.map((item, index) => (

        <Single item={item} key={item.id} index={index} />

      ))}



      {/* ---------- Circular progress indicator (from old component) ---------- */}

      <motion.div

        className="fixed bottom-8 right-8 z-50"

        style={{

          width: '64px',

          height: '64px',

          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),

          zIndex: 70

        }}

      >

        <div style={{ position: 'relative' }}>

          <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>

            <circle

              cx="32"

              cy="32"

              r="28"

              fill="none"

              stroke="rgba(255,255,255,0.1)"

              strokeWidth="2"

            />

            <motion.circle

              cx="32"

              cy="32"

              r="28"

              fill="none"

              stroke="url(#gradient)"

              strokeWidth="2"

              strokeLinecap="round"

              style={{

                pathLength: scrollYProgress,

                strokeDasharray: "176",

                strokeDashoffset: useTransform(scrollYProgress, [0, 1], [176, 0])

              }}

            />

          </svg>

          <defs>

            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">

              <stop offset="0%" stopColor="#a855f7" />

              <stop offset="100%" stopColor="#06b6d4" />

            </linearGradient>

          </defs>

          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'white' }}>

              {Math.round(scrollYProgress.get() * 100)}%

            </span>

          </div>

        </div>

      </motion.div>

    </div>

  );

};



export default Portfolio;
