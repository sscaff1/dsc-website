import React from 'react';
import Service from '../../components/Service';

const ServicePreview = ({ entry, widgetFor }) => {
  return (
    <Service
      service={{ title: entry.getIn(['data', 'title']), description: widgetFor('body') }}
      displayHtmlDirectly
    />
  );
};

export default ServicePreview;
