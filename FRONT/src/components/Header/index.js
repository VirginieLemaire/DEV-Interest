import { BsFillBookmarksFill } from '@react-icons/all-files/bs/BsFillBookmarksFill';
import { CgAddR } from '@react-icons/all-files/cg/CgAddR';
import { RiShutDownLine } from '@react-icons/all-files/ri/RiShutDownLine';
import {GiTechnoHeart} from '@react-icons/all-files/gi/GiTechnoHeart';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  showConnexionModal, userLogin, userLogout,
  darkModeToggle,
  showAddCardModal,
} from '../../action/user';

import './header.scss';

// import logo from '../../assets/DI-logo.png';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';
import ToggleButton from '../GenericComponents/ToggleButton';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { darkMode, isLogged, username } = useSelector((state) => state.user);

  // const handleClickDarkModeToggle = () => {
  //   dispatch(darkModeToggle());
  // };

  const handleConnexionButtonClick = () => {
    dispatch(showConnexionModal());
    dispatch(userLogin());
  };

  const handleLogoutButtonClick = () => {
    dispatch(userLogout());
    history.push('/');
  };

  const pathname = usePathname();

  return (
    <div className={darkMode ? 'header header--dark' : 'header'}>
      <div className="header__logo-area">
        <Link className="header__home-link" to="/">
          <div className="header__home-link--DEV">DEV</div><div className="header__home-link--heart"><GiTechnoHeart /></div><div className="header__home-link--interest">PPER</div>
        </Link>
      </div>
      <div className="header__search-bar-area">
        {
        (pathname !== '/') && (
          <SearchBar
            className="header__search-bar"
            placeholder="Search..."
            size="full"
          />
        )
      }
      </div>
      <div className="header__buttons-area">
        { isLogged && (
        <div className="header__user-buttons">
          <div className="header__user-icons" onClick={() => dispatch(showAddCardModal())}><CgAddR /></div>
          <div className="header__user-icons" onClick={() => history.push(`/${username.toLowerCase()}/bookmarks`)}><BsFillBookmarksFill /></div>
          <Button
            className="header__button"
            color
            styling="full"
            handleClick={() => history.push(`/${username.toLowerCase()}/account`)}
            content={`Hello ${username}!`}
          />
          <div className="header__user-icons header__user-icons--logout" onClick={handleLogoutButtonClick}><RiShutDownLine /></div>
          <ToggleButton isOn={darkMode} handleToggle={() => dispatch(darkModeToggle())} />
        </div>
        )}
        { !isLogged && (
        <Button
          className="header__button"
          color
          styling="full"
          handleClick={handleConnexionButtonClick}
          content="Se connecter"
        />
        )}
      </div>
    </div>
  );
};

export default Header;
