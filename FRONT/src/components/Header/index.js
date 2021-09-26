import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import {
  changeField, showConnexionModal, userLogin, userLogout,
  darkModeToggle,
} from '../../action/user';

import './header.scss';

import logo from '../../assets/DI-logo.png';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';

// custom hook to get the current pathname in React
const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

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

  const handleUserButtonClick = (e) => {
    e.preventDefault();
  };

  const handleLogoutButtonClick = () => {
    dispatch(userLogout());
  };

  const handleBookmarksButtonClick = () => {
    history.push(`/${username.toLowerCase()}/bookmarks`);
  };

  const pathname = usePathname();

  return (
    <div className={darkMode ? 'header header--dark' : 'header'}>
      <Link className="header__home-link" to="/">
        <img className="header__logo" src={logo} alt="DEV Interest Logo" />
      </Link>
      {
        (pathname !== '/') && (
          <SearchBar
            className="header__search-bar"
            placeholder="Search..."
            size="half"
          />
        )
      }
      { isLogged && (
        <div className="user-button">
          <Button
            className="header__button"
            color
            styling="text"
            handleClick={handleBookmarksButtonClick}
            content="Favoris"
          />
          <Button
            className="header__button"
            color
            styling="text"
            handleClick={handleLogoutButtonClick}
            content="Déconnexion"
          />
          <Button
            className="header__button"
            color
            styling="full"
            handleClick={handleUserButtonClick}
            content={`Hello ${username}!`}
          />
          <IoIosArrowDown />
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
  );
};

export default Header;
