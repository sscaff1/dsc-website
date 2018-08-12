import React from 'react';

export const Content = ({ content }) => <p dangerouslySetInnerHTML={{ __html: content }} />;
export default Content;
