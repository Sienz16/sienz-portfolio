import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, technologies, demoLink, sourceLink, isPrivate, isComingSoon }) => {
  // Animation control
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 dark:bg-[#1E1E1D]/60 dark:hover:bg-[#1E1E1D]/80 backdrop-blur-sm border border-emerald-50 dark:border-emerald-900/20 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with overlay effect */}
      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
        {image && (
          <img 
            src={image} 
            alt="Project thumbnail" 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
          />
        )}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
        
        {/* Project title overlay on mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:hidden bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-lg sm:text-xl font-medium text-white truncate">{title}</h3>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6">
        {/* Title - hidden on mobile since it's shown in the overlay */}
        <h3 className="hidden md:block text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        
        {/* Description with gradient text on hover */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Technologies with animation */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {technologies.map((tech, index) => (
            <span 
              key={tech} 
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium dark:bg-emerald-900/30 dark:text-emerald-300 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/40"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isHovered ? 'translateY(0) scale(1.05)' : 'translateY(0) scale(1)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action buttons with animation */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {/* Demo Link Button */}
          {isComingSoon ? (
            <Link 
              to="/coming-soon" 
              className="inline-flex items-center rounded-md bg-emerald-50 hover:bg-emerald-100 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-all duration-300 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50 group-hover:shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Coming Soon
            </Link>
          ) : demoLink && (
            <a 
              href={demoLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-emerald-50 hover:bg-emerald-100 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-all duration-300 dark:bg-emerald-900/30 dark:text-emerald-300 dark:hover:bg-emerald-900/50 group-hover:shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Demo
            </a>
          )}

          {/* Source Code Button */}
          {isPrivate ? (
            <Link 
              to="/private-code" 
              className="inline-flex items-center rounded-md border border-emerald-200 hover:border-emerald-300 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-all duration-300 dark:border-emerald-800/40 dark:text-emerald-300 dark:hover:border-emerald-700 group-hover:shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Private Code
            </Link>
          ) : sourceLink && (
            <a 
              href={sourceLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-emerald-200 hover:border-emerald-300 px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-all duration-300 dark:border-emerald-800/40 dark:text-emerald-300 dark:hover:border-emerald-700 group-hover:shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 