import React from 'react';
import HeroSection from './HeroSection';
import Service from './Service';

const HomePageTemplate = ({ vision, services }) => (
  <>
    <HeroSection title="Vision" containerClass="has-text-centered" wrapClass="is-primary">
      <p className="is-size-5" dangerouslySetInnerHTML={{ __html: vision }} />
    </HeroSection>
    {services.length > 0 && (
      <div id="services">
        <HeroSection title="What We Do">
          <div className="tile is-ancestor">
            {services.map((service, i) => (
              <div key={`service-${i}`} className="tile is-parent">
                <Service service={service} />
              </div>
            ))}
          </div>
        </HeroSection>
      </div>
    )}
  </>
);

HomePageTemplate.defaultProps = {
  services: [],
};

export default HomePageTemplate;
