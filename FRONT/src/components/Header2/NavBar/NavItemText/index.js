import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './nav-item-text.scss';

const NavItemText = ({
  to, text, onClick,
}) => (
  <li className="nav-item">
    <Link to={to} className="nav-text-button" onClick={onClick}>
      <p>{text}</p>
    </Link>
  </li>
);

NavItemText.propTypes = {
  to: PropTypes.string,
  text: PropTypes.node,
  onClick: PropTypes.func,
};

NavItemText.defaultProps = {
  text: null,
  onClick: null,
  to: '#',
};

export default NavItemText;
