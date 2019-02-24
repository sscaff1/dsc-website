import React, { Component } from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import hero from '../img/hero.jpeg';
import logo from '../img/LOGO.png';
import smallLogo from '../img/LOGO1.png';

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
      img {
        max-height: 150px;
      }
      @media (max-width: 750px) {
        img {
          padding-top: 20px;
        }
      }
    }
  `,
};

class Navbar extends Component {
  static defaultProps = {
    heroBodyTitle: '',
  };

  state = {
    isActive: false,
    backgroundColorTransparency: 0,
  };

  scrollFactor = 1.3;

  componentDidMount() {
    const SCROLL_FACTOR = this.scrollFactor;
    document.addEventListener('scroll', this.handleScroll);
    const currentScroll =
      window.document.documentElement.scrollTop * SCROLL_FACTOR;
    this.setState({ backgroundColorTransparency: currentScroll / 255 });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const SCROLL_FACTOR = this.scrollFactor;
    const { backgroundColorTransparency } = this.setState;
    const currentScroll =
      window.document.documentElement.scrollTop * SCROLL_FACTOR;
    if (currentScroll >= 255) {
      if (backgroundColorTransparency === 1) {
        return;
      }
      return this.setState({ backgroundColorTransparency: 1 });
    }
    this.setState({
      backgroundColorTransparency: currentScroll / 255,
    });
  };

  handleMobileClick = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }));
  };

  render() {
    const { backgroundColorTransparency, isActive } = this.state;
    const { heroBodyTitle } = this.props;
    const activeClass = isActive ? ' is-active' : '';
    return (
      <section className={`hero is-medium ${styles.heroSection}`}>
        <div className="hero-head">
          <nav
            className="navbar is-fixed-top"
            style={{
              background: `rgba(255, 255, 255, ${backgroundColorTransparency})`,
            }}
          >
            <div className="container">
              <div className={`navbar-brand${activeClass}`}>
                <Link to="/" className="navbar-item">
                  <img src={smallLogo} alt="Logo" />
                </Link>
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
                  <Link to="/" className="navbar-item is-primary">
                    Home
                  </Link>
                  <Link to="/about" className="navbar-item is-primary">
                    About
                  </Link>
                  <Link to="/#services" className="navbar-item is-primary">
                    Services
                  </Link>
                  <Link to="/new-client" className="navbar-item is-primary">
                    New Client
                  </Link>
                  <Link to="/projects" className="navbar-item is-primary">
                    Current Club Projects
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            {heroBodyTitle ? (
              <h1
                className="is-size-1  is-primary-font"
                style={{ minHeight: '150px' }}
              >
                {heroBodyTitle}
              </h1>
            ) : (
              <img src={logo} alt="Logo" />
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
