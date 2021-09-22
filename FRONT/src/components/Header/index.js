import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeSearchField } from '../../action/user';
import { fetchCards } from '../../action/cards';

import './header.scss';

import logo from '../../assets/DI-logo.png';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';


const Header = () => {
  const dispatch = useDispatch();

  const currentSearch = useSelector((state) => state.user.currentSearch);
  const loading = useSelector((state) => state.cards.loading);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCards());
  }

  const handleSubmitChange = (event) => {
    dispatch(changeSearchField(event.target.value))
  }

  const handleConnexionButtonClick = (event) => {
    event.preventDefault();
  }

  return (
  <div className="header">
    <Link className="header__home-link" to="/">
      <img className="header__logo" src={logo} alt="DEV Interest Logo" />
    </Link>
    <SearchBar 
      loading={loading}
      className="header__search-bar"
      placeholder='Search...'
      handleSubmit={handleSearchSubmit}
      handleChange={handleSubmitChange}
      size="half"
      value={currentSearch}
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
  }

export default Header;
