import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
  faSearch, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './search-bar.scss';
import { fetchCards } from '../../../action/cards';
import { changeField } from '../../../action/user';

// la propriété loading est a false par défaut et si passée à vrai affiche un spinner
// la propriété "size" est facultative et a comme valeur par défaut une width de 100%,
// "size" peut prendre 3 valeurs : "quarter", "half", "three-quarter"
// qui appliquent respectivement 25%, 50%, 75% de width
const SearchBar = ({
  placeholder, size, fontSize,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.cards);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push('/search');
    dispatch(fetchCards());
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
          onChange={(e) => dispatch(changeField(e.target.value, 'search'))}
          value={search}
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
