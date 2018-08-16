import React from 'react';

const Service = ({ service: { title, description } }) => {
  return (
    <div className="tile box">
      <div>
        <p className="title is-5 has-text-grey has-text-centered">{title}</p>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default Service;
