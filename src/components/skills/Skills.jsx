// Skills.jsx - Uniform tile size, no hidden content, no soft skills, no header icons
import React from 'react';
import {
  DiJavascript1,
  DiJsBadge,
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
} from 'react-icons/fa';

const Skills = () => {
  // Skill definitions (soft skills removed)
  const frontendSkills = [
    { name: 'JavaScript (ES6+)', icon: <DiJavascript1 className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <DiJsBadge className="text-blue-500" /> },
    { name: 'React.js', icon: <DiReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Bootstrap', icon: <DiBootstrap className="text-purple-600" /> },
    { name: 'HTML5', icon: <DiHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <DiCss3 className="text-blue-500" /> },
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', icon: <DiPostgresql className="text-blue-400" /> },
    { name: 'MySQL', icon: <DiMysql className="text-blue-500" /> },
    { name: 'MongoDB', icon: <DiMongodb className="text-green-500" /> },
    { name: 'Firebase', icon: <DiFirebase className="text-yellow-500" /> },
  ];

  const testingSkills = [
    { name: 'Jest', icon: <SiJest className="text-red-400" /> },
    { name: 'React Testing Library', icon: <FaVial className="text-pink-400" /> },
    { name: 'Cypress', icon: <SiCypress className="text-green-400" /> },
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

  const devopsSkills = [
    { name: 'Git', icon: <DiGit className="text-orange-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'Docker', icon: <DiDocker className="text-blue-400" /> },
    { name: 'Docker Compose', icon: <DiDocker className="text-blue-400" /> },
    { name: 'AWS', icon: <DiAws className="text-yellow-500" /> },
    { name: 'cPanel', icon: <SiCpanel className="text-orange-400" /> },
 
  ];

  const toolsSkills = [
    { name: 'Git', icon: <DiGit className="text-orange-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'Figma', icon: <SiFigma className="text-purple-400" /> },
    { name: 'Vite', icon: <SiVite className="text-yellow-300" /> },
    { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
  ];

  const otherToolsSkills = [
    { name: 'Celery', icon: <SiCelery className="text-green-400" /> },
    { name: 'Swagger', icon: <SiSwagger className="text-green-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'Jira', icon: <SiJira className="text-blue-400" /> },
  ];

  const skillSections = [
    { id: 'frontend', title: 'Frontend', skills: frontendSkills },
    { id: 'databases', title: 'Databases', skills: databaseSkills },
    { id: 'testing', title: 'Testing', skills: testingSkills },
    { id: 'backend', title: 'Backend', skills: backendSkills },
    { id: 'devops', title: 'DevOps', skills: devopsSkills },
    { id: 'tools', title: 'Tools', skills: toolsSkills },
    { id: 'other-tools', title: 'Other Tools', skills: otherToolsSkills },
  ];

  // Uniform skill tile – smaller size, reduced spacing
  const SkillTile = ({ skill }) => (
    <div className="group relative bg-zinc-950 border border-zinc-800/80 hover:border-pink-400/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10 w-[120px] h-[120px]">
      <div className="absolute inset-x-3 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      <div className="mb-2 text-3xl transition-all duration-700 group-hover:scale-125">
        {skill.icon}
      </div>
      <p className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors tracking-[-0.015em] leading-tight text-center">
        {skill.name}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Professional introduction */}
        <div className="text-center mb-16">
          <div className="flex items-baseline justify-center gap-2">
            <h1 className="text-[4rem] md:text-[6rem] font-bold tracking-[-0.06em] leading-none bg-gradient-to-br from-white via-zinc-100 to-pink-300 bg-clip-text text-transparent">
              skills
            </h1>
            
          </div>
          <p className="mt-2 text-lg md:text-xl text-zinc-400 font-light tracking-wide max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities. 
            <br className="hidden sm:block" />Each technology represents years of dedicated practice and real-world application.
          </p>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main content */}
        <main className="w-full">
          {skillSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20 mb-20 last:mb-0">
              {/* Section header – left aligned under main title */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white">
                  {section.title}
                </h2>
              </div>

              {/* Skills grid – minimal spacing */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 justify-items-center">
                {section.skills.map((skill, index) => (
                  <SkillTile key={index} skill={skill} />
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-10 border-t border-zinc-900 text-right text-xs text-zinc-500 font-light flex items-center justify-end gap-2">
          <span className="text-pink-400">✦</span>
          continuously refined
          <span className="text-pink-400">✦</span>
        </footer>
      </div>
    </div>
  );
};

export default Skills;