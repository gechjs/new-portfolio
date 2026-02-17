import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  MessageSquare,
  Send,
  Globe,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Code,
  Zap,
  Users,
  Briefcase
} from 'lucide-react';

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gizachew.dev@gmail.com",
      href: "mailto:gizachew.dev@gmail.com",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 965 726 708",
      href: "tel:+251965726708",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10",
      description: "Available Mon-Sun"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "https://maps.google.com/?q=Addis+Ababa,+Ethiopia",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/10",
      description: "Based in Ethiopia, working globally"
    },
    {
      icon: Briefcase,
      label: "Work Mode",
      value: "Remote / Hybrid",
      href: "#",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10",
      description: "Open to remote opportunities"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/gechjs", label: "GitHub", username: "@gechjs", color: "hover:bg-purple-500/10 hover:border-purple-500/30" },
    { icon: Linkedin, href: "https://linkedin.com/in/gizachew-mohammed", label: "LinkedIn", username: "in/gizachew", color: "hover:bg-blue-500/10 hover:border-blue-500/30" },
    { icon: Twitter, href: "https://twitter.com/gechjs", label: "Twitter", username: "@gechjs", color: "hover:bg-cyan-500/10 hover:border-cyan-500/30" },
    { icon: Instagram, href: "https://instagram.com/gechjs", label: "Instagram", username: "@gechjs", color: "hover:bg-pink-500/10 hover:border-pink-500/30" },
  ];

  const quickResponses = [
    { time: "< 24h", label: "Email Response", icon: Mail, gradient: "from-purple-500 to-pink-600" },
    { time: "2-3h", label: "Social Media", icon: Users, gradient: "from-cyan-500 to-blue-600" },
    { time: "Flexible", label: "Meeting Schedule", icon: Calendar, gradient: "from-emerald-500 to-teal-600" },
  ];

  const expertise = [
    { label: "Full-Stack Development", icon: Code, count: "5+ years" },
    { label: "UI/UX Design", icon: Zap, count: "20+ projects" },
    { label: "AI Integration", icon: Sparkles, count: "10+ solutions" },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-20" id="contact">
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px),
                            linear-gradient(to bottom, #444 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-600/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Binary Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(10)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div 
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-lg border border-white/10 rounded-full group hover:border-purple-500/50 transition-all duration-300 mb-8">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-white tracking-wider">
                LET'S CONNECT
              </span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Get in Touch
              </span>
              <br />
              <span className="text-white">Let's Build Together</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Whether you have a project in mind, want to collaborate, or just want to say hi, 
              I'm always excited to connect with fellow creators and innovators.
            </motion.p>
          </motion.div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group relative bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 p-6 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-400 mb-1">{item.label}</h3>
                    <p className="text-white font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    
                    <motion.div 
                      className="absolute bottom-1 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-white/40" />
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;