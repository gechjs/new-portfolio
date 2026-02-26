'use client'

import { motion } from 'framer-motion'

const ProjectShowcase = () => {
  const sentence = "Full Stack Development • Scalable • Secure • Performant"

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Optional hint label */}
      <motion.div 
        className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        <span className="text-white/80 text-xs font-light tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" />
          FULL STACK EXPERTISE
        </span>
      </motion.div>

      {/* Gradient overlays to blend edges with hero text - minimal brightness */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/20 z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

      {/* Single moving text line - very subtle background effect */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-20">
        <motion.div
          className="text-8xl md:text-9xl lg:text-10xl font-serif text-white/15 whitespace-nowrap"
          animate={{
            x: ['-10%', '10%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
          }}
        >
          {sentence}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectShowcase