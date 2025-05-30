import React from 'react';
import PageTitle from '../components/PageTitle';
import FYPShowcase from '../components/FYPShowcase';
import OtherProjects from '../components/OtherProjects';

const Projects = () => {
  return (
    <div>
      <PageTitle title="Projects" />
      
      {/* FYP Showcase Section */}
      <FYPShowcase />
      
      {/* Other Projects Section */}
      <OtherProjects />
    </div>
  );
};

export default Projects; 