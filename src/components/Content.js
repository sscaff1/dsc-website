import React from 'react';

export const Content = ({ content }) => <div dangerouslySetInnerHTML={{ __html: content }} />;

export default Content;
