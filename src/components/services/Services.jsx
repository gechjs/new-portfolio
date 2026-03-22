'use client';

import { useRef } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const ref = useRef(null);

  const services = [
    {
      number: "01",
      title: "Full‑Stack Web Development",
      description:
        "End‑to‑end development of scalable web applications using modern frameworks (React, Next.js, Node.js) and clean architecture.",
      gradient: "from-pink-500 to-rose-600",
      glow: "rgba(236,72,153,0.3)", // pink glow
    },
    {
      number: "02",
      title: "Frontend Engineering",
      description:
        "Responsive, performant interfaces with a focus on user experience, accessibility, and pixel‑perfect implementation.",
      gradient: "from-purple-500 to-indigo-600",
      glow: "rgba(139,92,246,0.3)", // purple glow
    },
    {
      number: "03",
      title: "Backend & API Development",
      description:
        "Robust server‑side logic, RESTful/GraphQL APIs, authentication, and integration with third‑party services.",
      gradient: "from-blue-500 to-cyan-600",
      glow: "rgba(59,130,246,0.3)", // blue glow
    },
    {
      number: "04",
      title: "Database Design & Optimization",
      description:
        "Schema design, query optimization, and management for SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.",
      gradient: "from-emerald-500 to-teal-600",
      glow: "rgba(16,185,129,0.3)", // emerald glow
    },
    {
      number: "05",
      title: "DevOps & Cloud Deployment",
      description:
        "CI/CD pipelines, containerization (Docker), and cloud infrastructure (AWS, Vercel, Netlify) for seamless deployment.",
      gradient: "from-orange-500 to-red-600",
      glow: "rgba(249,115,22,0.3)", // orange glow
    },
    {
      number: "06",
      title: "Performance & SEO",
      description:
        "Optimizing load times, Core Web Vitals, and search engine visibility to deliver fast, discoverable web experiences.",
      gradient: "from-violet-500 to-purple-600",
      glow: "rgba(139,92,246,0.3)", // violet glow
    },
  ];

  // Apple‑like easing curve
  const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/5 via-black to-purple-900/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ...transition }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] mb-5 bg-gradient-to-br from-white via-zinc-100 to-pink-300 bg-clip-text text-transparent">
            Full‑Stack Development
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            I transform ideas into powerful, scalable web solutions—covering everything from frontend finesse to backend resilience.
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
                y: -5,
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.2)",
                boxShadow: `0 30px 50px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px -5px ${service.glow}`,
              }}
              className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 backdrop-blur-sm transition-all duration-700 hover:backdrop-blur-md overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-8 transition-all duration-700`}
              />

              {/* Number indicator */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-700 group-hover:text-zinc-600 transition-all duration-500"
                >
                  {service.number}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-[-0.02em] mb-3 group-hover:text-white transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-all duration-500">
                  {service.description}
                </p>
              </div>

              {/* Subtle border animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/12 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Accent line */}
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