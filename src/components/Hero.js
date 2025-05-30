import React from 'react';
import { motion } from 'framer-motion';
import SocialMediaLinks from './SocialMediaLinks';
// Import a placeholder image (you'll need to add your profile image to assets folder)
import profileImg from '../assets/profile_1.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30 dark:opacity-40">
          {/* Animated blobs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-green-300 dark:bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{ 
              scale: [1, 1.1, 0.9, 1],
              transition: { duration: 7, repeat: Infinity }
            }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{ 
              scale: [1, 1.1, 0.9, 1],
              transition: { duration: 7, repeat: Infinity, delay: 2 }
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/3 w-48 h-48 md:w-72 md:h-72 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            animate={{ 
              scale: [1, 1.1, 0.9, 1],
              transition: { duration: 7, repeat: Infinity, delay: 4 }
            }}
          />
        </div>
      </div>
      
      {/* Mobile Image (Shows only on small screens) */}
      <div className="block md:hidden mb-8 w-full max-w-[280px] sm:max-w-[320px] mx-auto">
        <div className="relative w-full h-64 sm:h-72 backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-1 rounded-xl overflow-hidden">
            {/* Profile Image */}
            <img src={profileImg} alt="Your Name" className="w-full h-full object-cover" />
            
            {/* Badge for student status */}
            <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg shadow-lg p-3 max-w-[180px]">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-800 dark:text-white">BSc Computer Science</h3>
                  <p className="text-[10px] text-gray-600 dark:text-gray-300">Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 md:mb-6 text-xs md:text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200"
          >
            Software Engineering Student
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400"
          >
            Mohamad Fazli
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-3 md:mb-4 leading-relaxed"
          >
            Final year Computer Science student specializing in web development and android mobile applications.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-6 md:mb-10 leading-relaxed"
          >
            Currently completing internship while pursuing Bachelor's degree in Computer Science with Honours.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start"
          >
            <motion.button 
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')} 
              className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-white shadow-sm hover:bg-emerald-700 transition-all duration-300"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1.5 md:ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
            <motion.button 
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')} 
              className="inline-flex items-center rounded-md border-2 border-emerald-600 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-900/30 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          {/* Social links using component */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 md:mt-10"
          >
            <SocialMediaLinks className="justify-center md:justify-start" />
          </motion.div>
        </div>

        {/* Desktop Image (Only visible on medium screens and up) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block md:w-1/2 z-10"
        >
          <div className="relative w-full h-96 lg:h-[500px] backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-1 rounded-xl overflow-hidden">
              {/* Profile Image */}
              <img src={profileImg} alt="Your Name" className="w-full h-full object-cover" />
              
              {/* Add a badge for student status */}
              <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 dark:text-white">BSc Computer Science</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Software Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 