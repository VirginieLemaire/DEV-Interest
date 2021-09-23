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

  return (
    <div className="header">
      <Link className="header__home-link" to="/">
        <img className="header__logo" src={logo} alt="DEV Interest Logo" />
      </Link>
      <SearchBar
        loading={loading}
        className="header__search-bar"
        placeholder="Search..."
        handleSubmit={handleSearchSubmit}
        handleChange={handleSearchChange}
        size="half"
        value={search}
      />
      <Button
        className="header__button"
        color
        styling="full"
        handleClick={handleConnexionButtonClick}
        content="Se connecter"
      />
    </div>
  );
};

export default Header;
