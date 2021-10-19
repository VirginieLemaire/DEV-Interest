import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { toggleOpenNav } from '../../../../action/displayOptions';
import './nav-item-drop.scss';

const NavItemDrop = ({ children, icon }) => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.displayOptions);

  const { openNav } = useSelector((state) => state.displayOptions);

  return (
    <li className="nav-item">
      <a href="#" className={darkMode ? 'icon-button-drop icon-button-drop--dark' : 'icon-button-drop'} onClick={() => dispatch(toggleOpenNav())}>
        {icon}
      </a>

      {openNav && children}
    </li>
  );
};

NavItemDrop.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
};

NavItemDrop.defaultProps = {
  children: null,
  icon: null,
};

export default NavItemDrop;
