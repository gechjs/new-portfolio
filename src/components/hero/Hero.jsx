import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { 
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Users,
  Target,
  Zap,
  ChevronRight,
  BookOpen,
  Trophy,
  Download,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Layers
} from 'lucide-react';

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [hoveredId, setHoveredId] = useState(null);

  const workExperience = [
    {
      id: 1,
      icon: Briefcase,
      title: "Web Developer Intern",
      company: "Evangadi Devshop",
      location: "Addis Ababa, Ethiopia",
      period: "04/2025 – 08/2025",
      type: "Internship",
      featured: true,
      achievements: [
        "Selected as Web Developer intern due to strong academic performance",
        "Contributed to Evangadi Tutoring Platform from initiation to production",
        "Implemented responsive UI components and collaborated with backend developers",
        "Worked within Agile team, performed peer reviews"
      ],
      technologies: ["React", "Frontend", "Agile", "UI/UX"]
    },
    {
      id: 2,
      icon: Code,
      title: "AI / Backend Engineer",
      company: "A2SV",
      location: "Addis Ababa, Ethiopia", 
      period: "06/2025 – 08/2025",
      type: "Contract",
      project: "Jobgen – AI-Powered Career Assistant",
      achievements: [
        "Built AI-powered platform helping African professionals optimize CVs",
        "Designed backend for AI chatbot in Go with real-time suggestions",
        "Built scalable architecture supporting real-time AI interactions"
      ],
      technologies: ["Go", "MongoDB", "Gemini API", "AI/ML"]
    },
    {
      id: 3,
      icon: Users,
      title: "Mentor - Full-Stack Web Development",
      company: "GDG AAU",
      location: "Addis Ababa, Ethiopia",
      period: "11/2024 – 02/2025",
      type: "Volunteer",
      achievements: [
        "Led technical mentorship sessions on web development fundamentals",
        "Provided hands-on guidance to 30+ students",
        "Created supportive learning environment"
      ],
      technologies: ["Mentorship", "Web Dev", "Teaching", "Support"]
    },
    {
      id: 4,
      icon: Target,
      title: "DSA Mentor",
      company: "GDG AAU",
      location: "Addis Ababa, Ethiopia",
      period: "10/2025 – Present",
      type: "Part-time / Volunteer",
      current: true,
      achievements: [
        "Mentor students in Data Structures & Algorithms",
        "Help students develop algorithmic thinking",
        "Guide through coding challenges"
      ],
      technologies: ["DSA", "Algorithms", "Mentorship", "Problem Solving"]
    }
  ];

  const education = [
    {
      icon: GraduationCap,
      degree: "BSc in Computer Science",
      institution: "Addis Ababa University",
      location: "Addis Ababa, Ethiopia",
      period: "02/2023 – 2027",
      status: "In Progress",
      courses: 6,
      achievements: ["Dean's List", "Strong academic performance"]
    },
    {
      icon: Code,
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Evangadi",
      location: "Addis Ababa, Ethiopia",
      period: "04/2024 – 10/2024",
      status: "Completed",
      courses: 5,
      achievements: ["Practical training", "Real-world projects"]
    },
    {
      icon: Trophy,
      degree: "Competitive Programming Training",
      institution: "A2SV (backed by Google)",
      location: "Addis Ababa, Ethiopia",
      period: "01/2025 – Present",
      status: "In Progress",
      courses: 4,
      achievements: ["Solved 1000+ problems", "1508 ELO rating"]
    },
    {
      icon: BookOpen,
      degree: "AI Fundamentals",
      institution: "Udacity",
      location: "Online",
      period: "11/2024 – 12/2024",
      status: "Completed",
      courses: 4,
      achievements: ["Industry-recognized certification"]
    },
    {
      icon: Zap,
      degree: "GeezX AI Bootcamp",
      institution: "GeezX",
      location: "Addis Ababa, Ethiopia",
      period: "Completed",
      status: "Completed",
      courses: 5,
      achievements: ["Intensive AI training", "Hands-on projects"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // For hover effects on work cards
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20" id="experience">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid with perspective */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8b5cf6 1px, transparent 1px),
              linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(10deg) scale(2)',
            transformOrigin: 'center top'
          }}
        />
        
        {/* Floating code snippets */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-purple-500/20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -100,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: window.innerHeight + 100,
              rotate: Math.random() * 720
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {`<${['div','span','h1','p','section','article','code'][i%7]}>`}
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-600/30 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div 
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header with glitch effect */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-lg border border-white/10 rounded-full mb-8 relative overflow-hidden group">
              <Terminal className="w-5 h-5 text-purple-400 relative z-10" />
              <span className="text-sm font-semibold text-white tracking-wider relative z-10">
                $ cat /dev/journey
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Experience
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent blur-xl opacity-50">
                  Experience
                </span>
              </span>
              <br />
              <span className="text-4xl md:text-6xl font-bold text-white/80">
                & Education
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A log of my professional timeline – each line a story of growth.
            </p>
          </motion.div>

          {/* Work Experience – Circuit Board Cards */}
          <motion.div variants={itemVariants} className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Work Log</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workExperience.map((exp) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    onHoverStart={() => setHoveredId(exp.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    className="group relative"
                    style={{
                      perspective: 1000,
                    }}
                  >
                    {/* 3D Tilt Effect */}
                    <motion.div
                      style={{
                        rotateX: hoveredId === exp.id ? rotateX : 0,
                        rotateY: hoveredId === exp.id ? rotateY : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Circuit lines background */}
                      <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%" className="absolute">
                          <path
                            d="M0,50 Q100,30 200,70 T400,40"
                            stroke="url(#grad1)"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="5,5"
                          />
                          <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#a855f7" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Main card */}
                      <div className="relative bg-black/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden">
                        {/* Top bar with status LED */}
                        <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-600" />
                        
                        <div className="p-8">
                          {/* Header with icon and title */}
                          <div className="flex items-start gap-4 mb-6">
                            <div className="relative">
                              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-0.5">
                                <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                                  <Icon className="w-7 h-7 text-white" />
                                </div>
                              </div>
                              {exp.current && (
                                <div className="absolute -top-1 -right-1 w-3 h-3">
                                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
                                  <div className="relative w-3 h-3 bg-green-500 rounded-full" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                  <p className="text-purple-400 font-medium">{exp.company}</p>
                                </div>
                                <div className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                                  {exp.type}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Meta info as tags */}
                          <div className="flex flex-wrap gap-3 mb-6 text-sm">
                            <div className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full">
                              <Calendar className="w-3 h-3 text-purple-400" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full">
                              <MapPin className="w-3 h-3 text-purple-400" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <Terminal className="w-4 h-4 text-purple-400" />
                              <span>$ cat achievements.log</span>
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-2 text-gray-300"
                                >
                                  <span className="text-purple-400 font-mono">→</span>
                                  <span className="text-sm">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech stack as chips */}
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <Cpu className="w-4 h-4 text-purple-400" />
                              <span>stack:</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full text-xs font-mono text-white border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Education – Holographic Cards */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Education & Certs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    className="group relative"
                  >
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10 p-6 h-full flex flex-col overflow-hidden">
                      {/* Animated gradient border */}
                      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-black rounded-3xl" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-0.5">
                            <div className="w-full h-full bg-black rounded-[8px] flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                            <p className="text-purple-400 text-sm font-medium">{edu.institution}</p>
                          </div>
                          <div className={`px-2 py-1 text-xs rounded-full ${
                            edu.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {edu.status}
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-gray-300 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-purple-400" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-3 h-3 text-purple-400" />
                            <span>{edu.courses} courses</span>
                          </div>
                        </div>

                        <div className="border-t border-white/10 pt-4">
                          <div className="flex flex-wrap gap-1">
                            {edu.achievements.map((ach, i) => (
                              <span key={i} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300">
                                {ach}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Terminal Style */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.a
              href="#"
              className="group relative px-10 py-5 bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3 text-xl font-mono">
                <span className="text-purple-400">$</span>
                <span className="text-white">wget resume.pdf</span>
                <Download className="w-5 h-5 text-purple-400 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
