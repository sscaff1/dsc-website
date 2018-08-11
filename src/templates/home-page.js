import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import About from '../components/About';
import Service from '../components/Service';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/HeroSection';

const people = [
  {
    id: 1,
    name: 'John Bello',
    email: 'john@districtsportsconsulting.com',
    title: 'Owner',
    picture: '',
    bio:
      'John began his professional career in sport working with D.C. United Academy as an age group head coach within Major League Soccer.  He has worked in all levels of youth development including grassroots programming,   Zone 1 Head Coach (U13-U15) and club curriculum development and implementation. John grew up in Sarasota, FL and began his youth playing career at IMG Soccer Academy.  He then attended and played Division 1 soccer at the College of Charleston in Charleston, South Carolina, while completing his undergraduate degree in Exercise Science in 2010.',
    qualifications: 'USSF A-Youth License:  Completed January 2018',
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
    languages: [
      {
        name: 'English',
        proficiency: 'Native reading, written, and oral fluency',
      },
    ],
  },
  {
    id: 2,
    name: 'Steven Nagy',
    email: 'steven@districtsportsconsulting.com',
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

const options = [
  'Individual Athlete Development Game Analysis & Action Plan',
  'Self Regulation Training',
  'Club Curriculum & Coach Development',
  'Individual & Small Group Training',
  'Other',
];

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <HeroSection title="Vision" containerClass="has-text-centered" wrapClass="is-primary">
          <p>
            District Sports Consultants was created with the vision to offer customized sport
            solutions for youth athletes and athletic clubs that will help enhance the holistic
            development of the student-athlete within the current sport landscape in the United
            States.
          </p>
          <p>
            Our belief is that working within a “team” is the best vehicle for individual growth and
            success. Through the combination of our staff, available resources and technology, we
            take a personalized approach to individual development, focused on sport specific
            training, social development, self regulation and education for players, coaches and
            organizations.
          </p>
        </HeroSection>
        <HeroSection title="About Us">
          <div className="tile is-ancestor">
            {people.map(person => (
              <div key={person.id} className="tile is-parent">
                <About {...person} />
              </div>
            ))}
          </div>
        </HeroSection>
        <HeroSection title="What We Do" wrapClass="is-primary">
          <div className="tile is-ancestor">
            {services.map(service => (
              <div key={service.id} className="tile is-parent">
                <Service service={service} />
              </div>
            ))}
          </div>
        </HeroSection>
        <HeroSection title="Contact Us">
          <div className="columns container" style={{ marginTop: '1.5rem' }}>
            <ContactForm options={options} />
            <div className="column is-1" />
            <div className="column box is-4" style={{ marginBottom: '1.5rem' }}>
              <h4 className="title has-text-centered">Contact Information:</h4>
              <div className="content">
                <a
                  href="mailto:john@districtsportsconsulting.com"
                  className="title is-5 has-text-link"
                >
                  <i className="fas fa-envelope" />&nbsp;&nbsp;john@districtsportsconsulting.com
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12424.465502916695!2d-77.00336835781306!3d38.87557917318286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9ccf2db5e87%3A0x3bdfd64eac350b14!2sNavy+Yard%2C+Washington%2C+DC!5e0!3m2!1sen!2sus!4v1533848295293"
                  style={{ border: 0, width: '100%', height: '300px' }}
                />
              </div>
            </div>
          </div>
        </HeroSection>
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
      frontmatter {
        vision
      }
    }
  }
`;
