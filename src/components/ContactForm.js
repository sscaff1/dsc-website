import React, { Component } from 'react';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    thankyou: false,
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { thankyou: _, ...state } = this.state;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    }).then(() => this.setState({ thankyou: true }));
  };

  render() {
    const { options } = this.props;
    if (this.state.thankyou) {
      return (
        <div className="column box">
          <h2 className="is-size-3">
            Thank you for your feedback. We will get back to you shortly.
          </h2>
        </div>
      );
    }
    return (
      <form
        name="contact"
        className="column box"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-large"
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
            <span className="icon is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-large "
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
            <span className="icon is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="select is-large is-fullwidth">
              <select name="subject" onChange={this.handleChange}>
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
            <textarea
              className="textarea is-large"
              type="text"
              placeholder="Custom Message"
              name="message"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <input type="submit" className="button is-large is-fullwidth is-primary" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
