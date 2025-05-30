import React from 'react';
import PageTitle from '../components/PageTitle';
import AboutSection from '../components/About';
import Skills from '../components/Skills';

const About = () => {
  return (
    <div>
      <PageTitle title="About" />
      
      {/* About Me Section */}
      <AboutSection />

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default About; 