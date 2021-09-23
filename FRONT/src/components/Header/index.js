import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import {
  changeField, showConnexionModal, userLogin, userLogout,
} from '../../action/user';
import { fetchCards } from '../../action/cards';

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

  const search = useSelector((state) => state.user.search);
  const loading = useSelector((state) => state.cards.loading);
  const isLogged = useSelector((state) => state.user.isLogged);
  const username = useSelector((state) => state.user.username);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push('/search');
    dispatch(fetchCards());
  };

  const handleSearchChange = (event) => {
    dispatch(changeField(event.target.value, 'search'));
  };

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

  const pathname = usePathname();

  return (
    <div className="header">
      <Link className="header__home-link" to="/">
        <img className="header__logo" src={logo} alt="DEV Interest Logo" />
      </Link>
      {
        (pathname !== '/') && (
          <SearchBar
            loading={loading}
            className="header__search-bar"
            placeholder="Search..."
            handleSubmit={handleSearchSubmit}
            handleChange={handleSearchChange}
            size="half"
            value={search}
          />
        )
      }
      { isLogged && (
        <div className="user-button">
          <Button
            className="header__button"
            color
            styling="outline"
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
