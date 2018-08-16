import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    const { options } = this.props;
    return (
      <form name="contact" className="column box" method="POST" data-netlify="true">
        <div className="field">
          <div className="control has-icons-left">
            <input className="input is-large" type="text" placeholder="Name" />
            <span className="icon is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input className="input is-large " type="email" placeholder="Email" />
            <span className="icon is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="select is-large is-fullwidth">
              <select>
                <option value="-1">Please Select a Subject</option>
                {options.map((option, i) => (
                  <option key={`select-${i}`}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" type="text" placeholder="Custom Message" />
          </div>
        </div>
        <div data-netlify-recaptcha />
        <input type="submit" className="button is-large is-fullwidth is-primary" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
