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

  // Original work items with Apple-style design
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
      technologies: ["Full-Stack", "API Design", "Database", "Frontend", "Backend"],
      gradient: "from-purple-500 to-pink-600"
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
        "Collaborated in backend system deployment and automation workflows"
      ],
      technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "cPanel", "GitHub Actions"],
      gradient: "from-blue-500 to-cyan-600"
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
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
      gradient: "from-emerald-500 to-teal-600"
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
      technologies: ["React", "Frontend", "Agile", "UI/UX"],
      gradient: "from-orange-500 to-red-600"
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
      technologies: ["Go", "MongoDB", "Gemini API", "AI/ML"],
      gradient: "from-violet-500 to-purple-600"
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
      technologies: ["Mentorship", "Web Dev", "Teaching", "Support"],
      gradient: "from-rose-500 to-pink-600"
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
      technologies: ["DSA", "Algorithms", "Mentorship", "Problem Solving"],
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section ref={experienceRef} className="min-h-screen bg-black text-white relative overflow-hidden py-24" id="experience">
      {/* Elegant background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 35%, rgba(168, 85, 247, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)`,
          y: bgY
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Elegant header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
          style={{ y: titleY }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] mb-6 bg-gradient-to-br from-white via-zinc-100 to-pink-200 bg-clip-text text-transparent">
            My Experience
          </h2>
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8 max-w-2xl mx-auto">
            My journey through professional development, building innovative solutions and gaining expertise across multiple technologies and industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Elegant central line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            style={{ top: 0, bottom: 0 }}
          />

          {/* Moving dots and line animation */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2"
            style={{ top: 0, bottom: 0 }}
          >
            {/* Moving line that follows scroll progress */}
            <motion.div
              className="absolute w-0.5 bg-gradient-to-b from-transparent via-white to-transparent"
              style={{
                top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                left: '50%',
                transform: 'translateX(-50%)',
                height: '15%',
                opacity: 0.9
              }}
            />

            {/* Moving dots that travel along the line - white only */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                }}
                animate={{
                  top: useTransform(smoothProgress, [0, 1], [`${i * 20}%`, `${(i + 1) * 20}%`])
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {workItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-8 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    className="relative"
                  >
                    <div className="w-5 h-5 rounded-full bg-white shadow-lg shadow-white/25 border-2 border-black" />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-50 animate-pulse`} />
                  </motion.div>
                </div>

                {/* Content card */}
                <div className="w-full md:w-5/12 ml-20 md:ml-0">
                  <motion.div
                    whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
                    className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 md:p-10 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden"
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    
                    {/* Period and location */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`inline-flex px-3 py-1 text-xs font-medium tracking-wider text-white bg-transparent border border-zinc-700/50 rounded-full`}>
                        {item.period}
                      </span>
                      <span className="inline-flex px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-zinc-700/50 rounded-full">
                        {item.location}
                      </span>
                      <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                        item.type === 'Freelance' ? 'bg-purple-500/10 text-purple-300' :
                        item.type === 'Full-time' ? 'bg-blue-500/10 text-blue-300' :
                        item.type === 'Internship' ? 'bg-emerald-500/10 text-emerald-300' :
                        item.type === 'Part-time' ? 'bg-orange-500/10 text-orange-300' :
                        'bg-rose-500/10 text-rose-300'
                      }`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl mb-2 font-semibold text-white group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-base md:text-lg font-medium text-zinc-300 mb-6 group-hover:text-zinc-200 transition-colors duration-300">
                      {item.subtitle}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {item.achievements.map((achievement, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
                          <span className="text-white flex-shrink-0 mt-0.5">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.technologies.map((tech, j) => (
                        <span key={j} className="px-2 py-1 text-xs bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300 group-hover:text-zinc-200 group-hover:border-zinc-600/50 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Type indicator */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>

                    {/* Elegant bottom border */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;