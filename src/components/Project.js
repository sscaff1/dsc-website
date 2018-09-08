import React from 'react';

const Project = ({ title, description, displayHtmlDirectly }) => {
  return (
    <div className="box">
      <div>
        <p className="title is-3">{title}</p>
        {displayHtmlDirectly ? (
          <div>{description}</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </div>
  );
};

Project.defaultProps = {
  displayHtmlDirectly: false,
};

export default Project;
