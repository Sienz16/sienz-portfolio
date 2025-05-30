import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import myStudyKpiImg from '../assets/project_images/mystudykpi.png';
import weatherImg from '../assets/project_images/weather_app.jpeg';
import ramadhanImge from '../assets/project_images/ramadhan_companion.png';

// CSS for animations
import './OtherProjects.css';

const OtherProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Projects data with actual images instead of placeholders
  const projects = [
    {
      title: 'My Study KPI',
      description: 'A website built with native PHP and CSS to track and visualize academic performance indicators for students.',
      image: myStudyKpiImg,
      technologies: ['PHP', 'CSS', 'JavaScript', 'MySQL'],
      demoLink: 'https://mystudykpi.ct.ws',
      sourceLink: null,
      isPrivate: true,
      isComingSoon: false
    },
    {
      title: 'Weather App',
      description: 'Android application built with Kotlin in Android Studio that fetches and displays weather data from a public API.',
      image: weatherImg,
      technologies: ['Kotlin', 'Android Studio', 'OpenWeather API'],
      demoLink: null,
      sourceLink: null,
      isPrivate: true,
      isComingSoon: true
    },
    {
      title: 'Ramadhan Companion',
      description: 'Mobile application that fetches prayer times from the JAKIM API and includes a Ramadhan month countdown feature.',
      image: ramadhanImge,
      technologies: ['PHP', 'CSS', 'JAKIM API', 'JavaScript'],
      demoLink: null,
      sourceLink: null,
      isPrivate: true,
      isComingSoon: true
    }
  ];

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

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      <div className={`text-center mb-10 sm:mb-16 ${isVisible ? 'animate-fade-in' : ''}`}>
        <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 mb-4">
          Portfolio
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Other Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
          A collection of academic and personal projects I've developed during my studies.
        </p>
      </div>
      
      {/* Project cards with staggered animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`transition-all duration-700 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              sourceLink={project.sourceLink}
              isPrivate={project.isPrivate}
              isComingSoon={project.isComingSoon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherProjects; 