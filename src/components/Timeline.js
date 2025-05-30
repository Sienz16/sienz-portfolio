import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  // Timeline data
  const timelineItems = [
    {
      title: "First Year",
      subtitle: "Software Engineering",
      period: "2021",
      description: "Enrolled into Software Engineering course, started learning about programming and software development.",
      icon: "first-year"
    },
    {
      title: "Second Year",
      subtitle: "Software Engineering",
      period: "2022",
      description: "Continued studies in Software Engineering, focused on core programming concepts and software development methodologies.",
      icon: "code"
    },
    {
      title: "Third Year",
      subtitle: "Software Engineering",
      period: "2023",
      description: "Advanced coursework in software architecture, database systems, web development and android applications.",
      icon: "web-dev"
    },
    {
      title: "Fourth Year",
      subtitle: "Software Engineering",
      period: "2024",
      description: "Final year coursework, focusing on advanced topics and beginning work on final year project.",
      icon: "project"
    },
    {
      title: "Internship & Graduation",
      subtitle: "Software Engineering",
      period: "2025",
      description: "Currently in internship. Expected graduation in December 2025.",
      icon: "graduation"
    }
  ];

  // Function to get icon based on type
  const getIconSvg = (iconType) => {
    switch (iconType) {
      case 'first-year':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'web-dev':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'project':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 'graduation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        );
      case 'academic':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <section id="timeline" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 mb-4"
        >
          Timeline
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Academic Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          My 4-year software engineering degree journey.
        </motion.p>
      </div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Vertical line for mobile and desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-800/50 transform -translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-10 md:space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              {/* Icon centered on the timeline */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white dark:from-green-600 dark:to-emerald-700 shadow-md z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {getIconSvg(item.icon)}
              </motion.div>
              
              {/* Year badge below the icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-10 md:top-11">
                <span className="px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-sm bg-gradient-to-r from-emerald-50 to-green-100 text-emerald-800 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/30">
                  {item.period}
                </span>
              </div>
              
              {/* Content card with alternating left/right on both mobile and desktop */}
              <div className="flex justify-center pt-20">
                <motion.div 
                  className={`w-[85%] md:w-[42%] bg-white dark:bg-[#1E1E1D] rounded-xl shadow-md p-4 md:p-6 transform transition-all duration-300 hover:shadow-lg border border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-200 dark:hover:border-emerald-800/50 ${
                    index % 2 !== 0 ? 'ml-auto text-right' : 'mr-auto text-left'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs md:text-sm text-emerald-600 dark:text-emerald-400 mb-2 md:mb-3">{item.subtitle}</p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for perspective effect */}
      <style jsx>{`
        .perspective-effect {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Timeline; 