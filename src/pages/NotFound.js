import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 dark:text-white">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 dark:text-white">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/"
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound; 