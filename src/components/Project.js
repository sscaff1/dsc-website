import React from 'react';

const Project = ({ title, description }) => {
  return (
    <div className="box">
      <div>
        <p className="title is-3">{title}</p>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default Project;
