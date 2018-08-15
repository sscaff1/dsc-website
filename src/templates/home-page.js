import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import HomePageTemplate from '../components/HomePageTemplate';

export default class IndexPage extends React.Component {
  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { members, vision, services, options },
          html,
        },
      },
    } = this.props;
    console.log(this.props.data);

    return (
      <Layout>
        <HomePageTemplate members={members} vision={vision} services={services} options={options} />
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
      frontmatter {
        vision
      }
    }
  }
`;
