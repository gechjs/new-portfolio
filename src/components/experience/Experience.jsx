import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Users,
  Target,
  Zap,
  ChevronRight,
  Trophy,
  BookOpen,
  Workflow,
  Sparkles
} from 'lucide-react';

const Experience = () => {
  // Separate data for work and education
  const workItems = [
    {
      icon: Briefcase,
      title: "Web Developer Intern",
      subtitle: "Evangadi Devshop",
      location: "Addis Ababa, Ethiopia",
      period: "04/2025 – 08/2025",
      type: "Internship",
      color: "from-blue-500 to-indigo-600",
      iconColor: "text-blue-400",
      achievements: [
        "Selected as Web Developer intern due to strong academic performance and consistent support in helping fellow students understand full-stack concepts",
        "Contributed to Evangadi Tutoring Platform (tutoring.evangadi.com) from initiation to production, focusing on frontend development",
        "Implemented responsive UI components, improved user experience, and collaborated with backend developers for seamless integration",
        "Worked within Agile team, participated in sprint discussions, performed peer reviews, and delivered production-ready frontend features"
      ],
      technologies: ["React", "Frontend", "Agile", "UI/UX"]
    },
    {
      icon: Code,
      title: "AI / Backend Engineer",
      subtitle: "A2SV",
      location: "Addis Ababa, Ethiopia",
      period: "06/2025 – 08/2025",
      type: "Contract",
      color: "from-cyan-500 to-blue-600",
      iconColor: "text-cyan-400",
      achievements: [
        "Collaborated with team to build AI-powered platform helping African professionals optimize CVs and find remote tech jobs",
        "Designed and implemented backend for AI chatbot in Go, enabling real-time personalized resume improvement suggestions",
        "Built scalable architecture supporting real-time AI interactions and user data management"
      ],
      technologies: ["Go", "MongoDB", "Gemini API", "AI/ML"]
    },
    {
      icon: Users,
      title: "Mentor - Full-Stack Web Development",
      subtitle: "GDG AAU",
      location: "Addis Ababa, Ethiopia",
      period: "11/2024 – 02/2025",
      type: "Volunteer",
      color: "from-emerald-500 to-teal-600",
      iconColor: "text-emerald-400",
      achievements: [
        "Led technical mentorship sessions on web development fundamentals including HTML, CSS, and introductory JavaScript",
        "Provided hands-on guidance and debugging support to 30+ students, building confidence and understanding core concepts",
        "Created supportive learning environment, answered questions in real-time, and helped students overcome technical challenges"
      ],
      technologies: ["Mentorship", "Web Dev", "Teaching", "Support"]
    },
    {
      icon: Target,
      title: "DSA Mentor",
      subtitle: "GDG AAU",
      location: "Addis Ababa, Ethiopia",
      period: "10/2025 – Present",
      type: "Part-time / Volunteer",
      color: "from-orange-500 to-red-600",
      iconColor: "text-orange-400",
      achievements: [
        "Mentor students in Data Structures & Algorithms, guiding through coding challenges and problem-solving strategies",
        "Effectively manage mentorship alongside academic and professional commitments",
        "Help students develop algorithmic thinking and competitive programming skills"
      ],
      technologies: ["DSA", "Algorithms", "Mentorship", "Problem Solving"]
    }
  ];

  const educationItems = [
    {
      icon: GraduationCap,
      title: "BSc in Computer Science",
      subtitle: "Addis Ababa University",
      location: "Addis Ababa, Ethiopia",
      period: "02/2023 – 2027",
      type: "In Progress",
      color: "from-purple-500 to-pink-600",
      iconColor: "text-purple-400",
      achievements: [
        "Strong academic performance, consistent Dean's List",
        "Relevant coursework: Computer Organization, OOP, Software Engineering, Advanced DB, Computer Networking, DSA"
      ],
      technologies: [
        "Computer Organization",
        "OOP",
        "Software Engineering",
        "Advanced DB",
        "Computer Networking",
        "DSA"
      ]
    },
    {
      icon: Code,
      title: "Full-Stack Web Development Bootcamp",
      subtitle: "Evangadi",
      location: "Addis Ababa, Ethiopia",
      period: "04/2024 – 10/2024",
      type: "Completed",
      color: "from-cyan-500 to-blue-600",
      iconColor: "text-cyan-400",
      achievements: [
        "Practical training with real-world projects, building multiple full-stack applications",
        "Gained proficiency in version control, deployment, and software development lifecycle"
      ],
      technologies: [
        "Full-stack",
        "Version Control",
        "Deployment",
        "DSA",
        "Software Dev"
      ]
    },
    {
      icon: Trophy,
      title: "Competitive Programming Training",
      subtitle: "Africa to Silicon Valley A2SV (backed by Google)",
      location: "Addis Ababa, Ethiopia",
      period: "01/2025 – Present",
      type: "In Progress",
      color: "from-emerald-500 to-teal-600",
      iconColor: "text-emerald-400",
      achievements: [
        "Completed year-long competitive programming training",
        "Solved 1000+ problems on LeetCode and Codeforces combined",
        "Achieved ELO contest rating of 1508 on LeetCode"
      ],
      technologies: [
        "Competitive Programming",
        "Algorithm Design",
        "Problem Solving",
        "Code Optimization"
      ]
    },
    {
      icon: BookOpen,
      title: "AI Fundamentals",
      subtitle: "Udacity",
      location: "Online",
      period: "11/2024 – 12/2024",
      type: "Completed",
      color: "from-orange-500 to-red-600",
      iconColor: "text-orange-400",
      achievements: [
        "Industry-recognized certification covering AI concepts, Machine Learning, Neural Networks, and AI Ethics"
      ],
      technologies: [
        "AI concepts",
        "Machine Learning",
        "Neural Networks",
        "AI Ethics"
      ]
    },
    {
      icon: Zap,
      title: "GeezX AI Bootcamp",
      subtitle: "GeezX",
      location: "Addis Ababa, Ethiopia",
      period: "Completed",
      type: "Completed",
      color: "from-rose-500 to-pink-600",
      iconColor: "text-rose-400",
      achievements: [
        "Intensive AI training with hands-on projects and real-world applications",
        "Explored AI foundations, tools, applied AI, ethics, and digital literacy"
      ],
      technologies: [
        "AI foundations",
        "AI tools",
        "Applied AI",
        "AI ethics",
        "Digital literacy"
      ]
    }
  ];

  // Combine items with section labels for unified timeline
  const timelineSections = [
    { title: "Work Experience", icon: Briefcase, items: workItems, gradient: "from-blue-500 to-indigo-600" },
    { title: "Education", icon: GraduationCap, items: educationItems, gradient: "from-purple-500 to-pink-600" }
  ];

  // Flatten items with global index for alternating layout
  let globalIndex = 0;
  const allItems = [];
  timelineSections.forEach((section, sIdx) => {
    // Add section header as a special entry
    allItems.push({ type: 'section-header', section, sIdx });
    section.items.forEach(item => {
      allItems.push({ type: 'item', data: item, section: section.title, globalIndex: globalIndex++ });
    });
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20" id="experience">
      {/* Refined background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8">
            <Workflow className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium tracking-widest text-white/80">PROFESSIONAL TIMELINE</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            A chronological story of work and learning, each step building towards mastery.
          </motion.p>
        </motion.div>

        {/* Unified Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line (animated) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-full"
            style={{ top: 0, bottom: 0 }}
          />

          <div className="relative space-y-16">
            {allItems.map((entry, idx) => {
              if (entry.type === 'section-header') {
                const { section, sIdx } = entry;
                return (
                  <motion.div
                    key={`header-${sIdx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Section header with icon and title */}
                    <div className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient}`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                    </div>
                    {/* Small connector dot on the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-3 h-3 rounded-full bg-white border-2 border-purple-500 shadow-lg" />
                  </motion.div>
                );
              } else {
                const item = entry.data;
                const globalIdx = entry.globalIndex;
                const isEven = globalIdx % 2 === 0;
                return (
                  <motion.div
                    key={`item-${globalIdx}`}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: globalIdx * 0.15,
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }}
                    className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Number circle on the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: globalIdx * 0.15 + 0.3
                        }}
                        className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl border-2 border-white/20`}
                      >
                        <motion.span 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: globalIdx * 0.15 + 0.5 }}
                          className="text-white font-bold text-base"
                        >
                          {(globalIdx + 1).toString().padStart(2, '0')}
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 rounded-full border border-white/40"
                          animate={{ 
                            scale: [1, 1.5, 1], 
                            opacity: [0.8, 0, 0.8],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: globalIdx * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Card - positioned left or right */}
                    <div className={`w-5/12 ${isEven ? 'pr-12' : 'pl-12'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? -45 : 45 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ 
                          duration: 0.8,
                          delay: globalIdx * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 80,
                          damping: 15
                        }}
                        whileHover={{ 
                          y: -12, 
                          scale: 1.02,
                          rotateX: 5,
                          transition: { duration: 0.3 }
                        }}
                        className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden"
                      >
                        {/* Animated background gradient */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${item.color.replace('from-', '').replace('to-', '').split(' ')[0]}20, transparent)`
                          }}
                          animate={{
                            background: [
                              `linear-gradient(135deg, ${item.color.replace('from-', '').replace('to-', '').split(' ')[0]}20, transparent)`,
                              `linear-gradient(225deg, ${item.color.replace('to-', '').replace('from-', '').split(' ')[1]}20, transparent)`,
                              `linear-gradient(135deg, ${item.color.replace('from-', '').replace('to-', '').split(' ')[0]}20, transparent)`
                            ]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        {/* Header with icon and title */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-30`}>
                            <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                          <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
                            <Calendar className="w-3 h-3" /> {item.period}
                          </span>
                          <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
                            <MapPin className="w-3 h-3" /> {item.location}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.type.includes('Progress') ? 'bg-blue-500/10 text-blue-400' :
                            item.type === 'Completed' ? 'bg-green-500/10 text-green-400' :
                            'bg-purple-500/10 text-purple-400'
                          }`}>
                            {item.type}
                          </span>
                        </div>

                        {/* Achievements (truncated) */}
                        <div className="space-y-1 mb-4">
                          {item.achievements.slice(0, 2).map((ach, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                              <ChevronRight className="w-3 h-3 text-purple-400 flex-shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                          {item.achievements.length > 2 && (
                            <p className="text-xs text-gray-500 ml-5">+{item.achievements.length - 2} more</p>
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs font-medium bg-black/40 border border-white/10 rounded-full text-gray-300">
                              {tech}
                            </span>
                          ))}
                          {item.technologies.length > 3 && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-black/40 border border-white/10 rounded-full text-gray-300">
                              +{item.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Subtle hover line */}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl`} />
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