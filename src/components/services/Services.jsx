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
      description: "Building responsive, performant web applications with modern frameworks and best practices.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      delay: 0,
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly"]
    },
    {
      id: 2,
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions with robust API design and architecture.",
      technologies: ["Node.js", "Python", "REST APIs", "GraphQL"],
      delay: 0.1,
      features: ["Microservices", "Database Design", "API Security"]
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications delivering native-like performance.",
      technologies: ["React Native", "iOS", "Android", "Expo"],
      delay: 0.2,
      features: ["Cross-Platform", "Native Performance", "App Store Deployment"]
    },
    {
      id: 4,
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud architecture, CI/CD pipelines, and containerization for scalable applications.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      delay: 0.3,
      features: ["Cloud Architecture", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      id: 5,
      icon: Database,
      title: "Database Design",
      description: "Database architecture, optimization, and management for SQL and NoSQL solutions.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
      delay: 0.4,
      features: ["Database Optimization", "Data Modeling", "Real-time Sync"]
    },
    {
      id: 6,
      icon: Cpu,
      title: "AI & ML Integration",
      description: "Integrating artificial intelligence and machine learning into applications.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "ML Ops"],
      delay: 0.5,
      features: ["AI Integration", "Model Deployment", "Data Processing"]
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Clean minimalist background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #444 1px, transparent 1px),
              linear-gradient(to bottom, #444 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
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
          {/* Header with clean design */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Engineering Services
            </h1>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              A comprehensive suite of engineering capabilities to bring your ideas to life.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
          >
            
          </motion.div>

          {/* Services Cards – Clean Tech Style */}
          <motion.div variants={containerVariants} className="mb-32">

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
                      {/* Main card */}
                      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                        {/* Top line */}
                        <div className="h-1 bg-white" />
                        
                        <div className="p-10">
                          {/* Header with icon and title */}
                          <div className="flex items-start gap-6 mb-8">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-xl bg-white p-0.5">
                                <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">{service.description}</p>

                          {/* Features as bullet points */}
                          <div className="mb-8">
                            <ul className="space-y-3">
                              {service.features.map((feature, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start gap-3 text-gray-300"
                                >
                                  <ChevronRight className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                                  <span className="text-lg font-light">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies as chips */}
                          <div>
                            <h4 className="text-sm font-light text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                              <Cpu className="w-4 h-4 text-white" />
                              <span className="text-white/70">Stack</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-sm font-light text-white border border-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover line at bottom */}
                        <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Clean Style */}
          <motion.div variants={itemVariants} className="flex justify-center mt-20">
            <motion.a
              href="#contact"
              className="group relative px-12 py-6 bg-white text-black font-semibold rounded-xl overflow-hidden shadow-lg backdrop-blur-sm hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3 text-lg tracking-wide">
                Start Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;