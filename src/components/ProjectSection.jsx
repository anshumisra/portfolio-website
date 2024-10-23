import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, BookOpen, Sun, Moon, Terminal, Rocket } from 'lucide-react';
const projects = [
  {
    title: "Think- Ai SAAS Platform",
    description: "Developed a user-centric AI SaaS platform with advanced AI tools, integrated authentication,focusing on music/video generation and customer support.",
    tags: ["NextJs" , "Gemini API", "Vercel" ,"Prisma", "React", "Tailwind", "Replicate AI", "Clerk"],
    github: "https://github.com/anshumisra/think-ai-saas",
    live: "https://vercel.com/api/toolbar/link/think-ai-sigma.vercel.app?via=team-dashboard-project-entity&p=1&page=/"
  },
  {
    title: "Medium - Blogging Website",
    description: "Social publishing platform that is open to all and home for a diverse array of stories, blogs and perspectives",
    tags: ["React", "Typescript","Postgres", "Prisma" ,"AWS"],
    github: "https://github.com/anshumisra/medium-fullstack",
    
  },
  {
    title: "Automated road safety audit",
    description: "Developed and deployed an AI-powered web app for automated road safety audits, cutting processing time and identifying more safety issues, significantly enhancing road safety compliance",
    tags: ["Python", "YOLO", "Deta" , "Streamlit"],
    github:"https://github.com/anshumisra/"
  }
];
const ProjectSec=({isDark})=>{
    return (
      <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-md'}`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex gap-2">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <Github className="w-5 h-5" />
                </a>
                {project.title=="Think- Ai SAAS Platform"?<a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>:""}
              </div>
            </div>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}
export default ProjectSec;