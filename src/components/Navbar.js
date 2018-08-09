import React, { Component } from 'react';
import { css } from 'react-emotion';
import hero from '../img/hero.jpeg';
import logo from '../img/LOGO.png';

const styles = {
  heroSection: css`
    position: relative;
    background-image: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: 700px) {
      background-position-y: -200px;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(255, 255, 255, 0.7);
    }
    .hero-body {
      z-index: 10;
    }
    img {
      max-height: 150px;
    }
  `,
};

class Navbar extends Component {
  state = {
    isActive: false,
    backgroundColorTransparency: 0,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const { backgroundColorTransparency } = this.state;
      if (window.scrollY >= 255) {
        return;
      }
      this.setState({ backgroundColorTransparency: window.scrollY / 255 });
    });
  }

  handleMobileClick = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }));
  };

  render() {
    const { backgroundColorTransparency, isActive } = this.state;
    const activeClass = isActive ? ' is-active' : '';
    return (
      <section className={`hero is-medium ${styles.heroSection}`}>
        <div className="hero-head">
          <nav
            className="navbar is-fixed-top"
            style={{ background: `rgba(255, 255, 255, ${backgroundColorTransparency})` }}
          >
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src={logo} alt="Logo" />
                </a>
                <span
                  className={`navbar-burger burger${activeClass}`}
                  onClick={this.handleMobileClick}
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className={`navbar-menu${activeClass}`}>
                <div className="navbar-end">
                  <a className="navbar-item is-primary">Home</a>
                  <a className="navbar-item is-primary">About</a>
                  <a className="navbar-item is-primary">Services</a>
                  <a className="navbar-item is-primary">New Client</a>
                  <a className="navbar-item is-primary">Current Club Projects</a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
