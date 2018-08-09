import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';

import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Ghost Rider Pictures">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous"
      />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
