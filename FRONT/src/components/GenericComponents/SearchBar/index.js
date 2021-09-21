import PropTypes from 'prop-types';

import {
  faSearch, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './search-bar.scss';

// la propriété loading est a false par défaut et si passée à vrai affiche un spinner
// la propriété "size" est facultative et a comme valeur par défaut une width de 100%,
// "size" peut prendre 3 valeurs : "quarter", "half", "three-quarter"
// qui appliquent respectivement 25%, 50%, 75% de width
const SearchBar = ({
  loading, placeholder, handleSubmit, handleChange, size, value,
}) => (
  <div className={`search-bar ${size}`}>
    <form autoComplete="off" className="search-bar__form" onSubmit={handleSubmit}>
      {(loading === false) && <FontAwesomeIcon icon={faSearch} className="search-bar__icon notloading" />}
      {(loading === true) && <FontAwesomeIcon icon={faSpinner} className="search-bar__icon loading" />}
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </form>
  </div>
);

SearchBar.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  size: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

SearchBar.defaultProps = {
  size: 'full',
};

// == Export
export default SearchBar;
