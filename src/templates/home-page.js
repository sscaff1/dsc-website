import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import HomePageTemplate from '../components/HomePageTemplate';

export default class IndexPage extends React.Component {
  render() {
    const {
      data: {
        markdownRemark: { html },
        allMarkdownRemark: { edges },
      },
    } = this.props;
    const services = edges.map(({ node }) => {
      const { title } = node.frontmatter;
      return {
        title,
        description: node.html,
      };
    });

    return (
      <Layout contactFormIsPrimary>
        <HomePageTemplate vision={html} services={services} />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "service-section" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
