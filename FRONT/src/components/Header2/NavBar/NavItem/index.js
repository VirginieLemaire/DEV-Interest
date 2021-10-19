import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';
import './nav-item.scss';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const NavItem = ({
  to, icon, text, onClick, iconActive, pathActive, id,classText,
}) => {
  const pathname = usePathname();

  return (
    <li className="nav-item" id={id}>
      <Link to={to} className={pathActive.find((path) => path === pathname) ? 'icon-active' : 'icon-button'} onClick={onClick}>
        {pathActive.find((path) => path === pathname) ? iconActive : icon}
      </Link>
      <div className={classText}>{text}</div>
    </li>
  );
};

NavItem.propTypes = {
  classText: PropTypes.string,
  id: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.node,
  icon: PropTypes.node,
  iconActive: PropTypes.node,
  onClick: PropTypes.func,
  pathActive: PropTypes.array,
};

NavItem.defaultProps = {
  classText: '',
  id: '',
  text: null,
  icon: null,
  iconActive: null,
  onClick: null,
  to: '#',
  pathActive: null,
};

export default NavItem;
