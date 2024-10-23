import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, BookOpen, Sun, Moon, Terminal, Rocket } from 'lucide-react';
import ContactForm from './components/Contact';
import ProjectSec from './components/ProjectSection.jsx';
import Experiences from './components/JourneySections.jsx';
import OnGoingSec from './components/OnGoing.jsx';
import { LeetCodeIcon } from './components/LeetcodeIcon.jsx';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <img className="w-10 h-10 rounded-full" src="../src/assets/profile.png" />
          <div className="flex items-center gap-6">
            <a href="#projects" className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Projects</a>
            <a href="#journey" className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Journey</a>
            <a href='https://drive.google.com/drive/folders/1hxCYuXe2sc1rR2M9vq7LiYNxgOYMYTBz?usp=drive_link' target="_blank" className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Resume</a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>


        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
            <img src="../src/assets/avatar-svgrepo-com.svg" alt="profile" />
          </div>

          <h1 className="text-4xl font-bold mb-4">Hi, I'm Anshu Misra</h1>
          <p className="text-xl mb-6">
            Passionate about evolving into a great Software Engineer, with a focus on continuous learning and exploring diverse tech stacks.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/anshumisra" target="_blank" rel="noopener noreferrer">
              <Github className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
            </a>
            <a href="https://www.linkedin.com/in/anshu-misra-8539711ba/" target="_blank" rel="noopener noreferrer">
              <Linkedin className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
            </a>
            <a href="mailto:anshumisra.25@gmail.com">
              <Mail className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
            </a>
            <a href="https://leetcode.com/anshumisra/" target="_blank" rel="noopener noreferrer">
              <LeetCodeIcon className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
            </a>
          </div>
        </div>

        <ProjectSec isDark={isDark} />
        <Experiences isDark={isDark} />
        <OnGoingSec isDark={isDark} />
        <section className="mb-16">
          <ContactForm isDark={isDark} />
        </section>


        <footer className="text-center py-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              © 2024 Anshu Misra. All rights reserved.
            </span>
            <div className="flex space-x-4">
              <a href="https://github.com/anshumisra" target="_blank" rel="noopener noreferrer">
                <Github className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
              </a>
              <a href="https://www.linkedin.com/in/anshu-misra-8539711ba/" target="_blank" rel="noopener noreferrer">
                <Linkedin className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
              </a>
              <a href="mailto:anshumisra.25@gmail.com">
                <Mail className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
              </a>
              <a href="https://leetcode.com/anshumisra/" target="_blank" rel="noopener noreferrer">
              <LeetCodeIcon className={`w-6 h-6 ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`} />
            </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;