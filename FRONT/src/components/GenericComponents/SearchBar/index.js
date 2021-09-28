import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
  faSearch, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './search-bar.scss';
import { changeSearchField, fetchCardsSearch } from '../../../action/cardsSearch';

// la propriété loading est a false par défaut et si passée à vrai affiche un spinner
// la propriété "size" est facultative et a comme valeur par défaut une width de 100%,
// "size" peut prendre 3 valeurs : "quarter", "half", "three-quarter"
// qui appliquent respectivement 25%, 50%, 75% de width
const SearchBar = ({
  placeholder, size, fontSize,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchQuery } = useSelector((state) => state.cardsSearch);
  const { loading } = useSelector((state) => state.displayOptions);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push('/search');
    dispatch(fetchCardsSearch());
  };

  return (
    <div className={`search-bar ${size} ${fontSize}`}>
      <form autoComplete="off" className="search-bar__form" onSubmit={handleSearchSubmit}>
        {(loading === false) && <FontAwesomeIcon icon={faSearch} className="search-bar__icon notloading" />}
        {(loading === true) && <FontAwesomeIcon icon={faSpinner} className="search-bar__icon loading" />}
        <input
          className={`search-bar__input ${fontSize}`}
          type="search"
          placeholder={placeholder}
          onChange={(e) => dispatch(changeSearchField(e.target.value, 'searchQuery'))}
          value={searchQuery}
        />
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

SearchBar.defaultProps = {
  size: 'full',
  fontSize: 'normal',
};

// == Export
export default SearchBar;
