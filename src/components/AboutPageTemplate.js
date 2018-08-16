import React from 'react';
import HeroSection from './HeroSection';
import MemberTemplate from './MemberTemplate';

const AboutPageTemplate = ({ members }) => {
  return (
    <HeroSection>
      <div className="tile is-ancestor">
        {members.map((person, i) => (
          <div key={`person-${i}`} className="tile is-parent">
            <MemberTemplate {...person} />
          </div>
        ))}
      </div>
    </HeroSection>
  );
};

export default AboutPageTemplate;
