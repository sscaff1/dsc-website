exports.onRouteUpdate = ({ location }) => {
  setTimeout(() => {
    if (location.hash) {
      document.querySelector(`${location.hash}`).scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, 0);
};
