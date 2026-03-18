// Skills.jsx - Premium Apple-inspired design, uniform tiles, no duplicate or iconless skills
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
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiGraphql,
  SiFlask,
  SiFastapi,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiGithubactions,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVite,
  SiCelery,
  SiSwagger,
  SiJira,
  SiCpanel,
  SiAuth0,
} from 'react-icons/si';
import {
  FaServer,
  FaTools,
  FaVial,
  FaCloudUploadAlt,
  FaDatabase,
  FaCode,
  FaPlug,
  FaWifi,
  FaKey,
  FaNetworkWired,
} from 'react-icons/fa';

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // ----- SKILL SECTIONS (no duplicates, all icons verified) -----
  const frontendSkills = [
    { name: 'JavaScript (ES6+)', icon: <DiJavascript1 className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'React.js', icon: <DiReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Bootstrap', icon: <DiBootstrap className="text-purple-600" /> },
    { name: 'HTML5', icon: <DiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <DiCss3 className="text-blue-500" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <DiNodejsSmall className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
    { name: 'REST APIs', icon: <FaPlug className="text-blue-300" /> },
    { name: 'Python', icon: <DiPython className="text-yellow-400" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
    { name: 'WebSockets', icon: <FaWifi className="text-purple-400" /> },
    { name: 'JWT', icon: <FaKey className="text-yellow-300" /> },
    { name: 'OAuth', icon: <SiAuth0 className="text-orange-400" /> },
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', icon: <DiPostgresql className="text-blue-400" /> },
    { name: 'MySQL', icon: <DiMysql className="text-blue-500" /> },
    { name: 'MongoDB', icon: <DiMongodb className="text-green-500" /> },
    { name: 'Firebase', icon: <DiFirebase className="text-yellow-500" /> },
  ];

  const testingSkills = [
    { name: 'Jest', icon: <SiJest className="text-red-400" /> },
    { name: 'React Testing Library', icon: <SiTestinglibrary className="text-pink-400" /> },
    { name: 'Cypress', icon: <SiCypress className="text-green-400" /> },
  ];

  const devopsSkills = [
    { name: 'Git', icon: <DiGit className="text-orange-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'Docker', icon: <DiDocker className="text-blue-400" /> },
    { name: 'AWS', icon: <DiAws className="text-yellow-500" /> },
    { name: 'cPanel', icon: <SiCpanel className="text-orange-400" /> },
  ];

  const toolingSkills = [
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'Figma', icon: <SiFigma className="text-purple-400" /> },
    { name: 'Vite', icon: <SiVite className="text-yellow-300" /> },
    { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
    { name: 'Celery', icon: <SiCelery className="text-green-400" /> },
    { name: 'Swagger', icon: <SiSwagger className="text-green-500" /> },
    { name: 'Jira', icon: <SiJira className="text-blue-400" /> },
  ];

  const skillSections = [
    { id: 'frontend', title: 'Frontend', skills: frontendSkills },
    { id: 'backend', title: 'Backend', skills: backendSkills },
    { id: 'databases', title: 'Databases', skills: databaseSkills },
    { id: 'testing', title: 'Testing', skills: testingSkills },
    { id: 'devops', title: 'DevOps & Cloud', skills: devopsSkills },
    { id: 'tooling', title: 'Tooling', skills: toolingSkills },
  ];

  // ----- UNIFORM TILE (Apple-inspired design) -----
  const SkillTile = ({ skill, index }) => {
    // Staggered animation delay
    const delay = `${index * 0.05}s`;

    return (
      <div
        className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 hover:border-pink-400/30 rounded-3xl p-4 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/20 w-[130px] h-[130px] md:w-[140px] md:h-[140px] animate-fade-in"
        style={{ animationDelay: delay }}
      >
        {/* Subtle gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
        
        {/* Shine line */}
        <div className="absolute inset-x-4 bottom-3 h-[1px] bg-gradient-to-r from-transparent via-pink-400/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

        {/* Icon */}
        <div className="mb-2 text-4xl md:text-5xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
          {skill.icon}
        </div>

        {/* Skill name */}
        <p className="text-xs md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors tracking-tight leading-tight text-center px-1">
          {skill.name}
        </p>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-pink-400 text-3xl animate-pulse font-light tracking-widest">
          ✦ skills ✦
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      {/* Subtle background noise */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=&quot;0 0 200 200&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cfilter id=&quot;noise&quot;%3E%3CfeTurbulence type=&quot;fractalNoise&quot; baseFrequency=&quot;0.65&quot; numOctaves=&quot;1&quot; stitchTiles=&quot;stitch&quot;/%3E%3C/filter%3E%3Crect width=&quot;100%&quot; height=&quot;100%&quot; filter=&quot;url(%23noise)&quot; opacity=&quot;0.02&quot;/%3E%3C/svg%3E')] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-[5rem] md:text-[8rem] font-bold tracking-[-0.05em] leading-none bg-gradient-to-br from-white via-zinc-100 to-pink-300 bg-clip-text text-transparent">
            skills
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            A curated collection of technologies I work with — each tile reflects a tool I’ve mastered.
          </p>
        </div>

        {/* Sections */}
        <main className="space-y-20 md:space-y-28">
          {skillSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              {/* Section title */}
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8 border-l-4 border-pink-400 pl-4">
                {section.title}
              </h2>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 justify-items-center">
                {section.skills.map((skill, index) => (
                  <SkillTile key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 text-right text-xs text-zinc-600 font-light flex items-center justify-end gap-2">
          <span className="text-pink-400">✦</span>
          continuously refined
          <span className="text-pink-400">✦</span>
        </footer>
      </div>

      {/* Add fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Skills;