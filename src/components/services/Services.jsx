'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Cpu, 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Shield, 
  Globe, 
  Smartphone,
  Zap,
  Users,
  Lock,
  Palette,
  BarChart,
  ChevronRight,
  Sparkles,
  CheckCircle,
  Target,
  Rocket,
  Briefcase,
  Layers,
  Terminal,
  CpuIcon
} from 'lucide-react';

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, performant web applications with modern frameworks like React, Next.js, and Vue.js.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/10",
      delay: 0,
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly"]
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions using Node.js, Python, and cloud services with robust API design.",
      technologies: ["Node.js", "Python", "REST APIs", "GraphQL"],
      color: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-400",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/10",
      delay: 0.1,
      features: ["Microservices", "Database Design", "API Security"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with React Native, delivering native-like performance.",
      technologies: ["React Native", "iOS", "Android", "Expo"],
      color: "from-emerald-500 to-green-500",
      iconColor: "text-emerald-400",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/10",
      delay: 0.2,
      features: ["Cross-Platform", "Native Performance", "App Store Deployment"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud architecture, CI/CD pipelines, and containerization for scalable applications.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-400",
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/10",
      delay: 0.3,
      features: ["Cloud Architecture", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Database architecture, optimization, and management for SQL and NoSQL solutions.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
      color: "from-violet-500 to-purple-500",
      iconColor: "text-violet-400",
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/10",
      delay: 0.4,
      features: ["Database Optimization", "Data Modeling", "Real-time Sync"]
    },
    {
      icon: CpuIcon,
      title: "AI & ML Integration",
      description: "Integrating artificial intelligence and machine learning into web and mobile applications.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "ML Ops"],
      color: "from-rose-500 to-pink-500",
      iconColor: "text-rose-400",
      gradient: "bg-gradient-to-br from-rose-500/20 to-pink-500/10",
      delay: 0.5,
      features: ["AI Integration", "Model Deployment", "Data Processing"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Rocket, color: "text-purple-400", bgColor: "from-purple-500/20 to-purple-500/5" },
    { number: "30+", label: "Happy Clients", icon: Users, color: "text-cyan-400", bgColor: "from-cyan-500/20 to-cyan-500/5" },
    { number: "100%", label: "Client Satisfaction", icon: Target, color: "text-emerald-400", bgColor: "from-emerald-500/20 to-emerald-500/5" },
    { number: "4+", label: "Years Experience", icon: Zap, color: "text-orange-400", bgColor: "from-orange-500/20 to-orange-500/5" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Subtle Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 0, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        />

        {/* Floating Code Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-sm text-white/10"
            initial={{ y: -100, x: Math.random() * 100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 12}px`,
            }}
          >
            {['<div>', 'function()', 'const', '=>', 'return', 'useState', 'useEffect', 'export', 'import', 'async'][i % 10]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className="max-w-6xl mx-auto"
          >
            {/* Badge - Fixed Visibility */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-lg border border-white/20 rounded-full mb-8 group hover:border-purple-500 transition-all duration-300"
            >
              <div className="relative">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <motion.div
                  className="absolute -inset-1 bg-purple-500/30 rounded-full blur-sm"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-sm font-semibold text-white">
                Expertise & Services
              </span>
            </motion.div>

            {/* Title - Fixed Visibility */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Professional{" "} Tech Services
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {/* Tech Services */}
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-cyan-400/50"
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                I deliver cutting-edge digital solutions that drive business growth and innovation. 
                From concept to deployment, every project is crafted with precision and excellence.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative p-6 bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <div className="relative flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.bgColor} border border-white/10`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {stat.number}
                        </h3>
                        <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative">
        {/* Section Header */}
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                What I{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Specialize In
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to drive your business forward
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Cards */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="group relative"
              >
                {/* Card Background with Gradient */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
                
                <div className="relative h-full bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`p-4 rounded-2xl inline-block ${service.gradient} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="relative">
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                        <motion.div
                          className="absolute -inset-2 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-sm"
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-200">
                      <Terminal className="w-4 h-4 text-yellow-400" />
                      <span>Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-medium bg-black/60 border border-white/10 rounded-full text-gray-200 group-hover:border-white/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-black/60 rounded-xl border border-white/10 text-white font-medium group/btn hover:border-white/20 hover:bg-black/80 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-3/4 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              className="text-center mb-16"
            >
              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Development{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Process
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  A structured approach ensuring quality and efficiency
                </p>
              </motion.div>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/30 via-cyan-500/30 to-transparent" />
              
              <div className="space-y-20 lg:space-y-0">
                {[
                  { 
                    step: "01", 
                    title: "Discovery & Planning", 
                    description: "Understanding requirements, defining scope, and creating detailed project roadmap.",
                    icon: Target,
                    color: "from-purple-500 to-pink-500",
                    iconColor: "text-purple-400"
                  },
                  { 
                    step: "02", 
                    title: "Design & Prototyping", 
                    description: "Creating wireframes, mockups, and interactive prototypes for validation.",
                    icon: Palette,
                    color: "from-cyan-500 to-blue-500",
                    iconColor: "text-cyan-400"
                  },
                  { 
                    step: "03", 
                    title: "Development", 
                    description: "Agile development with clean code practices and regular iterations.",
                    icon: Code,
                    color: "from-emerald-500 to-green-500",
                    iconColor: "text-emerald-400"
                  },
                  { 
                    step: "04", 
                    title: "Testing & QA", 
                    description: "Comprehensive testing including unit, integration, and user acceptance testing.",
                    icon: Shield,
                    color: "from-orange-500 to-amber-500",
                    iconColor: "text-orange-400"
                  },
                  { 
                    step: "05", 
                    title: "Deployment", 
                    description: "Smooth deployment with monitoring setup and performance optimization.",
                    icon: Rocket,
                    color: "from-rose-500 to-pink-500",
                    iconColor: "text-rose-400"
                  },
                  { 
                    step: "06", 
                    title: "Maintenance", 
                    description: "Ongoing support, updates, and feature enhancements.",
                    icon: BarChart,
                    color: "from-violet-500 to-purple-500",
                    iconColor: "text-violet-400"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Step Number */}
                    <div className="relative z-10 mb-8 lg:mb-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-xl">{item.step}</span>
                        </div>
                        {/* Pulsing Ring */}
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
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20`}>
                            <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              variants={itemVariants}
              className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/40 backdrop-blur-lg"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative p-12 text-center">
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-lg border border-white/20 rounded-full mb-8"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Layers className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">
                    Ready to Collaborate
                  </span>
                </motion.div>
                
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Let's Build Something{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Amazing
                  </span>
                </h2>
                
                {/* Description */}
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Have a project in mind? Let's discuss how we can transform your ideas 
                  into reality with cutting-edge technology and exceptional craftsmanship.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start a Project
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      View Case Studies
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
