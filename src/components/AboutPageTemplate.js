import React from 'react';
import PropTypes from 'prop-types';
import HeroSection from './HeroSection';
import MemberTemplate from './MemberTemplate';

const AboutPageTemplate = ({ members }) => {
  return (
    <HeroSection title="About Us">
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
