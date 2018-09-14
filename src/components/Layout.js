import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ContactForm from './ContactForm';

import './all.scss';

const options = [
  'Individual Athlete Development Game Analysis & Action Plan',
  'Self Regulation Training',
  'Club Curriculum & Coach Development',
  'Individual & Small Group Training',
  'Other',
];

const Layout = ({ children, contactFormIsPrimary, heroBodyTitle }) => (
  <div>
    <Helmet title="District Sports Consulting">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous"
      />
      <meta name="description" content="Discover how we can help enhance player development through individual training, video analysis, off field performance coaching or club curriculum development for soccer players and organizations." />
      <meta name="keywords" content="Sports Consulting, Soccer expert, soccer consulting, soccer coach help, sports program development, Soccer Curriculum, soccer trainer DC, individual coaching,  private soccer coach, performance coaching, sports psychology soccer, life coaching" />
    </Helmet>
    <Navbar heroBodyTitle={heroBodyTitle} />
    <div>{children}</div>
    <HeroSection title="Contact Us" wrapClass={contactFormIsPrimary ? 'is-primary' : ''}>
      <div className="columns container" style={{ marginTop: '1.5rem' }}>
        <ContactForm options={options} />
        <div className="column is-1" />
        <div className="column box is-4" style={{ marginBottom: '1.5rem' }}>
          <h4 className={`title has-text-centered${contactFormIsPrimary ? ' has-text-grey' : ''}`}>
            Contact Information:
          </h4>
          <div className="content">
            <a
              href="mailto:john@districtsportsconsulting.com"
              className="title is-size-6 has-text-link"
              style={{ whiteSpace: 'noWrap' }}
            >
              <i className="fas fa-envelope" />
              &nbsp;&nbsp;john@districtsportsconsulting.com
            </a>
            <h3>Providing services in the District of Columbia, Maryland and Virginia.</h3>
          </div>
        </div>
      </div>
    </HeroSection>
  </div>
);

Layout.defaultProps = {
  heroBodyTitle: '',
};

export default Layout;
