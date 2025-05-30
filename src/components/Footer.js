import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Navigation items matching the navbar
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <footer className="relative pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-10 bg-gray-50 dark:bg-[#161615] border-t border-gray-200 dark:border-[#3E3E3A]">
      {/* Back to top button with improved design */}
      <button 
        onClick={scrollToTop} 
        className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-[#161615]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
      <div className="max-w-7xl mx-auto">
        {/* Top section with main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-6 lg:gap-x-8 mb-8 sm:mb-12">
          {/* Brand section with more prominence */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-sm">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">S</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400">Sienz</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-md text-sm md:text-base">
              Final year Computer Science student specializing in Software Engineering, currently completing an internship. Passionate about web development and mobile applications.
            </p>
            
            {/* Student status */}
            <div className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
              <span className="text-xs font-medium">Currently an Intern</span>
            </div>
            
            {/* Social links using component */}
            <div className="mb-4 sm:mb-6">
              <SocialMediaLinks />
            </div>
          </div>
          
          {/* Navigation column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            
          {/* Skills column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">Key Skills</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-sm">
              <li className="text-gray-600 dark:text-gray-300">Web Development</li>
              <li className="text-gray-600 dark:text-gray-300">Laravel & Vue.js</li>
              <li className="text-gray-600 dark:text-gray-300">Mobile Apps (Kotlin)</li>
              <li className="text-gray-600 dark:text-gray-300">Docker Setup</li>
              <li className="text-gray-600 dark:text-gray-300">Backend Development</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with credits and additional info */}
        <div className="pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 sm:mb-0 text-center sm:text-left">
              © {currentYear} Mohamad Fazli (Sienz). All rights reserved.
            </p>
            
            {/* <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
              <Link to="/privacy-policy" className="text-gray-500 dark:text-gray-400 text-xs hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 dark:text-gray-400 text-xs hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Terms of Service</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 