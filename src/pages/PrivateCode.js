import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import './PrivateCode.css';

const PrivateCode = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:py-20 text-white">
      <PageTitle title="Private Repository" />
      
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-10 inline-block">
          <div className="h-14 w-14 sm:h-16 sm:w-16 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center mx-auto shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white">S</span>
          </div>
        </div>
        
        {/* Main content */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-300 mb-4 sm:mb-6">
          Private Repository
        </h1>
        
        <div className="p-4 sm:p-6 md:p-8 bg-black/30 backdrop-blur-lg rounded-xl shadow-xl mb-8 sm:mb-10 border border-emerald-900/20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Source Code Not Available
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
            The source code for this project is currently private and not available for public viewing. This is to protect intellectual property and maintain the security of the codebase.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Private Repositories</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Security Protected</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0014.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-sm sm:text-base">Code Documentation</span>
            </div>
          </div>
          
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
            If you are interested in discussing the code or potential collaboration, please feel free to contact me through the contact form on the portfolio site.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link to="/" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-black/40 hover:bg-black/60 text-white font-medium rounded-md transition-colors">
              Return to Portfolio
            </Link>
            <Link to="/contact" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer links */}
      <div className="mt-10 sm:mt-16 text-center">
        <div className="flex justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
        </div>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
          &copy; {currentYear} Sienz. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivateCode; 