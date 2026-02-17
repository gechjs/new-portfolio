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
  Award,
  Star,
  Trophy,
  BookOpen
} from 'lucide-react';

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Combine work and education into a single timeline
  const timelineItems = [
    // Work Experience
    {
      icon: Briefcase,
      title: "Web Developer Intern",
      subtitle: "Evangadi Devshop",
      location: "Addis Ababa, Ethiopia",
      period: "04/2025 – 08/2025",
      type: "Internship",
      color: "from-purple-500 to-pink-600",
      iconColor: "text-purple-400",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-600/10",
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
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-600/10",
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
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-600/10",
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
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-600/10",
      achievements: [
        "Mentor students in Data Structures & Algorithms, guiding through coding challenges and problem-solving strategies",
        "Effectively manage mentorship alongside academic and professional commitments",
        "Help students develop algorithmic thinking and competitive programming skills"
      ],
      technologies: ["DSA", "Algorithms", "Mentorship", "Problem Solving"]
    },
    // Education
    {
      icon: GraduationCap,
      title: "BSc in Computer Science",
      subtitle: "Addis Ababa University",
      location: "Addis Ababa, Ethiopia",
      period: "02/2023 – 2027",
      type: "In Progress",
      color: "from-purple-500 to-pink-600",
      iconColor: "text-purple-400",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-600/10",
      achievements: [
        "Strong academic performance",
        "Consistent Dean's List"
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
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-600/10",
      achievements: [
        "Practical training",
        "Real-world projects"
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
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-600/10",
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
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-600/10",
      achievements: [
        "Industry-recognized certification"
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
      gradient: "bg-gradient-to-br from-rose-500/20 to-pink-600/10",
      achievements: [
        "Intensive AI training",
        "Hands-on AI projects",
        "Real-world applications"
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
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-600/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-lg border border-white/10 rounded-full group hover:border-purple-500/50 transition-all duration-300 mb-8">
            <Briefcase className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold text-white tracking-wider">
              EXPERIENCE & EDUCATION
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A chronological timeline of my work experience and educational background,
            highlighting key achievements and technologies I've worked with.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Vertical line (hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/30 via-cyan-500/30 to-transparent" />

            <div className="space-y-20 lg:space-y-0">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Step Number */}
                  <div className="relative z-10 mb-8 lg:mb-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-xl">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      className="group bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      {/* Header with icon and title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20`}>
                          <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === 'Completed' || item.type === 'In Progress'
                            ? item.type === 'Completed'
                              ? 'bg-green-500/10 text-green-400'
                              : 'bg-blue-500/10 text-blue-400'
                            : 'bg-purple-500/10 text-purple-400'
                        }`}>
                          {item.type}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2 mb-6">
                        {item.achievements.slice(0, 3).map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                        {item.achievements.length > 3 && (
                          <p className="text-xs text-gray-500">+{item.achievements.length - 3} more</p>
                        )}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-black/60 border border-white/10 rounded-full text-gray-200 group-hover:border-white/20 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 4 && (
                          <span className="px-3 py-1 text-xs font-medium bg-black/60 border border-white/10 rounded-full text-gray-200">
                            +{item.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;