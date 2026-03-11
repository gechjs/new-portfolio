import { motion } from 'framer-motion'
import { Sparkles, Code, Zap } from 'lucide-react'

export function ProfessionalOpening({ onComplete }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-black to-cyan-900/10 animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 mx-auto relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl" />
              <div className="absolute inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            {/* Orbiting sparks */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2"
                initial={{ rotate: i * 120 }}
                animate={{ rotate: i * 120 + 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{
                  transformOrigin: '0 0',
                  marginLeft: '-4px',
                  marginTop: '-4px'
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-pink-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Name reveal */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
              GIZACHEW
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              MOHAMMED
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Full-Stack Developer & AI Engineer
          </p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-pink-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">Loading experience...</span>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          <Sparkles className="w-8 h-8 text-pink-400" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
        >
          <Zap className="w-8 h-8 text-purple-400" />
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "16rem" }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, delay: 1.2, ease: "easeOut", onComplete }}
          />
        </motion.div>
      </div>

      {/* Particle effects */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            opacity: 0
          }}
          animate={{ 
            y: -20,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  )
}
