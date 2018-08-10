import React from 'react';

const makeClass = className => {
  return className ? ` ${className}` : '';
};

const HeroSection = ({ title, children, wrapClass, containerClass }) => {
  return (
    <section className={`hero${makeClass(wrapClass)}`}>
      <div className="hero-body">
        <div className={`container${makeClass(containerClass)}`}>
          <h2 className="title is-primary-font has-text-centered">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

HeroSection.defaultProps = {
  wrapClass: '',
  containerClass: '',
};

export default HeroSection;
