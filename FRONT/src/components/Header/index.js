import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeField, showConnexionModal } from '../../action/user';
import { fetchCards } from '../../action/cards';

import './header.scss';

import logo from '../../assets/DI-logo.png';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const search = useSelector((state) => state.user.search);
  const loading = useSelector((state) => state.cards.loading);

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
  };

  const handleLogoutButtonClick = () => {
    dispatch(userLogout());
  };

  const handleBookmarksButtonClick = () => {
    history.push(`/${username.toLowerCase()}/bookmarks`);
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
      {isLogged && (
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
      {!isLogged && (
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
