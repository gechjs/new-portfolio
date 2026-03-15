import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const Experience = () => {
  const sectionRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth the progress for the moving dot
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map scroll progress to dot position (0% to 100% of the timeline height)
  const dotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Update active dot index whenever the moving dot's position changes
  useMotionValueEvent(dotTop, "change", (latest) => {
    // latest is a string like "45.3%"
    const percent = parseFloat(latest);
    const total = workItems.length;
    // Precompute dot positions as percentages
    const dotPositions = workItems.map((_, i) => (i / (total - 1)) * 100);

    let closest = 0;
    let minDiff = Math.abs(dotPositions[0] - percent);
    for (let i = 1; i < dotPositions.length; i++) {
      const diff = Math.abs(dotPositions[i] - percent);
      if (diff < minDiff) {
        minDiff = diff;
        closest = i;
      }
    }
    setActiveDotIndex(closest);
  });

  // Work experience data (unchanged)
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
        "Deliver reliable and user-focused software solutions that meet client needs and exceed expectations",
      ],
      technologies: ["Full-Stack", "API Design", "Database", "Frontend", "Backend"],
    },
    {
      title: "Software Engineer",
      subtitle: "GumiApps",
      location: "Addis Ababa, Ethiopia",
      period: "06/2025 – 01/2026",
      type: "Full-time",
      achievements: [
        "Contributed to development of a SaaS platform designed for pharmacy business management",
        "Developed secure user registration and authentication systems to ensure safe platform access",
        "Built a business management module with role-based permission and access control",
        "Implemented a Customer Relationship Management (CRM) system including a gift card management feature",
        "Designed and optimized inventory filtering and search functionality using PostgreSQL full-text search",
        "Collaborated in backend system deployment and automation workflows",
      ],
      technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "cPanel", "GitHub Actions"],
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
        "Integrated third-party services, implemented authentication systems, and optimized application performance for better user experience",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
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
        "Worked within Agile team, participated in sprint discussions, performed peer reviews, and delivered production-ready frontend features",
      ],
      technologies: ["React", "Frontend", "Agile", "UI/UX"],
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
        "Built scalable architecture supporting real-time AI interactions and user data management",
      ],
      technologies: ["Go", "MongoDB", "Gemini API", "AI/ML"],
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
        "Created supportive learning environment, answered questions in real-time, and helped students overcome technical challenges",
      ],
      technologies: ["Mentorship", "Web Dev", "Teaching", "Support"],
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
        "Help students develop algorithmic thinking and competitive programming skills",
      ],
      technologies: ["DSA", "Algorithms", "Mentorship", "Problem Solving"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4 bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            A journey through engineering roles, building products that matter.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto">
          {/* The central line (hidden on mobile, shown on md and up) */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Static dots – one per experience (desktop only) */}
          <div className="absolute left-8 top-0 bottom-0 hidden md:block md:left-1/2 md:-translate-x-1/2">
            {workItems.map((_, index) => {
              const topPercent = (index / (workItems.length - 1)) * 100;
              const isActive = index === activeDotIndex;
              return (
                <div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ top: `${topPercent}%` }}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-white scale-150 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                        : "bg-white/40"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Moving glowing dot – follows scroll (desktop only) */}
          <motion.div
            className="absolute left-8 top-0 w-3 h-3 hidden md:block md:left-1/2 md:-translate-x-1/2 z-20"
            style={{ top: dotTop }}
          >
            <div className="relative -mt-1.5 -ml-1.5 md:-mt-1.5 md:-ml-1.5">
              <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
              <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping opacity-40" />
            </div>
          </motion.div>

          {/* Experience cards */}
          <div className="space-y-12 md:space-y-24">
            {workItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot on mobile (visible only on small screens) */}
                  <div className="absolute left-8 top-8 w-3 h-3 md:hidden">
                    <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 pl-16 md:pl-0 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-500"
                    >
                      {/* Period & location tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full">
                          {item.period}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-zinc-700/50 rounded-full">
                          {item.location}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-base text-zinc-400 mb-4 font-light">
                        {item.subtitle}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                            <span className="text-white block mt-1 select-none">•</span>
                            <span className="leading-relaxed font-light">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Animated bottom accent */}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;