import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/About';

const About = () => {
  const skills = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Laravel', level: 75 },
    { name: 'Vue.js', level: 70 },
    { name: 'UI/UX Design', level: 65 },
  ];

  return (
    <div>
      {/* About Me Section */}
      <AboutSection />

      {/* Skills Section */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="section-title text-center">Skills</h2>
        <div className="card">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-emerald-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 