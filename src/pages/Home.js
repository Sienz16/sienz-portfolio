import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Setup intersection observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Skills data with icons and descriptions
  const skills = [
            {
              title: 'Web Development',
      description: 'Building responsive and modern web applications using React, Vue.js and other cutting-edge technologies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript']
            },
            {
              title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing']
            },
            {
              title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications that work seamlessly across devices and platforms.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      technologies: ['React Native', 'Flutter', 'Kotlin', 'Swift']
            },
  ];

  return (
    <div className="space-y-16">
      {/* Update page title */}
      <PageTitle />

      {/* Hero Section */}
      <Hero />

      {/* Featured Skills - Enhanced Design */}
      <section 
        ref={sectionRef}
        className="py-20 px-6 md:px-10 bg-gradient-to-b from-transparent to-emerald-50/30 dark:to-emerald-950/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 mb-4">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in creating modern, responsive, and user-friendly digital experiences.
            </p>
          </div>

          {/* Skills cards with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
              key={skill.title}
                className={`transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
              >
                <div className="bg-white/80 dark:bg-[#1E1E1D]/30 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/20 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 inline-flex w-fit">
                    <div className="text-emerald-600 dark:text-emerald-400">
                      {skill.icon}
                    </div>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{skill.description}</p>
                  
                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium dark:bg-emerald-900/30 dark:text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <Timeline />
    </div>
  );
};

export default Home; 