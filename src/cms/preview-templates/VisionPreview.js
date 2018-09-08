import React from 'react';
import Vision from '../../components/Vision';

const VisionPreview = ({ widgetFor }) => {
  return <Vision vision={widgetFor('body')} displayHtmlDirectly />;
};

export default VisionPreview;
