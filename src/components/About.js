import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile_1.jpg'; // Using the same profile image as Hero for now

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-gradient-to-b from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* About image */}
        <motion.div 
          className="md:w-2/5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl transform -rotate-6"></div>
            {/* Profile image instead of gradient background */}
            <div className="relative w-full h-64 md:h-120 rounded-xl shadow-lg overflow-hidden">
              <img src={profileImg} alt="Mohamad Fazli" className="w-full h-full object-cover" />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -right-6 -bottom-6 bg-white dark:bg-[#161615] rounded-lg shadow-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">23</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Years<br/>Old</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* About content */}
        <motion.div 
          className="md:w-3/5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col items-center p-6">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900 dark:text-green-200 mb-4"
            >
              About Me
            </motion.span>
          </div>
          <div className="flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Newbie Software Engineer
            </motion.h2>
          </div>
          <div className="text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              I'm Mohamad Fazli, also known as Sienz, a final year student pursuing a Bachelor's Degree in Computer Science with Honours, specializing in Software Engineering.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              My journey in Computer Science began during my first year of university. Although relatively new to the field, I've immersed myself in various technologies and frameworks over the past few years of my 4-year degree program.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Currently completing my internship, I'm focused on applying my knowledge of web development, including Laravel and Vue.js, while expanding my skills in mobile application development and server infrastructure.
            </motion.p>
          </div>
          
          <div className="flex flex-col items-center">
            <motion.button 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')} 
              className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
            >
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 