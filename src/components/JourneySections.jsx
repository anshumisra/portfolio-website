import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, BookOpen, Sun, Moon, Terminal, Rocket } from 'lucide-react';
const changes = [
    {
      year: "Jan,2024 - Present",
      items: [
        {
          title: "Ericsson - Data Engineer Intern 🎉",
          description: "Managed a data lake and deployed SQL queries in GCP BigQuery, upgraded cloud functions for improved performance, automated Pub/Sub services using Python"
        },
        {
          title: "Engineering done 🔥",
          description: "Finished my CS Engineering at Thapar Institute 🎓.Worked on group projects, made incredible friends along the way, and it was an unforgettable journey!"
        }
      ]
    },
    {
      year: "2022 - 2023",
      items: [
        {
          title: "Samsung R&D Institute - Prism Deep Learning Intern 🚀",
          description: "Developed an object detection system with Python, Flask and YOLOv5 to identify article headings, enhancing media monitoring and personalized content curation."
        }
      ]
    },
    {
      year: "2020",
      items: [
        {
          title: "Covid hit,Got into CS Engineering 💻",
          description: "Joined Thapar Institute of Engineering and Technology, made great friends, and it turned out to be a fun experience."
        },
      ]
    },
    ,
    {
      year: "2019",
      items: [
        {
          title: "Cleared 12th 🎊",
          description: "Got 95.5%."
        },
      ]
    },{
      year: "2017",
      items: [
        {
          title: "Cleared 10th and chose science afterward 🌟",
          description: "Got 86.7% from my alma mater, St. Francis College, Lucknow—truly the best school in the world!"
        },
      ]
    }
  ];
const Experiences=({isDark})=>{
    return (
        <section id="journey" className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Life Path and Experiences</h2>
        {changes.map((change, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{change.year}</h3>
            <ul className="space-y-4">
              {change.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 mt-2 mr-3 rounded-full bg-blue-500"></div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    )
}
export default Experiences;