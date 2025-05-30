import React from 'react';

const SkillCard = ({ category, skills }) => {
  // Get an appropriate icon based on the category
  const getCategoryIcon = () => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
          />
        );
      case 'frontend':
        return (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        );
      case 'backend':
        return (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" 
          />
        );
      case 'devops & tools':
        return (
          <>
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </>
        );
      default:
        return (
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M13 10V3L4 14h7v7l9-11h-7z" 
          />
        );
    }
  };

  return (
    <div className="bg-white/90 dark:bg-[#1E1E1D]/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-md transition-all duration-500 p-6 border border-emerald-50 dark:border-emerald-900/20 transform hover:-translate-y-1 relative">
      {/* Category header with icon */}
      <div className="flex items-center mb-5">
        <div className="flex-shrink-0 mr-3 p-2 bg-gradient-to-br from-emerald-500 to-green-400 rounded-lg text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {getCategoryIcon()}
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category}</h3>
      </div>
      
      {/* Skills list */}
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li 
            key={skill}
            className="flex items-center p-2 rounded-lg"
          >
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
      
      {/* Decorative dots */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 opacity-10 transition-opacity">
        <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-emerald-500"></div>
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-emerald-500"></div>
        <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-emerald-500"></div>
        <div className="absolute top-0 left-6 w-2 h-2 rounded-full bg-emerald-500"></div>
        <div className="absolute top-6 left-0 w-2 h-2 rounded-full bg-emerald-500"></div>
      </div>
    </div>
  );
};

export default SkillCard; 