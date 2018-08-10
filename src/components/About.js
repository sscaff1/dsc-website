import React from 'react';

const AboutSection = ({ title, childProp, children }) =>
  childProp ? (
    <>
      <p className="has-text-weight-bold" style={{ marginBottom: 0 }}>
        <u>{title}</u>
      </p>
      {children}
    </>
  ) : null;

const About = ({
  name,
  title,
  picture,
  bio,
  qualifications,
  education,
  awards,
  languages,
  email,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">
              {name} - {title}
            </p>
            <p className="subtitle is-6">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>

        <div className="content">
          <p>{bio}</p>
          <AboutSection title="Qualifications" childProp={qualifications}>
            <p className="is-marginless is-paddingless">{qualifications}</p>
          </AboutSection>

          <AboutSection title="Education" childProp={education.length}>
            {education.map((e, i) => (
              <p className="is-marginless is-paddingless" key={`education-${i}`}>
                {e.college} ({e.location}) - {e.degree}{' '}
                <span className="is-italic">({e.concentration})</span> - {e.timeframe}
              </p>
            ))}
          </AboutSection>

          <AboutSection title="Awards" childProp={awards.length}>
            {awards.map((a, i) => (
              <p className="is-marginless is-paddingless">
                {a.name} - {a.timeframe}
              </p>
            ))}
          </AboutSection>

          <AboutSection title="Languages" childProp={languages.length}>
            {languages.map((l, i) => (
              <p className="is-marginless is-paddingless">
                {l.name} - {l.proficiency}
              </p>
            ))}
          </AboutSection>
        </div>
      </div>
    </div>
  );
};

About.defaultProps = {
  qualifications: '',
  education: [],
  awards: [],
  languages: [],
};

export default About;
