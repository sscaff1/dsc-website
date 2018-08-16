import React from 'react';
import Project from './Project';
import HeroSection from './HeroSection';

const ProjectPageTemplate = ({ projects }) => {
  return (
    <HeroSection>
      {projects.map((project, i) => (
        <Project key={`project-${i}`} {...project} />
      ))}
    </HeroSection>
  );
};

export default ProjectPageTemplate;
