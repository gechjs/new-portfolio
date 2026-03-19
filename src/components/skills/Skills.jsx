// Skills.jsx – Clean, professional skills showcase (Apple/Dribbble inspired)
import React, { useState, useEffect } from 'react';
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiPython,
  DiMongodb,
  DiPostgresql,
  DiMysql,
  DiRedis,
  DiGit,
  DiDocker,
  DiAws,
  DiHeroku,
  DiFirebase,
} from 'react-icons/di';
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiGraphql,
  SiGo,
  SiFastapi,
  SiGithubactions,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVite,
  SiSwagger,
  SiJira,
  SiCpanel,
} from 'react-icons/si';

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // ----- SKILL SECTIONS (clean, focused) -----
  const sections = [
    {
      id: 'frontend',
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
        { name: 'React', icon: <DiReact className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#14b8a6', fontSize: '1.7rem' }} /> },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <DiNodejsSmall className="text-green-500" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
        { name: 'Python', icon: <DiPython className="text-yellow-400" /> },
        { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
        { name: 'Go', icon: <SiGo className="text-cyan-400" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
       
      ],
    },
    {
      id: 'database',
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', icon: <DiPostgresql className="text-blue-400" /> },
        { name: 'MySQL', icon: <DiMysql className="text-blue-500" /> },
        { name: 'MongoDB', icon: <DiMongodb className="text-green-500" /> },
        { name: 'Firebase', icon: <DiFirebase className="text-yellow-500" /> },
        { name: 'Redis', icon: <DiRedis className="text-red-500" /> },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <DiGit className="text-orange-500" /> },
        { name: 'GitHub', icon: <SiGithub className="text-white" /> },
        { name: 'GitHub Actions', icon: <SiGithubactions className="text-blue-500" /> },
        { name: 'Docker', icon: <DiDocker className="text-blue-400" /> },
        { name: 'AWS', icon: <DiAws className="text-yellow-500" /> },
        { name: 'Heroku', icon: <DiHeroku className="text-purple-400" /> },
        { name: 'cPanel', icon: <SiCpanel className="text-orange-400" /> },
        { name: 'Vite', icon: <SiVite className="text-yellow-300" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
        { name: 'Figma', icon: <SiFigma className="text-purple-400" /> },
        { name: 'Jira', icon: <SiJira className="text-blue-400" /> },
        { name: 'Swagger', icon: <SiSwagger className="text-green-500" /> },
      ],
    },
  ];

  // ----- UNIFORM TILE (compact, Apple‑inspired) -----
  const SkillTile = ({ skill, index }) => {
    const delay = `${index * 0.03}s`;

    return (
      <div
        className="group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-3 flex flex-col items-center justify-center text-center w-[100px] h-[100px] md:w-[120px] md:h-[120px] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10 animate-fade-in"
        style={{ 
          animationDelay: delay,
          backgroundColor: 'rgba(24, 24, 27, 0.3)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(113, 113, 122, 0.5)',
          borderRadius: '16px',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '95px',
          height: '95px',
          minWidth: '95px',
          minHeight: '95px'
        }}
      >
        {/* subtle gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" 
          style={{
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.05), transparent)',
            opacity: '0',
            borderRadius: '16px',
            transition: 'opacity 0.5s'
          }}
        />

        {/* icon */}
        <div 
          className="mb-1 text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110"
          style={{
            marginBottom: '4px',
            fontSize: '1.4rem',
            transition: 'transform 0.3s'
          }}
        >
          {skill.icon}
        </div>

        {/* skill name */}
        <p 
          className="text-[10px] md:text-xs font-medium text-zinc-300 group-hover:text-white transition-colors tracking-tight"
          style={{
            fontSize: '11px',
            fontWeight: '500',
            color: '#d4d4d8',
            transition: 'color 0.3s',
            letterSpacing: '0.025em'
          }}
        >
          {skill.name}
        </p>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-pink-400 text-2xl font-light tracking-widest animate-pulse">
          ✦ loading ✦
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased" style={{ overflowX: 'hidden', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* background noise */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=&quot;0 0 200 200&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cfilter id=&quot;noise&quot;%3E%3CfeTurbulence type=&quot;fractalNoise&quot; baseFrequency=&quot;0.65&quot; numOctaves=&quot;1&quot; stitchTiles=&quot;stitch&quot;/%3E%3C/filter%3E%3Crect width=&quot;100%&quot; height=&quot;100%&quot; filter=&quot;url(%23noise)&quot; opacity=&quot;0.02&quot;/%3E%3C/svg%3E')] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-20" style={{ overflowX: 'hidden' }}>
        {/* header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            fontWeight: '600', 
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            technical skills
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)', color: '#9ca3af', maxWidth: '600px', margin: '0 auto', fontWeight: '400' }}>
            A focused collection of technologies I use to build modern web applications.
          </p>
        </div>

        {/* sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {sections.map((section) => (
            <section key={section.id} style={{ scrollMarginTop: '5rem' }}>
              <h2 style={{ 
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', 
                fontWeight: '500', 
                color: '#ffffff', 
                marginBottom: '1.5rem',
                borderLeft: '3px solid #f472b6',
                paddingLeft: '1rem',
                letterSpacing: '-0.01em'
              }}>
                {section.title}
              </h2>

              <div 
                className="flex flex-wrap gap-8 justify-start items-center w-full"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  width: '100%',
                  overflowX: 'hidden'
                }}
              >
                {section.skills.map((skill, idx) => (
                  <SkillTile key={skill.name} skill={skill} index={idx} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* subtle footer */}
        <div style={{ 
          marginTop: '4rem', 
          paddingTop: '1.5rem', 
          borderTop: '1px solid #374151', 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          gap: '0.5rem',
          fontSize: '0.75rem',
          color: '#6b7280',
          fontWeight: '400'
        }}>
          <span style={{ color: '#f472b6' }}>✦</span> constantly evolving <span style={{ color: '#f472b6' }}>✦</span>
        </div>
      </div>

      {/* fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Skills;