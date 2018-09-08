import React from 'react';
import HeroSection from './HeroSection';
import Service from './Service';
import Vision from './Vision';

const HomePageTemplate = ({ vision, services }) => (
  <>
    <Vision vision={vision} />
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
  displayHtmlDirectly: false,
};

export default HomePageTemplate;
