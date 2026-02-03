'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SplineScene } from "@/components/ui/splite"
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Code, 
  Zap, 
  Brain, 
  Rocket, 
  Sparkles,
  Cpu,
  Terminal,
  Download,
  Circle
} from 'lucide-react'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    setCursorPosition({ x: clientX, y: clientY })
  }

  return (
    <div 
      className="min-h-screen bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px),
                            linear-gradient(to bottom, #444 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Subtle Gradient Orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-900/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-900/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Dynamic Cursor Light */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: `radial-gradient(800px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(100, 100, 255, 0.08), transparent 80%)`
        }}
        transition={{ type: "tween", duration: 0.4 }}
      />

      {/* Binary Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-white/30 tracking-widest"
            initial={{ y: -100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 10}px`,
            }}
          >
            {Math.random().toString(2).substring(2, 12)}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <motion.div 
            className="relative bg-black/90 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Carbon Fiber Texture Effect */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #222 2px, transparent 2px),
                                  radial-gradient(circle at 75% 75%, #222 2px, transparent 2px)`,
                backgroundSize: '100px 100px'
              }} />
            </div>

            {/* Glowing Edge */}
            <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl blur-lg" />
            
            <div className="relative flex flex-col lg:flex-row h-full min-h-[600px]">
              
              {/* Left Content - Personal Info */}
              <motion.div 
                className="flex-1 p-8 lg:p-12 relative  z-10 flex flex-col justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Geometric Accents */}
                <div className="absolute -top-8 -left-8 w-40 h-40 border-t border-l border-white/10" />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 border-b border-r border-white/10" />

                {/* Animated Name */}
                <motion.div className="mb-8 relative">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg blur opacity-0"
                    animate={{
                      opacity: [0, 0.2, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="relative">
                    <motion.h1 
                      className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      GIZACHEW
                    </motion.h1>
                    <motion.h2 
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        MOHAMMED
                      </span>
                    </motion.h2>
                  </div>
                </motion.div>

                {/* Tech Role Indicators */}
                <motion.div 
                  className="flex items-center gap-4 mb-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">Available for Work</span>
                  </motion.div>
                  
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 rounded-full bg-white/30"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Role Badges */}
                <motion.div 
                  className="flex flex-wrap gap-3 mb-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {[
                    { icon: Terminal, text: "Full-Stack Dev", color: "border-blue-500/20 hover:border-blue-500/40", iconColor: "text-blue-400" },
                    { icon: Brain, text: "AI Engineer", color: "border-purple-500/20 hover:border-purple-500/40", iconColor: "text-purple-400" },
                    { icon: Cpu, text: "System Architect", color: "border-cyan-500/20 hover:border-cyan-500/40", iconColor: "text-cyan-400" },
                  ].map((badge, index) => (
                    <motion.div
                      key={badge.text}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/3 backdrop-blur-sm border ${badge.color} transition-all duration-300 cursor-pointer group`}
                      whileHover={{ y: -2, scale: 1.02 }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <badge.icon className={`w-4 h-4 ${badge.iconColor} group-hover:scale-110 transition-transform`} />
                      <span className="text-white text-sm font-medium">{badge.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Engineering elegant digital solutions with cutting-edge technology. 
                  Specializing in scalable architectures, intelligent systems, and immersive experiences.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-wrap gap-4 mb-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-purple-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore My Work
                      <motion.div
                        animate={{ x: isHovered ? 4 : 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
                      initial={{ x: "100%" }}
                      animate={{ x: isHovered ? "0%" : "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      Download CV
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="flex gap-4 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {[
                    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-white/10" },
                    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-500/10 hover:border-blue-500/30" },
                    { icon: Mail, href: "#", label: "Email", color: "hover:bg-cyan-500/10 hover:border-cyan-500/30" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>

              </motion.div>

              {/* Vertical Divider */}
              <div className="hidden lg:block absolute top-1/2 right-[50%] transform -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* Right Content - 3D Scene */}
              <motion.div 
                className="flex-1 relative pointer-events-none min-h-[400px] lg:min-h-[600px] overflow-hidden group"
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Hologram Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.02) 2%, transparent 4%)`,
                    backgroundSize: '100% 4px'
                  }} />
                </div>

                {/* 3D Spline Scene */}
                <div className="relative w-full h-full">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                  
                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ y: ['0%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>

                {/* Tech Stack Tags */}
                <div className="absolute top-8 right-8 flex flex-col gap-3">
                  {['React', 'NextJS', 'Node.js', 'Python'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 text-white text-sm font-medium"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {tech}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Status */}
                <motion.div
                  className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Rocket className="w-4 h-4 text-cyan-400" />
                    <span>Black Bot Active</span>
                    <motion.div
                      className="w-2 h-2 bg-cyan-500 rounded-full"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Performance Stats */}
                <div className="absolute bottom-8 left-8 hidden lg:block">
                  <motion.div 
                    className="bg-black/80 backdrop-blur-md rounded-xl p-4 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="text-white text-sm space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-gray-400">Processing</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>Optimal</span>
                        </div>
                      </div>
                      <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          animate={{ width: ['0%', '100%', '0%'] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            </div>

            {/* Subtle Border Animation */}
            <motion.div
              className="absolute -inset-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-3xl"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="text-xs mb-2 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
        <motion.div
          className="w-6 h-10 rounded-full flex justify-center overflow-hidden"
          animate={{ borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)"] }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
