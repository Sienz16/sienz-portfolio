import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import ContactForm from '../components/ContactForm';
import SocialMediaLinks from '../components/SocialMediaLinks';
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const submitForm = (formData) => {
    // Show celebration and message instead of actual form submission
    setFormSubmitted(true);
    setShowCelebration(true);
    
    // Hide celebration after 5 seconds
    setTimeout(() => {
      setShowCelebration(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <PageTitle title="Contact" />
      
      <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-[#161615] dark:to-emerald-950/20 rounded-3xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Contact info with modern design */}
          <div className="md:w-2/5 p-10 md:p-12 bg-emerald-600/10 dark:bg-emerald-600/5">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              If you have any question for me, leave a message here.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Kota Kinabalu, Sabah, Malaysia</p>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-medium">Connect with me</h3>
                <SocialMediaLinks className="text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>
          
          {/* Contact form with modern design */}
          <div className="md:w-3/5 p-10 md:p-12 bg-white dark:bg-[#161615] relative">
            {/* Regular form */}
            {!formSubmitted && (
              <ContactForm onSubmit={submitForm} />
            )}
            
            {/* Celebration overlay when form is submitted */}
            {formSubmitted && (
              <div className="text-center">
                {/* Celebration animation */}
                {showCelebration && (
                  <div className="celebration-container absolute inset-0 overflow-hidden">
                    {Array.from({ length: 50 }).map((_, index) => {
                      const randomLeft = Math.random() * 100;
                      const randomTop = Math.random() * 100;
                      const fallDistance = Math.random() * 100 + 150;
                      const fallDelay = Math.random() * 3;
                      const fallDuration = Math.random() * 3 + 2;
                      const background = `hsl(${Math.random() * 60 + 120}, 70%, 60%)`;
                      
                      return (
                        <div 
                          key={index}
                          className="confetti"
                          style={{
                            left: `${randomLeft}%`,
                            top: `${randomTop}%`,
                            background,
                            animation: `fall ${fallDuration}s ease-in forwards`,
                            animationDelay: `${fallDelay}s`,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                )}
                
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl shadow-md dark:from-emerald-900/30 dark:to-green-900/30 relative z-10 transform transition-all duration-500">
                  <div className="emoji mb-4 text-5xl animate-bounce">😜</div>
                  <h3 className="text-2xl font-bold mb-2">JK! I cannot see your message here.</h3>
                  <p className="text-lg mb-6">
                    This is just a portfolio demo without a database to keep the data.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    For important matters, please contact me directly through my social media accounts or Instagram at 
                    <span className="font-medium text-emerald-600 dark:text-emerald-400"> @sienz_fxzly</span>
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)} 
                    className="py-2 px-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                  >
                    Return to Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 