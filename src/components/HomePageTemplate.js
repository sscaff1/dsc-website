import React from 'react';
import HeroSection from './HeroSection';
import ContactForm from './ContactForm';
import Service from './Service';
import About from './About';

const HomePageTemplate = ({ vision, members, services, options }) => (
  <>
    <HeroSection title="Vision" containerClass="has-text-centered" wrapClass="is-primary">
      <p dangerouslySetInnerHTML={{ __html: vision }} />
    </HeroSection>
    <HeroSection title="About Us">
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
    </HeroSection>
    <HeroSection title="Contact Us">
      <div className="columns container" style={{ marginTop: '1.5rem' }}>
        <ContactForm options={options} />
        <div className="column is-1" />
        <div className="column box is-4" style={{ marginBottom: '1.5rem' }}>
          <h4 className="title has-text-centered">Contact Information:</h4>
          <div className="content">
            <a href="mailto:john@districtsportsconsulting.com" className="title is-5 has-text-link">
              <i className="fas fa-envelope" />
              &nbsp;&nbsp;john@districtsportsconsulting.com
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12424.465502916695!2d-77.00336835781306!3d38.87557917318286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9ccf2db5e87%3A0x3bdfd64eac350b14!2sNavy+Yard%2C+Washington%2C+DC!5e0!3m2!1sen!2sus!4v1533848295293"
              style={{ border: 0, width: '100%', height: '300px' }}
              title="Google Map Location"
            />
          </div>
        </div>
      </div>
    </HeroSection>
  </>
);

export default HomePageTemplate;
