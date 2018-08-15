import React from 'react';
import HeroSection from './HeroSection';
import Service from './Service';

const HomePageTemplate = ({ vision, members, services, options }) => (
  <>
    <HeroSection title="Vision" containerClass="has-text-centered" wrapClass="is-primary">
      <p dangerouslySetInnerHTML={{ __html: vision }} />
    </HeroSection>
    <HeroSection title="What We Do">
      <div className="tile is-ancestor">
        {services.map((service, i) => (
          <div key={`service-${i}`} className="tile is-parent">
            <Service service={service} />
          </div>
        ))}
      </div>
    </HeroSection>
  </>
);

export default HomePageTemplate;
