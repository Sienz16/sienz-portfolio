import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero />

      {/* Featured Skills */}
      <section className="py-16">
        <h2 className="section-title text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Web Development',
              description: 'Building responsive and modern web applications using React and other cutting-edge technologies.',
              icon: '💻',
            },
            {
              title: 'UI/UX Design',
              description: 'Creating intuitive and beautiful user interfaces with a focus on user experience.',
              icon: '🎨',
            },
            {
              title: 'Mobile Development',
              description: 'Developing cross-platform mobile applications that work seamlessly across devices.',
              icon: '📱',
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card text-center"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Timeline Section */}
      <Timeline />
    </div>
  );
};

export default Home; 