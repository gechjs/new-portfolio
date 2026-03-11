'use client';

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const ref = useRef(null);

  const services = [
    {
      number: "01",
      title: "Responsive Design",
      description: "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      number: "02", 
      title: "CMS Development",
      description: "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      number: "03",
      title: "Website Redesign",
      description: "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      number: "04",
      title: "AI Integration",
      description: "Integrating artificial intelligence and machine learning into applications for enhanced functionality and user experience.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      number: "05",
      title: "Database Design",
      description: "Database architecture, optimization, and management for SQL and NoSQL solutions to ensure data integrity and performance.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      number: "06",
      title: "App Development",
      description: "Creating native and cross-platform mobile applications for iOS and Android, delivering seamless user experiences with modern frameworks.",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  // Apple‑like easing curve
  const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/5 via-black to-purple-900/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ...transition }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mb-5 bg-gradient-to-br from-white via-zinc-100 to-pink-300 bg-clip-text text-transparent">
            My Quality Services
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            I put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="max-w-5xl mx-auto space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ...transition }}
              whileHover={{
                x: 15,
                scale: 1.02,
                backgroundColor: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.15)',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
              className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 md:p-10 flex items-center gap-8 backdrop-blur-sm transition-all duration-700 hover:backdrop-blur-md overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-8 transition-all duration-700`} />
              
              {/* Number indicator */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="text-5xl md:text-6xl font-light text-zinc-700 group-hover:text-zinc-600 transition-all duration-500"
                >
                  {service.number}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium text-white tracking-[-0.02em] mb-3 group-hover:text-white transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-all duration-500">
                  {service.description}
                </p>
              </div>

              {/* Animated arrow */}
              <motion.div
                whileHover={{ x: 12, y: -12 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="relative z-10"
              >
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              {/* Subtle border animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/12 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Subtle accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.2 }}
          transition={{ duration: 1, delay: 1.2, ...transition }}
          className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-20 md:mt-24"
        />
      </div>
    </section>
  );
};

export default Services;