import PropTypes from 'prop-types';

import './navbar.scss';

const Navbar = ({ children }) => {
  const x = 1;
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {children}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

Navbar.defaultProps = {
  children: null,
};

export default Navbar;
