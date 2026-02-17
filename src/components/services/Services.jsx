'use client';

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Smartphone,
  Zap,
  Users,
  Target,
  Rocket,
  Briefcase,
  Layers,
  Terminal,
  CheckCircle,
  ChevronRight,
  Cpu,
  Palette,
  Shield,
  BarChart,
  Sparkles,
  Globe,
  Download,
  CpuIcon
} from 'lucide-react';

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState(null);

  // For 3D tilt effect on cards
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, performant web applications with modern frameworks like React, Next.js, and Vue.js.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
      delay: 0,
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly"]
    },
    {
      id: 2,
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions using Node.js, Python, and cloud services with robust API design.",
      technologies: ["Node.js", "Python", "REST APIs", "GraphQL"],
      color: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400",
      delay: 0.1,
      features: ["Microservices", "Database Design", "API Security"]
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with React Native, delivering native-like performance.",
      technologies: ["React Native", "iOS", "Android", "Expo"],
      color: "from-emerald-500 to-green-500",
      iconColor: "text-emerald-400",
      delay: 0.2,
      features: ["Cross-Platform", "Native Performance", "App Store Deployment"]
    },
    {
      id: 4,
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud architecture, CI/CD pipelines, and containerization for scalable applications.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-400",
      delay: 0.3,
      features: ["Cloud Architecture", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      id: 5,
      icon: Database,
      title: "Database Design",
      description: "Database architecture, optimization, and management for SQL and NoSQL solutions.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
      color: "from-violet-500 to-purple-500",
      iconColor: "text-violet-400",
      delay: 0.4,
      features: ["Database Optimization", "Data Modeling", "Real-time Sync"]
    },
    {
      id: 6,
      icon: Cpu,
      title: "AI & ML Integration",
      description: "Integrating artificial intelligence and machine learning into web and mobile applications.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "ML Ops"],
      color: "from-rose-500 to-pink-500",
      iconColor: "text-rose-400",
      delay: 0.5,
      features: ["AI Integration", "Model Deployment", "Data Processing"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects", icon: Rocket, color: "text-purple-400" },
    { number: "30+", label: "Clients", icon: Users, color: "text-cyan-400" },
    { number: "100%", label: "Satisfaction", icon: Target, color: "text-emerald-400" },
    { number: "4+", label: "Years", icon: Zap, color: "text-orange-400" },
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Discovery & Planning", 
      description: "Understanding requirements, defining scope, and creating detailed project roadmap.",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    { 
      step: "02", 
      title: "Design & Prototyping", 
      description: "Creating wireframes, mockups, and interactive prototypes for validation.",
      icon: Palette,
      color: "from-cyan-500 to-blue-500"
    },
    { 
      step: "03", 
      title: "Development", 
      description: "Agile development with clean code practices and regular iterations.",
      icon: Code,
      color: "from-emerald-500 to-green-500"
    },
    { 
      step: "04", 
      title: "Testing & QA", 
      description: "Comprehensive testing including unit, integration, and user acceptance testing.",
      icon: Shield,
      color: "from-orange-500 to-amber-500"
    },
    { 
      step: "05", 
      title: "Deployment", 
      description: "Smooth deployment with monitoring setup and performance optimization.",
      icon: Rocket,
      color: "from-rose-500 to-pink-500"
    },
    { 
      step: "06", 
      title: "Maintenance", 
      description: "Ongoing support, updates, and feature enhancements.",
      icon: BarChart,
      color: "from-violet-500 to-purple-500"
    },
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
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
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
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
                $ cat /services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Services
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent blur-xl opacity-50">
                  Services
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A comprehensive suite of engineering capabilities to bring your ideas to life.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="relative p-6 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{stat.number}</h3>
                      <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Cards – Circuit Board Style */}
          <motion.div variants={containerVariants} className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <CpuIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Engineering Capabilities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    onHoverStart={() => setHoveredId(service.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    className="group relative"
                    style={{ perspective: 1000 }}
                  >
                    <motion.div
                      style={{
                        rotateX: hoveredId === service.id ? rotateX : 0,
                        rotateY: hoveredId === service.id ? rotateY : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Circuit lines background */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none">
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
                              {/* LED indicator (always on for services) */}
                              <div className="absolute -top-1 -right-1 w-3 h-3">
                                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping" />
                                <div className="relative w-3 h-3 bg-purple-500 rounded-full" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 leading-relaxed text-sm">{service.description}</p>

                          {/* Features as bullet points */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <Terminal className="w-4 h-4 text-purple-400" />
                              <span>$ features.log</span>
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-2 text-gray-300"
                                >
                                  <span className="text-purple-400 font-mono">→</span>
                                  <span className="text-sm">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies as chips */}
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <Cpu className="w-4 h-4 text-purple-400" />
                              <span>stack:</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, i) => (
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

          {/* Development Process – Circuit Timeline */}
          <motion.div variants={containerVariants} className="mb-24">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Development Process</h2>
            </div>

            <div className="relative">
              {/* Circuit path line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-cyan-500/50 hidden md:block" />
              
              <div className="space-y-12 md:space-y-0 relative">
                {processSteps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'} mb-12 md:mb-0`}
                    >
                      {/* Step number with pulsing ring */}
                      <div className="relative z-10 mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        <div className="relative">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                            <span className="text-white font-bold text-xl">{step.step}</span>
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-white/30"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          />
                        </div>
                      </div>

                      {/* Content card */}
                      <div className={`md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                        <motion.div
                          className="relative group"
                          whileHover={{ y: -5 }}
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                          <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-20`}>
                                <step.icon className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-white">{step.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA Terminal Style */}
          <motion.div variants={itemVariants} className="flex justify-center mt-20">
            <motion.a
              href="#contact"
              className="group relative px-10 py-5 bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3 text-xl font-mono">
                <span className="text-purple-400">$</span>
                <span className="text-white">./start-project.sh</span>
                <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;