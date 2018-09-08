import React from 'react';
import HeroSection from './HeroSection';

const Vision = ({ vision, displayHtmlDirectly }) => {
  if (displayHtmlDirectly) {
    return (
      <HeroSection title="Vision" containerClass="has-text-centered" wrapClass="is-primary">
        <div className="is-size-5">{vision}</div>
      </HeroSection>
    );
  }
  return (
    <HeroSection title="Vision" containerClass="has-text-centered" wrapClass="is-primary">
      <div className="is-size-5" dangerouslySetInnerHTML={{ __html: vision }} />
    </HeroSection>
  );
};

export default Vision;
