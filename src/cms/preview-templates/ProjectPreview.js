import React from 'react';
import Project from '../../components/Project';

const ProjectPreview = ({ entry, widgetFor }) => {
  return (
    <Project
      title={entry.getIn(['data', 'title'])}
      description={widgetFor('body')}
      displayHtmlDirectly
    />
  );
};

export default ProjectPreview;
