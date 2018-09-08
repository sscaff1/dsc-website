import React from 'react';

const Service = ({ service: { title, description }, displayHtmlDirectly }) => {
  return (
    <div className="tile box">
      <div>
        <p className="title is-5 has-text-grey has-text-centered">{title}</p>
        {displayHtmlDirectly ? (
          <div>{description}</div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </div>
  );
};

Service.defaultProps = {
  displayHtmlDirectly: false,
};

export default Service;
