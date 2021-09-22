import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { changeField, showConnexionModal } from '../../action/user';
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

  const search = useSelector((state) => state.user.search);
  const loading = useSelector((state) => state.cards.loading);


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCards());
  };

  const handleSearchChange = (event) => {
    dispatch(changeField(event.target.value, 'search'))
  };

  const handleConnexionButtonClick = (event) => {
    dispatch(showConnexionModal());
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
