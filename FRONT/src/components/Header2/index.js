import './header2.scss';
import { BsPlusSquare } from '@react-icons/all-files/bs/BsPlusSquare';
import { BsPlusSquareFill } from '@react-icons/all-files/bs/BsPlusSquareFill';
import { BsBookmarks } from '@react-icons/all-files/bs/BsBookmarks';
import { BsFillCaretDownFill } from '@react-icons/all-files/bs/BsFillCaretDownFill';
import { RiUserHeartLine } from '@react-icons/all-files/ri/RiUserHeartLine';
import { RiUserHeartFill } from '@react-icons/all-files/ri/RiUserHeartFill';
import { GiTechnoHeart } from '@react-icons/all-files/gi/GiTechnoHeart';
import { BsFillBookmarksFill } from '@react-icons/all-files/bs/BsFillBookmarksFill';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeToggle, showAddCardModal, showConnexionModal } from '../../action/displayOptions';

import Navbar from './NavBar';
import NavItem from './NavBar/NavItem';
import NavItemText from './NavBar/NavItemText';
import NavItemDrop from './NavBar/NavItemDrop';
import DropdownMenu from './NavBar/DropdownMenu';
import SearchBar from '../GenericComponents/SearchBar';
import ToggleButton from '../GenericComponents/ToggleButton';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const Header2 = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.displayOptions);

  const { isLogged, username, id } = useSelector((state) => state.userCurrent);

  const pathname = usePathname();

  return (
    <div className={darkMode ? 'header2 header2--dark' : 'header2'}>
      <div className="header2__logo-area">
        <Link className="header2__home-link" to="/">
          <div className="header2__home-link--DEV">DEV</div><div className="header2__home-link--heart"><GiTechnoHeart /></div><div className="header2__home-link--interest">PPER</div>
        </Link>
      </div>
      <div className="header__search-bar-area">
        {
         !pathname === '/' && (
         <SearchBar
           className="header__search-bar"
           placeholder="Search..."
           size="full"
         />
         )
       }

      </div>
      { isLogged && (
      <Navbar>
        <NavItem
          icon={<BsPlusSquare />}
          iconActive={<BsPlusSquareFill />}
          onClick={() => dispatch(showAddCardModal())}
          pathActive={['/add-card']}
        />
        <NavItem
          icon={<BsBookmarks />}
          iconActive={<BsFillBookmarksFill />}
          to={`/${username.toLowerCase()}/${id}/bookmarks`}
          pathActive={[`/${username.toLowerCase()}/${id}/bookmarks`]}
        />
        <NavItem
          icon={<RiUserHeartLine />}
          iconActive={<RiUserHeartFill />}
          text={<p className={darkMode ? 'icon-text--dark' : 'icon-text'}>{username}</p>}
          to={`/${username.toLowerCase()}/account`}
          pathActive={[`/${username.toLowerCase()}/account`, `/${username.toLowerCase()}/account/update`]}
        />
        <NavItemDrop
          icon={<BsFillCaretDownFill />}
        >
          <DropdownMenu />
        </NavItemDrop>
      </Navbar>
      )}
      { !isLogged && (
        <Navbar>
          <NavItemText
            text="Se connecter"
            onClick={() => dispatch(showConnexionModal())}
          />
        </Navbar>
      )}
      <ToggleButton isOn={darkMode} handleToggle={() => dispatch(darkModeToggle())} />
    </div>
  );
};
export default Header2;
