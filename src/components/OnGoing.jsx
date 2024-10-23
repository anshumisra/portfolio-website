import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, BookOpen, Sun, Moon, Terminal, Rocket } from 'lucide-react';
const OnGoingSec=({isDark})=>{
    return <section className="mb-16">
  <div className="flex items-center justify-center gap-3 mb-8">
    <Terminal className="w-6 h-6 text-blue-500 animate-spin-slow" />
    <h2 className="text-2xl font-bold text-center">Currently Working On</h2>
    <Terminal className="w-6 h-6 text-blue-500 animate-spin-slow" />
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className={`group relative p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white/90'} 
      backdrop-blur-sm border-2 ${isDark ? 'border-blue-500/20' : 'border-blue-200'} 
      hover:border-blue-500 transition-all duration-300 shadow-lg 
      hover:shadow-blue-500/10 hover:-translate-y-1`}>
      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500 
        shadow-lg shadow-green-500/50 animate-pulse" />
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Rocket className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />
          <h3 className="text-xl font-semibold">WebChat</h3>
        </div>
        <div className="flex gap-2">
          <a 
            href="https://github.com/anshumisra/chat-web"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } hover:scale-110 transform duration-200`}
          >
            <Github className="w-5 h-5" />
          </a>
          {/* <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } hover:scale-110 transform duration-200`}
          >
            <ExternalLink className="w-5 h-5" />
          </a> */}
        </div>
      </div>

      <div className={`mb-4 relative ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        <p>A simple chat web application with rooms,made using socket.io and React</p>
        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
      </div>

      <div className="flex flex-wrap gap-2">
        {["React", "Node.js", "Socket.io"].map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className={`px-3 py-1 rounded-full text-sm ${
              isDark 
                ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20' 
                : 'bg-blue-50 text-blue-600 border border-blue-200'
            } hover:scale-105 transition-transform duration-200`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className={`group relative p-6 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white/90'} 
      backdrop-blur-sm border-2 ${isDark ? 'border-purple-500/20' : 'border-purple-200'} 
      hover:border-purple-500 transition-all duration-300 shadow-lg 
      hover:shadow-purple-500/10 hover:-translate-y-1`}>
      
      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500 
        shadow-lg shadow-green-500/50 animate-pulse" />
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Terminal className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
          <h3 className="text-xl font-semibold">Peer Link</h3>
        </div>
        <div className="flex gap-2">
          <a 
            href="https://github.com/anshumisra/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } hover:scale-110 transform duration-200`}
          >
            <Github className="w-5 h-5" />
          </a>
          {/* <a 
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } hover:scale-110 transform duration-200`}
          >
            <ExternalLink className="w-5 h-5" />
          </a> */}
        </div>
      </div>

      <div className={`mb-4 relative ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        <p>Video calling web application,made using WebRTC ,socket.io and React,currently peer to peer only</p>
        <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
      </div>

      <div className="flex flex-wrap gap-2">
        {["React", "WebRTC", "Socket.io"].map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className={`px-3 py-1 rounded-full text-sm ${
              isDark 
                ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' 
                : 'bg-purple-50 text-purple-600 border border-purple-200'
            } hover:scale-105 transition-transform duration-200`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
}

export default OnGoingSec;