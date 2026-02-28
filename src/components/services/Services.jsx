'use client';

import { useRef } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const ref = useRef(null);

  const services = [
    {
      number: "01",
      title: "Responsive Design",
      description: "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly."
    },
    {
      number: "02", 
      title: "CMS Development",
      description: "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily."
    },
    {
      number: "03",
      title: "Website Redesign",
      description: "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations."
    },
    {
      number: "04",
      title: "AI Integration",
      description: "Integrating artificial intelligence and machine learning into applications for enhanced functionality and user experience."
    },
    {
      number: "05",
      title: "Database Design",
      description: "Database architecture, optimization, and management for SQL and NoSQL solutions to ensure data integrity and performance."
    },
    {
      number: "06",
      title: "App Development",
      description: "Creating native and cross-platform mobile applications for iOS and Android, delivering seamless user experiences with modern frameworks."
    }
  ];

  // Apple‑like easing curve
  const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
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
        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ...transition }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -2,
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)',
                }
              }}
              className="group relative bg-zinc-900/20 border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 backdrop-blur-sm transition-all duration-300"
            >
              {/* Left: number and title */}
              <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-[240px]">
                <motion.span 
                  variants={{
                    hover: { color: '#f472b6', scale: 1.05 }
                  }}
                  className="text-4xl md:text-5xl font-light text-zinc-600 transition-colors duration-200"
                >
                  {service.number}
                </motion.span>
                <h3 className="text-xl md:text-2xl font-medium text-white tracking-[-0.01em]">
                  {service.title}
                </h3>
              </div>

              {/* Right: description */}
              <div className="flex-1">
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Animated arrow */}
              <motion.span
                variants={{
                  hover: { x: 4, y: -4, color: '#f472b6' }
                }}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-2xl text-zinc-600 transition-colors"
                aria-hidden="true"
              >
                ↗
              </motion.span>

              {/* Hidden modal trigger button (kept for functionality) */}
              <button
                data-mfp-src="#service-wrapper"
                className="service-link modal-popup absolute inset-0 w-full h-full cursor-pointer z-10 rounded-3xl"
                aria-label={`View details for ${service.title}`}
              />
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