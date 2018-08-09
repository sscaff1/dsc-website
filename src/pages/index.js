import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import About from '../components/About';
import Service from '../components/Service';

const people = [
  {
    id: 1,
    name: 'John Bello',
    title: 'Owner',
    picture: '',
    bio:
      'John began his professional career in sport working with D.C. United Academy as an age group head coach within Major League Soccer.  He has worked in all levels of youth development including grassroots programming,   Zone 1 Head Coach (U13-U15) and club curriculum development and implementation. John grew up in Sarasota, FL and began his youth playing career at IMG Soccer Academy.  He then attended and played Division 1 soccer at the College of Charleston in Charleston, South Carolina, while completing his undergraduate degree in Exercise Science in 2010.',
    qualification: 'USSF A-Youth License:  Completed January 2018',
    education: [
      {
        college: 'College of Charleston',
        location: 'Charleston, SC',
        degree: 'Bachelor of Science',
        concentration: 'Physical Education with a concentration in Exercise Science',
        timeframe: '2005-2010',
        order: 1,
      },
    ],
    awards: [
      {
        name: 'US Soccer Development Academy U15 Coach of The Year Eastern Conference',
        timeframe: '2017/2018',
      },
    ],
  },
  {
    id: 2,
    name: 'Steven Nagy',
    title: 'Self Regulation Coach',
    picture: '',
    bio:
      'Originally from Cartagena Colombia, Nagy grew up playing soccer at Colegio Bolivar prior to accepting a scholarship to play Division 1 soccer at the College of Charleston in Charleston, South Carolina. Nagy holds a B.S in Elementary Education and a Master’s degree in Science and Math for Teachers, both from the College of Charleston.  He has taught Middle School Science at the American School Foundation of Monterrey in Mexico for 3 years and is currently enrolled at George Mason University to complete his Ph. D in Educational Leadership, with a secondary emphasis in Educational Psychology and International Education (Expected, May 2019).',
    qualifications: '',
    education: [
      {
        order: 1,
        college: 'George Mason University',
        location: 'Fairfax, VA',
        degree: 'Doctor of Philosophy',
        concentration: 'Educational Leadership',
        timeframe: 'Expected June 2019',
      },
      {
        order: 2,
        college: 'College of Charleston',
        location: 'Charleston, SC',
        degree: 'Master of Education',
        concentration: 'Math and Science',
        timeframe: 'May 2009',
      },
      {
        order: 3,
        college: 'College of Charleston',
        location: 'Charleston, SC',
        degree: 'Bachelor of Science',
        concentration: 'Elementary Education',
        timeframe: 'May 2009',
      },
    ],
    awards: [
      {
        name:
          'Distinguished Achievement Award for Educational Excellence presented by The Association of Educational Publishers for Sweetgrass Science article, recognized by the National Science Teachers Association',
        timeframe: '2013',
      },
    ],
    languages: [
      {
        name: 'English',
        proficiency: 'Native reading, written, and oral fluency',
      },
      {
        name: 'Spanish',
        proficiency: 'Native reading, written, and oral fluency',
      },
    ],
  },
];

const services = [
  {
    id: 11,
    title: 'Individual athlete development game analysis and action plan',
    description:
      'Players are guided on effective processes to analyze match film at the team and individual level.  These workflows will improve the players ability to recognize key player behaviors, significant tactical trends and strategies of an opponent. Additionally, players will gain critical feedback on key areas for individual improvement.  With this knowledge our coaches will take the time to guide players in creating a concrete action plan and consistent monitoring system in order to improve these areas throughout the developmental phases of a youth athlete.',
  },
  {
    id: 12,
    title: 'Self regulation training',
    description:
      'Youth Sport Programs have been recognized to have positive impact on youth development through helping young athletes to learn about themselves and to develop life skills.  These may include physical (e.g., healthy diet), behavioral (e.g., goal setting) or cognitive (e.g., self-talk). Many of these skills necessary to succeed in sport are transferable to other life contexts, including problem solving, time management, goal setting, coping with failures and performing under pressure. Our goal is to tailor a personal approach for each student-athlete to develop and incorporate self-regulation skills into their day-to-day lives on and off the field.',
  },
  {
    id: 13,
    title: 'Club curriculum & coach development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit veniam alias? Inventore quia, totam perspiciatis suscipit error molestias consequuntur sequi temporibus qui perferendis nostrum harum recusandae, nihil tempora nulla.',
  },
  {
    id: 14,
    title: 'Individual and small group training',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde, culpa cum commodi ex ducimus. Optio facere dolor non id magnam sit ullam rerum, ut ab harum, similique, exercitationem nihil.',
  },
];

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="title is-primary-font">Vision</h2>
              <p>
                District Sports Consultants was created with the vision to offer customized sport
                solutions for youth athletes and athletic clubs that will help enhance the holistic
                development of the student-athlete within the current sport landscape in the United
                States.
              </p>
              <p>
                Our belief is that working within a “team” is the best vehicle for individual growth
                and success. Through the combination of our staff, available resources and
                technology, we take a personalized approach to individual development, focused on
                sport specific training, social development, self regulation and education for
                players, coaches and organizations.
              </p>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="container ">
              <h2 className="title is-primary-font has-text-centered">About Us</h2>
              <div className="columns">
                {people.map(person => (
                  <div key={person.id} className="column">
                    <About person={person} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h2 className="title is-primary-font has-text-centered">What we do</h2>
              <div className="level">
                {services.map(service => (
                  <div key={service.id} className="column">
                    <Service service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
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
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
