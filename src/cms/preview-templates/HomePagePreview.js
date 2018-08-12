import React from 'react';
import HomePageTemplate from '../../components/HomePageTemplate';

const membersMap = [
  'name',
  'email',
  'title',
  'bio',
  'photo',
  'qualifications',
  {
    education: ['order', 'college', 'location', 'degree', 'concentration', 'timeframe'],
    awards: ['name', 'timeframe'],
    languages: ['name', 'proficiency'],
  },
];

const reduceItems = (obj, currItem, member) => {
  if (typeof currItem === 'string') {
    return {
      ...obj,
      [currItem]: member.getIn(['data', currItem]),
    };
  }
  return {
    ...obj,
    ...Object.keys(currItem).reduce((allKeys, key) => {
      if (!member.getIn(['data', key])) return allKeys;

      const { size } = member.getIn(['data', key]);
      for (let i = 0; i < size; i++) {
        const keyItem = currItem[key].reduce((innerObj, fieldName) => {
          return {
            ...innerObj,
            [fieldName]: member.getIn(['data', key, i, fieldName]),
          };
        }, {});
        if (allKeys[key]) {
          return {
            ...allKeys,
            [key]: allKeys[key].concat(keyItem),
          };
        }
        return {
          ...allKeys,
          [key]: [keyItem],
        };
      }
    }, {}),
  };
};

const getMembers = widgetsFor => {
  const members = [];
  widgetsFor('members').forEach(member => {
    members.push(
      membersMap.reduce((members, currItem) => reduceItems(members, currItem, member), {})
    );
  });
  return members;
};

const HomePagePreview = ({ entry, widgetsFor }) => {
  return (
    <HomePageTemplate
      members={getMembers(widgetsFor)}
      vision={entry.getIn(['data', 'vision'])}
      services={[]}
      options={[]}
    />
  );
};

export default HomePagePreview;
