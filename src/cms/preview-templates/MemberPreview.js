import React from 'react';
import MemberTemplate from '../../components/MemberTemplate';

const getItem = (entry, key, fieldNames) => {
  const { size } = entry.getIn(['data', key]);
  const results = [];
  for (let i = 0; i < size; i += 1) {
    results.push(
      fieldNames.reduce(
        (innerObj, fieldName) => ({
          ...innerObj,
          [fieldName]: entry.getIn(['data', key, i, fieldName]),
        }),
        {}
      )
    );
  }
  return results;
};

const MemberPreview = ({ entry, widgetFor, widgetsFor }) => {
  const education = getItem(entry, 'education', [
    'college',
    'location',
    'degree',
    'concentration',
    'timeframe',
  ]);
  const awards = getItem(entry, 'awards', ['name', 'timeframe']);
  const languages = getItem(entry, 'languages', ['name', 'proficiency']);
  return (
    <MemberTemplate
      name={entry.getIn(['data', 'name'])}
      title={entry.getIn(['data', 'title'])}
      photo={entry.getIn(['data', 'photo'])}
      bio={widgetFor('body')}
      qualifications={entry.getIn(['data', 'qualifications'])}
      education={education}
      awards={awards}
      languages={languages}
      email={entry.getIn(['data', 'email'])}
      displayHtmlDirectly
    />
  );
};

export default MemberPreview;
