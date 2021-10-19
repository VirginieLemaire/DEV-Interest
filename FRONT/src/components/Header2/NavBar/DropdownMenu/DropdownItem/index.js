import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleOpenNav } from '../../../../../action/displayOptions';

import './dropdown-item.scss';

const DropdownItem = ({
  children, leftIcon, rightIcon, onClick, to,
}) => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.displayOptions);

  const handleClick = () => {
    dispatch(toggleOpenNav());
    onClick();
  };
  return (
    <Link to={to} className={darkMode ? 'menu-item--dark' : 'menu-item'} onClick={handleClick}>
      <span className={darkMode ? 'icon-button-drop-item--dark' : 'icon-button-drop-item'}>
        {leftIcon}
      </span>

      {children}

      <span className="icon-right">
        {rightIcon}
      </span>
    </Link>
  );
};
DropdownItem.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

DropdownItem.defaultProps = {
  to: '#',
  onClick: null,
  children: null,
  leftIcon: null,
  rightIcon: null,
};

export default DropdownItem;
