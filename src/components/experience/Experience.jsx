import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Experience = () => {
  const experienceRef = useRef(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });
  
  const bgY = useTransform(smoothProgress, [0, 1], [0, -80]);
  const titleY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const lineOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.3]);

  // Work items – clean without icons
  const workItems = [
    {
      title: "Freelance Software Developer",
      subtitle: "Self-Employed",
      location: "Remote",
      period: "01/2023 – Present",
      type: "Freelance",
      achievements: [
        "Designing and delivering high-quality software solutions for diverse clients, focusing on performance, scalability, and maintainable architecture",
        "Translate business requirements into effective technical solutions by developing robust backend systems, optimized APIs and databases, and modern front-end applications",
        "Ensure code quality through best practices, testing, and reviews while improving development efficiency through automation and streamlined processes",
        "Deliver reliable and user-focused software solutions that meet client needs and exceed expectations"
      ],
      technologies: ["Full-Stack", "API Design", "Database", "Frontend", "Backend"]
    },
    {
      title: "Software Engineer",
      subtitle: "GumiApps",
      location: "Addis Ababa, Ethiopia",
      period: "06/2025 – 01/2026",
      type: "Full-time",
      achievements: [
        "Contributed to the development of a SaaS platform designed for pharmacy business management",
        "Developed secure user registration and authentication systems to ensure safe platform access",
        "Built a business management module with role-based permission and access control",
        "Implemented a Customer Relationship Management (CRM) system including a gift card management feature",
        "Designed and optimized inventory filtering and search functionality using PostgreSQL full-text search",
        "Collaborated in backend system deployment and automation workflows"
      ],
      technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "cPanel", "GitHub Actions"]
    },
    {
      title: "Full Stack Developer",
      subtitle: "Efuye Gela Tech Company",
      location: "Addis Ababa, Ethiopia",
      period: "08/2024 – 02/2025",
      type: "Full-time",
      achievements: [
        "Built and maintained web and mobile applications, working across front-end and back-end systems to deliver scalable, high-performance solutions",
        "Developed responsive user interfaces using modern front-end frameworks and implemented robust backend APIs and database solutions",
        "Collaborated with designers and backend engineers to create seamless experiences for users and optimize business processes",
        "Integrated third-party services, implemented authentication systems, and optimized application performance for better user experience"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"]
    },
    {
      title: "Web Developer",
      subtitle: "Evangadi Devshop",
      location: "Addis Ababa, Ethiopia",
      period: "04/2025 – 08/2025",
      type: "Internship",
      achievements: [
        "Selected as Web Developer intern due to strong academic performance and consistent support in helping fellow students understand full-stack concepts",
        "Contributed to Evangadi Tutoring Platform (tutoring.evangadi.com) from initiation to production, focusing on frontend development",
        "Implemented responsive UI components, improved user experience, and collaborated with backend developers for seamless integration",
        "Worked within Agile team, participated in sprint discussions, performed peer reviews, and delivered production-ready frontend features"
      ],
      technologies: ["React", "Frontend", "Agile", "UI/UX"]
    },
    {
      title: "AI / Backend Engineer",
      subtitle: "A2SV",
      location: "Addis Ababa, Ethiopia",
      period: "06/2025 – 08/2025",
      type: "Part-time",
      achievements: [
        "Collaborated with team to build AI-powered platform helping African professionals optimize CVs and find remote tech jobs",
        "Designed and implemented backend for AI chatbot in Go, enabling real-time personalized resume improvement suggestions",
        "Built scalable architecture supporting real-time AI interactions and user data management"
      ],
      technologies: ["Go", "MongoDB", "Gemini API", "AI/ML"]
    },
    {
      title: "Instructor - Full-Stack Web Development",
      subtitle: "GDG AAU",
      location: "Addis Ababa, Ethiopia",
      period: "11/2024 – 02/2025",
      type: "Volunteer",
      achievements: [
        "Led technical mentorship sessions on web development fundamentals including HTML, CSS, and introductory JavaScript",
        "Provided hands-on guidance and debugging support to 30+ students, building confidence and understanding core concepts",
        "Created supportive learning environment, answered questions in real-time, and helped students overcome technical challenges"
      ],
      technologies: ["Mentorship", "Web Dev", "Teaching", "Support"]
    },
    {
      title: "DSA Instructor",
      subtitle: "GDG AAU",
      location: "Addis Ababa, Ethiopia",
      period: "10/2025 – Present",
      type: "Part-time",
      achievements: [
        "Mentor students in Data Structures & Algorithms, guiding through coding challenges and problem-solving strategies",
        "Effectively manage mentorship alongside academic and professional commitments",
        "Help students develop algorithmic thinking and competitive programming skills"
      ],
      technologies: ["DSA", "Algorithms", "Mentorship", "Problem Solving"]
    }
  ];

  // Only work experience section
  const sections = [
    { 
      title: "Work Experience", 
      items: workItems
    }
  ];

  // Build unified timeline
  let globalIdx = 0;
  const timelineEntries = [];
  sections.forEach((section, sIdx) => {
    timelineEntries.push({ type: 'header', section, sIdx });
    section.items.forEach(item => {
      timelineEntries.push({ type: 'item', data: item, globalIdx: globalIdx++ });
    });
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.08 + 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  return (
    <div ref={experienceRef} className="min-h-screen bg-black text-white relative overflow-hidden py-20" id="experience">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
          y: bgY
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
          style={{ y: titleY }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6">
            <span className="text-xs font-medium tracking-widest text-white/70">JOURNEY</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Work Experience
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto font-light">
            A curated timeline of professional growth and learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-orange-500/30"
            style={{ top: 0, bottom: 0, opacity: lineOpacity }}
          />

          <div className="relative space-y-6">
            {timelineEntries.map((entry, idx) => {
              if (entry.type === 'header') {
                const { section, sIdx } = entry;
                return (
                  <motion.div
                    key={`header-${sIdx}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative flex justify-center -mb-2"
                  >
                    <div className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
                      <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                    </div>
                    {/* Dot on line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-2 h-2 rounded-full bg-white border border-purple-400/50" />
                  </motion.div>
                );
              } else {
                const item = entry.data;
                const i = entry.globalIdx;
                const isEven = i % 2 === 0;

                return (
                  <motion.div
                    key={`item-${i}`}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`relative flex -mt-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Number circle with gentle floating animation */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        custom={i}
                        variants={numberVariants}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                        className={`relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-white/20`}
                      >
                        <span className="text-black font-semibold text-sm">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                      </motion.div>
                    </div>

                    {/* Card */}
                    <div className={`w-5/12 ${isEven ? 'pr-10' : 'pl-10'}`}>
                      <motion.div
                        custom={i}
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                        className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 shadow-xl"
                      >
                        {/* Header */}
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-xs font-medium text-white/70">
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-3">
                          <span className="bg-black/30 px-2 py-1 rounded-full">
                            {item.period}
                          </span>
                          <span className="bg-black/30 px-2 py-1 rounded-full">
                            {item.location}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.type.includes('Progress') ? 'bg-purple-500/10 text-purple-300' :
                            item.type === 'Completed' ? 'bg-pink-500/10 text-pink-300' :
                            'bg-orange-500/10 text-orange-300'
                          }`}>
                            {item.type}
                          </span>
                        </div>

                        {/* Achievements (full descriptions) */}
                        <div className="space-y-1 mb-3">
                          {item.achievements.map((ach, j) => (
                            <div key={j} className="flex items-start gap-2 text-xs text-zinc-300">
                              <span className="text-white/70 flex-shrink-0 mt-0.5">•</span>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, j) => (
                            <span key={j} className="px-2 py-0.5 text-xs bg-black/40 border border-white/10 rounded-full text-zinc-300">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Hover line */}
                        <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 rounded-b-xl" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;