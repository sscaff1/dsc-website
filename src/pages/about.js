import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AboutPageTemplate from '../components/AboutPageTemplate';

const AboutPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const members = edges.map(edge => ({
    ...edge.node.frontmatter,
    bio: edge.node.html,
  }));
  return (
    <Layout heroBodyTitle="About Us">
      <AboutPageTemplate members={members} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "member-section" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
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
            photo
            
          }
        }
      }
    }
  }
`;
