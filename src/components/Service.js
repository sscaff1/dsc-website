import React from 'react';
import styled from 'react-emotion';

const Service = ({ service: { title, description } }) => {
  return (
    <div className="tile box">
      <div>
        <p className="title is-5 has-text-grey has-text-centered">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
