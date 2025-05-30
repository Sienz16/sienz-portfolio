import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import SocialMediaLinks from '../components/SocialMediaLinks';
import './ComingSoon.css';

const ComingSoon = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send the email to your backend
    alert(`Thank you! We'll notify you at ${email} when we launch.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:py-20 text-white">
      <PageTitle title="Coming Soon" />
      
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-10 inline-block">
          <div className="h-14 w-14 sm:h-16 sm:w-16 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center mx-auto shadow-lg">
            <span className="text-2xl sm:text-3xl font-bold text-white">S</span>
          </div>
        </div>
        
        {/* Main content */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-300 mb-4 sm:mb-6">
          Coming Soon
        </h1>
        
        <div className="p-4 sm:p-6 md:p-8 bg-black/30 backdrop-blur-lg rounded-xl shadow-xl mb-6 sm:mb-10 border border-emerald-900/20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            We're Still Brewing Something Awesome
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
            Our development team is working hard to bring you an exceptional experience. The project is currently in the pre-deployment phase, but we're making progress every day!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Finalizing UI/UX designs</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Optimizing performance</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Implementing security features</span>
            </div>
          </div>
          
          <div className="h-2 sm:h-2.5 bg-gray-800 rounded-full w-full max-w-md mx-auto mb-1 sm:mb-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-600 to-green-500 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mb-2">Project Completion: 75%</p>
        </div>
        
        {/* Newsletter signup */}
        <div className="mb-6 sm:mb-10">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
            Be the first to know when we launch!
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 py-2.5 sm:py-3 px-4 rounded-md sm:rounded-l-md border border-gray-700 bg-[#1c1c1b] text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:rounded-r-none text-sm sm:text-base"
            />
            <button 
              type="submit"
              className="py-2.5 sm:py-3 px-4 sm:px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md sm:rounded-l-none transition-colors text-sm sm:text-base"
            >
              Notify Me
            </button>
          </form>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-4 sm:space-x-5">
          <SocialMediaLinks className="text-gray-400 hover:text-emerald-400 transition-colors" />
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

export default ComingSoon; 