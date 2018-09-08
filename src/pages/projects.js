import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const projects = edges.map(edge => ({
    ...edge.node.frontmatter,
    description: edge.node.html,
  }));
  return (
    <Layout heroBodyTitle="Current Club Projects">
      <ProjectPageTemplate projects={projects} />
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query ProjectsPage {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "project-section" } } }) {
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
