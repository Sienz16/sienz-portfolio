import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Skills data
  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'PHP', 'C++', 'Java', 'C#', 'Python', 'R', 'HTML', 'Kotlin']
    },
    {
      category: 'Frontend',
      items: ['Vue.js', 'Alpine.js', 'Livewire', 'Blade', 'CSS', 'Tailwind CSS', 'React']
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'VPS', 'CA Installation', 'Git', 'Android Studio']
    },
    {
      category: 'Backend',
      items: ['Laravel', 'Node.js']
    },
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
      id="skills" 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30 dark:opacity-40">
          {/* Animated blobs using the existing animation from index.css */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-green-300 dark:bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 md:w-64 md:h-64 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-16 px-4 md:px-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Throughout my university studies and personal projects, I've acquired experience with these technologies.
          </p>
        </motion.div>
        
        {/* Skills with glass morphism cards and staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.5, 
                delay: isVisible ? index * 0.15 : 0 
              }}
            >
              <SkillCard 
                category={skillGroup.category}
                skills={skillGroup.items}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 