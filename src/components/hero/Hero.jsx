'use client'

import { useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Download,
  Code,
  Server,
  Database,
  Cpu
} from 'lucide-react'
import gechPhoto from '../../assets/img/gechphoto (3).png'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent Pink Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                I'M GIZACHEW
                <span className="text-pink-500 block lg:inline tracking-wider"> MOHAMMED</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 font-medium mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Full-Stack Developer & AI Engineer
              </motion.p>

              <motion.p 
                className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Crafting exceptional digital experiences with modern technologies. 
                Specialized in building scalable web applications and intelligent AI solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-2xl hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-2xl hover:bg-gray-200 transition-all duration-300 border border-gray-200 hover:border-gray-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Download Resume
                    <Download className="w-5 h-5" />
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Links - with proper brand colors */}
              <motion.div 
                className="flex justify-center lg:justify-start gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { icon: Github, href: "https://github.com/gechjs", label: "GitHub", color: "hover:bg-[#333] hover:text-white hover:border-[#333]" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/gizachew-mohammed/", label: "LinkedIn", color: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]" },
                  { icon: Mail, href: "#contact", label: "Contact", color: "hover:bg-[#D44638] hover:text-white hover:border-[#D44638]" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Contact" ? "_self" : "_blank"}
                    rel={social.label !== "Contact" ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (social.label === "Contact") {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Vertical Divider */}
            <div className="hidden lg:block absolute top-1/2 right-[50%] transform -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

            {/* Right Content - Enhanced Image Presentation with Creative Background */}
            <motion.div 
              className="flex-1 relative min-h-[400px] lg:min-h-[600px] w-full group"
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Image Card with Redesigned Background */}
              <ImageCard imageSrc={gechPhoto} />
            </motion.div>
          </div>
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
          className="text-xs mb-2 px-4 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center overflow-hidden"
          animate={{ borderColor: ["#d1d5db", "#ec4899", "#d1d5db"] }}
        >
          <motion.div
            className="w-1 h-3 bg-pink-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

// Enhanced ImageCard component with a redesigned, creative background
const ImageCard = ({ imageSrc }) => {
  // Mouse position tracking for 3D tilt
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const rotateX = useTransform(y, [0, 1], [5, -5])
  const rotateY = useTransform(x, [0, 1], [-5, 5])
  
  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width
    const mouseY = (e.clientY - rect.top) / rect.height
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* === REDESIGNED CREATIVE BACKGROUND === */}
      
      {/* Base ambient gradient - soft pink/blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Floating geometric grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ec4899 1px, transparent 1px),
            linear-gradient(to bottom, #ec4899 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
        }}
      />
      
      {/* Animated light orbs that follow mouse position subtly */}
      <motion.div 
        className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          x: useTransform(x, [0, 1], [-30, 30]),
          y: useTransform(y, [0, 1], [-30, 30]),
        }}
        transition={{ type: "spring", damping: 30 }}
      />
      <motion.div 
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: useTransform(x, [0, 1], [40, -40]),
          y: useTransform(y, [0, 1], [20, -20]),
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Floating particles (tiny dots) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-pink-400/40 rounded-full"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + i * 8}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Main card with tilt */}
      <motion.div
        className="relative w-full max-w-lg aspect-[3/4] rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1000,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent rounded-3xl pointer-events-none" />
        
        {/* Image with soft mask */}
        <div className="absolute inset-0 p-6">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <img
              src={imageSrc}
              alt="Gizachew Mohammed"
              className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>

        {/* Animated light sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
        />

        {/* Thin border accent */}
        <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" />
      </motion.div>

      {/* Floating tech badges - refined with better animation */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        {[
          { icon: Code, label: 'React', color: 'text-pink-400' },
          { icon: Server, label: 'Node.js', color: 'text-green-400' },
          { icon: Database, label: 'Python', color: 'text-blue-400' },
          { icon: Cpu, label: 'AI/ML', color: 'text-purple-400' }
        ].map((tech, i) => (
          <motion.div
            key={tech.label}
            className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-medium shadow-lg flex items-center gap-1.5"
            animate={{
              y: [0, -4, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            whileHover={{ scale: 1.05, borderColor: "#ec4899" }}
          >
            <tech.icon className={`w-3 h-3 ${tech.color}`} />
            {tech.label}
          </motion.div>
        ))}
      </div>

      {/* Bottom accent line with glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"
        animate={{ width: ['4rem', '12rem', '4rem'], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}

export default Hero
