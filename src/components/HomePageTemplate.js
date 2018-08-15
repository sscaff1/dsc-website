import React from 'react';
import HeroSection from './HeroSection';

const HomePageTemplate = ({ vision, members, services, options }) => (
  <>
    <HeroSection title="Vision" containerClass="has-text-centered" wrapClass="is-primary">
      <p dangerouslySetInnerHTML={{ __html: vision }} />
    </HeroSection>
    {/* <HeroSection title="About Us">
      <div className="tile is-ancestor">
        {members.map((person, i) => (
          <div key={`person-${i}`} className="tile is-parent">
            <About {...person} />
          </div>
        ))}
      </div>
    </HeroSection>
    <HeroSection title="What We Do" wrapClass="is-primary">
      <div className="tile is-ancestor">
        {services.map((service, i) => (
          <div key={`service-${i}`} className="tile is-parent">
            <Service service={service} />
          </div>
        ))}
      </div>
    </HeroSection> */}
  </>
);

export default HomePageTemplate;