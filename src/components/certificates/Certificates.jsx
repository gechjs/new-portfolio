import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, ChevronLeft, ChevronRight, Maximize2, 
  GraduationCap, Calendar, Play, Pause, X, BookOpen
} from 'lucide-react';

import evangadiBootcamp from "../../assets/certeficate/evangadi_bootcamp_certeficate.jpeg";
import evangadiInternship from "../../assets/certeficate/evangadi_internship.jpeg";
import geezai from "../../assets/certeficate/geezai.jpeg";
import udacityAI from "../../assets/certeficate/udacity_ai_certeficate.jpeg";
import courseraML from "../../assets/certeficate/CourseraMl_page-0001.jpg";
import gizachew from "../../assets/certeficate/Gizachew Mohammed (2)_page-0001.jpg";

const certificates = [
  { 
    id: 1, 
    img: evangadiBootcamp, 
    title: "Full-Stack Web Development", 
    issuer: "Evangadi Tech",
    date: "Apr 2024 - Nov 2025",
    category: "Web Development",
    skills: ["Node.js", "React.js", "MySQL", "Bootstrap", "Express.js", "REST APIs"],
    description: "Completed an intensive full-stack bootcamp, gaining hands-on experience with modern web technologies. Built real-world projects including clones of Amazon, Apple, and Netflix, demonstrating proficiency in front-end and back-end development. Collaborated on team projects and learned version control with Git."
  },
  { 
    id: 2, 
    img: evangadiInternship, 
    title: "Software Development Internship", 
    issuer: "Evangadi Devshop",
    date: "Apr 2025 - Aug 2025",
    category: "Professional Experience",
    skills: ["React", "Redux", "Docker", "GitHub Actions", "Jira", "Agile"],
    description: "Selected as one of the top 60 from over 2,000 applicants for the Evangadi Fullstack Bootcamp. Subsequently chosen among the top 2 for a 4-month immersive internship at Evangadi Devshop From a Group of around 60. Contributed to production projects including the Evangadi Fullstack Learning Website and Tutoring Platform. Gained hands-on experience with React, Redux, Docker, GitHub Actions, and Agile workflows."
  },
  { 
    id: 3, 
    img: geezai, 
    title: "AI & Machine Learning", 
    issuer: "Geez AI",
    date: "2025",
    category: "Artificial Intelligence",
    skills: ["Python", "TensorFlow", "Neural Networks", "Computer Vision"],
    description: "Completed an intensive program in Artificial Intelligence and Machine Learning, gaining practical experience in building and deploying ML models. Covered topics including neural networks, computer vision, and natural language processing. Implemented projects using TensorFlow and Python."
  },
  { 
    id: 4, 
    img: udacityAI, 
    title: "Fundamentals of Artificial Intelligence", 
    issuer: "Udacity",
    date: "2024",
    category: "Artificial Intelligence",
    skills: ["AI Concepts", "Machine Learning Basics", "Neural Networks"],
    description: "Earned the AI Fundamentals Certificate, building a foundational understanding of AI concepts and their real-world applications. Gained insights into how AI technologies function and their potential across industries."
  },
  { 
    id: 5, 
    img: courseraML, 
    title: "Supervised Machine Learning: Regression and Classification", 
    issuer: "Coursera",
    date: "2026",
    category: "Artificial Intelligence",
    skills: ["Machine Learning", "Regression", "Classification", "Python", "Scikit-learn"],
    description: "Completed comprehensive course on supervised machine learning techniques. Mastered regression and classification algorithms, model evaluation, and practical implementation using Python and scikit-learn.",
    credentialId: "NUJB432A6D9Y",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/NUJB432A6D9Y"
  },
  { 
    id: 6, 
    img: gizachew, 
    title: "National Competitive Programming Hackathon", 
    issuer: "National Competitive Programming Hackathon",
    date: "2025",
    category: "Recognition",
    skills: ["Algorithms", "Problem Solving", "Team Collaboration"],
    description: "Participated in the National Competitive Programming Hackathon, demonstrating strong problem-solving skills and effective teamwork in a high-pressure competitive environment."
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const timerRef = useRef(null);
  const carouselRef = useRef(null);

  // Auto-play (2.5 seconds)
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length);
      }, 2500);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const handleDotClick = (index) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  const openModal = (cert) => {
    setIsPlaying(false);
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  // Get visible certificates (previous, current, next)
  const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  const nextIndex = (currentIndex + 1) % certificates.length;

  return (
    <section id="certificates" className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px),
                            linear-gradient(to bottom, #444 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             professional certifications in web development, AI, and more
          </p>
        </div>

        {/* Carousel with peek effect */}
        <div className="max-w-5xl mx-auto">
          <div className="relative" ref={carouselRef}>
            {/* Main carousel container */}
            <div className="flex items-center justify-center">
              {/* Previous certificate (peek) */}
              <div className="hidden md:block w-1/5 opacity-40 transform scale-90 transition-all">
                <div className="relative h-64 rounded-lg overflow-hidden border border-gray-800">
                  <img 
                    src={certificates[prevIndex].img} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Current certificate (main) - larger, transparent background */}
              <div className="w-full md:w-3/5 px-4 z-10">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-800 rounded-2xl overflow-hidden shadow-2xl bg-transparent"
                >
                  <div className="relative h-96 bg-gray-900">
                    <img
                      src={certificates[currentIndex].img}
                      alt={certificates[currentIndex].title}
                      className="w-full h-full object-contain p-4"
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-gray-700">
                        {certificates[currentIndex].category}
                      </span>
                    </div>

                    {/* Overlay with view button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openModal(certificates[currentIndex])}
                        className="px-4 py-2 bg-purple-500 rounded-lg text-white text-sm font-medium flex items-center gap-2 hover:bg-purple-600 transition-colors"
                      >
                        <Maximize2 className="w-4 h-4" />
                        View Certificate
                      </button>
                    </div>
                  </div>

                  {/* Only title shown on main card */}
                  <div className="p-4 text-center border-t border-gray-800">
                    <h3 className="text-lg font-semibold text-white">
                      {certificates[currentIndex].title}
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* Next certificate (peek) */}
              <div className="hidden md:block w-1/5 opacity-40 transform scale-90 transition-all">
                <div className="relative h-64 rounded-lg overflow-hidden border border-gray-800">
                  <img 
                    src={certificates[nextIndex].img} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full border border-gray-700 flex items-center justify-center text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom controls: play/pause, dots, counter */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Play/Pause button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-lg border border-gray-800 text-sm text-gray-300 hover:border-purple-500/30 hover:text-white transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" /> Play
                </>
              )}
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-6 bg-purple-500' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {certificates.length}
            </span>
          </div>
        </div>
      </div>

      {/* Modal with full details */}
      <AnimatePresence>
        {isModalOpen && selectedCert && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-5xl w-full bg-gray-900 rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="p-6 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-gray-900 z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-gray-400">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left column: image only */}
                  <div>
                    <img 
                      src={selectedCert.img} 
                      alt={selectedCert.title}
                      className="w-full rounded-lg border border-gray-800"
                    />
                  </div>
                  
                  {/* Right column: description, category, skills */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Description</h4>
                      <div className="text-gray-300 text-sm leading-relaxed">
                        {selectedCert.description}
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Category</h4>
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                        {selectedCert.category}
                      </span>
                    </div>

                    {/* Skills (now below category) */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verification - only show if verificationUrl exists */}
                    {selectedCert.verificationUrl && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4" /> Verification
                        </h4>
                        <div className="space-y-2">
                          {selectedCert.credentialId && (
                            <div>
                              <span className="text-xs text-gray-500">Credential ID:</span>
                              <p className="text-sm text-gray-300 font-mono">{selectedCert.credentialId}</p>
                            </div>
                          )}
                          <a
                            href={selectedCert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-xs border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                          >
                            <Maximize2 className="w-3 h-3" />
                            Verify Certificate
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;