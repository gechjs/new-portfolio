'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Download, Code, Server, Sparkles } from 'lucide-react'
import gechPhoto from '../../assets/img/tinified/gechphoto (3).png'
import ProjectShowcase from './ProjectShowcase'

const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-black relative">
        {/* Noise texture (unchanged) */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '180px 180px'
          }}
        />

        {/* Project Showcase background */}
        <div className="absolute inset-0 z-0">
          <ProjectShowcase />
        </div>

        {/* Main Content – Added pt-24 to account for fixed navbar */}
        <div
          className="relative z-20 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-24 md:pt-28" // ← added top padding
          style={{ paddingTop: 'calc(env(safe-area-inset-top) + 6rem)' }} // fallback with safe area
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20">
              {/* Left Column */}
              <motion.div
                className="flex-1 text-center lg:text-left order-1 w-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Heading – removed mt-4/sm:mt-8/lg:mt-14 because padding-top now handles spacing */}
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-[-2px] mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  I'M GIZACHEW
                  <span className="text-pink-500 font-serif tracking-[2px] sm:tracking-[4px]"> MOHAMMED</span>
                </motion.h1>

                {/* rest of the content remains the same */}
                <motion.div
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 font-serif mb-8 sm:mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <span className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                    NEXT-LEVEL FULL-STACK DEVELOPER 
                  </span>
                </motion.div>

                <motion.p
                  className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 sm:mb-12 font-serif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  I break down complex user experience problems to create
                  <span className="text-pink-400 font-medium"> integrity-focused solutions</span> that connect millions of people through elegant, scalable technology.
                </motion.p>

                {/* CTA Buttons – unchanged */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 sm:mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.8 }}
                >
                  <motion.button
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded-2xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      View My Work
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </motion.button>
                  <motion.a
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Hire Me
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </motion.a>
                </motion.div>

                {/* Social Links – unchanged */}
                <motion.div
                  className="flex justify-center lg:justify-start flex-wrap gap-4 sm:gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/gechjs",
                      label: "GitHub",
                      bgColor: "hover:bg-[#333]",
                      iconColor: "text-gray-300 group-hover:text-white"
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/gizachew-mohammed/",
                      label: "LinkedIn",
                      bgColor: "hover:bg-[#0077B5]",
                      iconColor: "text-gray-300 group-hover:text-white"
                    },
                    {
                      icon: Mail,
                      href: "#contact",
                      label: "Contact",
                      bgColor: "hover:bg-pink-500",
                      iconColor: "text-gray-300 group-hover:text-white"
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.label === "Contact" ? "_self" : "_blank"}
                      onClick={(e) => {
                        if (social.label === "Contact") {
                          e.preventDefault()
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className={`group w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-lg ${social.bgColor}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 1 }}
                    >
                      <social.icon className={`w-5 h-5 ${social.iconColor} transition-colors duration-300`} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column – ImageCard remains the same but ensure it doesn’t overflow */}
              <motion.div
                className="flex-1 flex justify-center lg:justify-end order-2 w-full"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ImageCard imageSrc={gechPhoto} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator moved outside relative container – fixed to viewport bottom */}
      <motion.div
        className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="text-[10px] tracking-[2px] text-white/50 font-light">SCROLL TO EXPLORE</div>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-center justify-center">
          <motion.div
            className="w-0.5 h-2.5 bg-pink-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </>
  )
}

// ImageCard with added overflow-hidden to prevent glow from overlapping text
const ImageCard = ({ imageSrc }) => {
  return (
    <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] mx-auto flex items-center justify-center overflow-hidden"> {/* ← added overflow-hidden */}
      {/* Signature glowing orb – now clipped by parent overflow */}
      <motion.div
        className="absolute -bottom-16 -left-20 w-[340px] h-[340px] rounded-full blur-[130px] z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(260deg, #ec4899 12%, rgba(236, 72, 153, 0.15) 68%, transparent 100%)',
          transform: 'rotate(10deg)'
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.75, 0.92, 0.75]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Image container */}
      <motion.div
        className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-black/80 border-4 border-pink-900/60 bg-black"
        style={{ transform: 'rotate(1.5deg) sm:rotate(3deg)' }}
        whileHover={{ scale: 1.015, rotate: 0, borderColor: '#ec4899' }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <img
          src={typeof imageSrc === 'object' ? imageSrc.src : imageSrc}
          alt="Gizachew Mohammed - Full-Stack Developer & AI Engineer"
          className="w-full aspect-[4/5] object-cover"
          style={{ objectPosition: 'center 20%' }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />

        {/* Professional badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <div className="flex items-center justify-between text-xs text-white/80">
              <span className="flex items-center gap-1">
                <Code className="w-3 h-3 text-pink-400" />
                3+ Years Experience
              </span>
              <span className="flex items-center gap-1">
                <Server className="w-3 h-3 text-pink-400" />
                Full-Stack Expert
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero