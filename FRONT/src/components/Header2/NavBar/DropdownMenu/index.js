import './dropdown-menu.scss';
import { RiShutDownLine } from '@react-icons/all-files/ri/RiShutDownLine';
import { BsReverseLayoutTextSidebarReverse } from '@react-icons/all-files/bs/BsReverseLayoutTextSidebarReverse';
import { GiTechnoHeart } from '@react-icons/all-files/gi/GiTechnoHeart';
import { BsPen } from '@react-icons/all-files/bs/BsPen';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DropdownItem from './DropdownItem';
import { userApiLogout, userLogout } from '../../../../action/userCurrent';
import ToggleButton from '../../../GenericComponents/ToggleButton';
import { darkModeToggle } from '../../../../action/displayOptions';

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { darkMode } = useSelector((state) => state.displayOptions);

  const { username, id } = useSelector((state) => state.userCurrent);

  const handleDisconnectClick = () => {
    dispatch(userApiLogout())
    history.push('/');
  };

  return (
    <div className={darkMode ? 'dropdown dropdown--dark' : 'dropdown'}>

      <div className={darkMode ? 'menu menu--dark' : 'menu'}>
        <DropdownItem
          leftIcon={<GiTechnoHeart />}
          onClick={() => history.push(`/${username.toLowerCase()}/${id}/bookmarks/favorites`)}
        >
          <p>Favoris</p>
        </DropdownItem>
        <DropdownItem
          leftIcon={<BsPen />}
          onClick={() => history.push(`/${username.toLowerCase()}/${id}/bookmarks/contributions`)}
        >
          <p>Mes contributions</p>
        </DropdownItem>
        <DropdownItem
          leftIcon={<BsReverseLayoutTextSidebarReverse />}
          onClick={() => history.push(`/${username.toLowerCase()}/account`)}
        >
          <p>Paramètres de compte</p>
        </DropdownItem>

        <DropdownItem
          leftIcon={<RiShutDownLine />}
          onClick={handleDisconnectClick}
        >
          <p>Déconnexion</p>
        </DropdownItem>
        <div className={darkMode ? 'dark-mode-toggle-dd dark-mode-toggle-dd--dark' : 'dark-mode-toggle-dd'}>
          <ToggleButton isOn={darkMode} handleToggle={() => dispatch(darkModeToggle())} />
          <div>Dark Mode</div>
        </div>
      </div>

    </div>
  );
};

export default DropdownMenu;
