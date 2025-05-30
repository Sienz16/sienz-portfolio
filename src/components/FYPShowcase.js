import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import welcomeImg from '../assets/fyp_images/welcome.png';
import EventDetailsImg from '../assets/fyp_images/event_details.png';
import EventListImg from '../assets/fyp_images/event_list.png';
import NotificationImg from '../assets/fyp_images/notification.png';
import VenueImg from '../assets/fyp_images/venue.png';

// Import CSS for animations
import './FYPShowcase.css';

// Placeholder image for development
const placeholderImage = 'https://via.placeholder.com/600x400?text=FYP+Screenshot';

const FYPShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesRevealed, setImagesRevealed] = useState(false);
  const sectionRef = useRef(null);

  // Project images array with actual screenshots and descriptions
  const projectImages = [
    { 
      src: welcomeImg, 
      alt: 'Welcome Screen', 
      title: 'Welcome Screen',
      description: 'User-friendly onboarding experience with a modern UI design',
      position: 'center' 
    },
    { 
      src: EventListImg, 
      alt: 'Event List', 
      title: 'Event Listings',
      description: 'Browse and filter upcoming events with detailed information',
      position: 'left' 
    },
    { 
      src: EventDetailsImg, 
      alt: 'Event Details', 
      title: 'Event Details',
      description: 'Comprehensive event information with registration options',
      position: 'right' 
    },
    { 
      src: VenueImg, 
      alt: 'Venue Management', 
      title: 'Venue Management',
      description: 'Interactive venue selection and capacity management',
      position: 'left-2' 
    },
    { 
      src: NotificationImg, 
      alt: 'Notification System', 
      title: 'Smart Notifications',
      description: 'Real-time alerts and reminders for event participants',
      position: 'right-2' 
    },
  ];

  // Gallery animation timing
  const revealGallery = () => {
    setIsVisible(true);
    
    // Reveal the main image first
    setTimeout(() => {
      setCurrentImageIndex(1);
      
      // Then start revealing the side images
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => {
          if (prevIndex < projectImages.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            setImagesRevealed(true);
            return prevIndex;
          }
        });
      }, 150); // Slower timing for mobile to see the effect
    }, 300);
  };

  // Setup intersection observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          revealGallery();
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

  // Function to determine if an image should be displayed yet
  const shouldShowImage = (index) => {
    // Always show the first image
    if (index === 0) return true;
    
    // Only show other images if they've been revealed by the scroll trigger
    return index <= currentImageIndex && isVisible;
  };

  // Function to get position classes for different images
  const getPositionClasses = (position) => {
    switch (position) {
      case 'left':
        return 'md:absolute md:top-[20%] md:left-[10%] md:-rotate-12';
      case 'left-2':
        return 'md:absolute md:top-[40%] md:left-[5%] md:-rotate-12';
      case 'right':
        return 'md:absolute md:top-[20%] md:right-[10%] md:rotate-12';
      case 'right-2':
        return 'md:absolute md:top-[40%] md:right-[5%] md:rotate-12';
      default:
        return 'md:absolute md:top-[30%] md:left-[50%] md:transform md:-translate-x-1/2';
    }
  };

  // Get classes for the image size based on position and responsive design
  const getImageSizeClasses = (index, position) => {
    // Desktop sizes
    const desktopSizeClass = index === 0 
      ? 'md:w-[550px] md:h-[400px]' 
      : position === 'center' 
        ? 'md:w-[500px] md:h-[350px]' 
        : 'md:w-[450px] md:h-[320px]';
    
    // Mobile sizes - all images are full width on mobile
    const mobileSizeClass = 'w-full h-[300px]';
      
    return `${mobileSizeClass} ${desktopSizeClass}`;
  };

  return (
    <section 
      id="final-year-project" 
      ref={sectionRef} 
      className="py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 mb-4">
            Final Year Project
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FKI Event Center with E-Certificate</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive event management system with automated e-certificate generation and distribution.
          </p>
        </div>
        
        {/* Mobile Gallery - Vertical Scrollable Design */}
        <div className="block md:hidden">
          <div className="space-y-10">
            {projectImages.map((image, index) => (
              <div 
                key={`mobile-${index}`}
                className={`relative bg-white/90 dark:bg-[#1E1E1D]/60 p-4 rounded-xl shadow-lg border border-emerald-100 dark:border-emerald-800/40 ${shouldShowImage(index) ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Pin marker with number */}
                <div className="absolute -left-3 -top-3 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-full shadow-lg z-10 transform -rotate-12 border-2 border-white dark:border-gray-800 animate-bounce-small">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pin-icon lucide-pin">
                    <path d="M12 17v5"/>
                    <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>
                  </svg>
                </div>
                
                {/* Image container with enhanced styling */}
                <div className="relative overflow-hidden rounded-lg shadow-md mb-4 border border-emerald-50 dark:border-emerald-900/40">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-[300px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Enhanced gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Preview label on the image */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-white">{image.alt}</span>
                  </div>
                </div>
                
                {/* Description card with improved styling */}
                <div className="relative px-5 py-4 -mt-3 bg-white/95 dark:bg-[#1E1E1D]/95 backdrop-blur-sm rounded-lg shadow-md border border-emerald-100 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-2">{image.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop Project gallery with animation */}
        <div className="hidden md:block mt-6 mb-6 relative">
          {/* Image gallery container with perspective effect */}
          <div 
            className={`relative flex flex-col items-center justify-center min-h-[700px] perspective-1000 ${imagesRevealed ? 'images-revealed' : ''}`}
          >
            {/* Images with different positions and reveal animations */}
            {projectImages.map((image, index) => {
              const positionClasses = getPositionClasses(image.position);
              const imageSizeClasses = getImageSizeClasses(index, image.position);
              
              return (
                <div 
                  key={`desktop-${index}`}
                  className={`transition-all duration-1000 shadow-xl rounded-lg overflow-hidden
                    ${positionClasses}
                    ${shouldShowImage(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                    ${index === 0 ? 'z-30' : image.position === 'center' ? 'z-25' : 'z-20'}
                    ${imageSizeClasses}
                  `}
                  style={{
                    transitionDelay: `${index * 300}ms`
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Project details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 md:mt-0">
          {/* Features column */}
          <div className="bg-white/80 dark:bg-[#1E1E1D]/30 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/20">
            <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                'Streamlined event registration and management',
                'Automated attendance tracking system',
                'Bulk certificate creation and distribution',
                'Volunteer management system',
                'Notification and reminder system'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies column */}
          <div className="bg-white/80 dark:bg-[#1E1E1D]/30 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800/20">
            <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">Technologies Used</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: 'Laravel',
                  description: 'Backend Framework',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  )
                },
                {
                  name: 'Blade and Livewire',
                  description: 'Frontend Framework',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  )
                },
                {
                  name: 'MySQL',
                  description: 'Database',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  )
                },
                {
                  name: 'Tailwind CSS',
                  description: 'UI Framework',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  )
                }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <svg className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {tech.icon}
                  </svg>
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FYPShowcase; 