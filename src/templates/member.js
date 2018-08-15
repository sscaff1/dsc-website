import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MemberTemplate from '../components/MemberTemplate';

const MemberPage = ({ data }) => {
  const { markdownRemark: member } = data;

  return (
    <Layout>
      <MemberTemplate {...member.frontmatter} bio={member.html} />
    </Layout>
  );
};

export default MemberPage;

export const memberPageQuery = graphql`
  query MemberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        name
        awards {
          name
          timeframe
        }
        education {
          college
          concentration
          degree
          location
          timeframe
        }
        email
        languages {
          name
          proficiency
        }
      }
    }
  }
`;
