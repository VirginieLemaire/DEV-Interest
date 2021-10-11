import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {
  faSearch, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './search-bar.scss';
import {
  changeSearchField, fetchCardsMiniSearch, fetchCardsSearch, resetCardsMini, resetSearchQuery,
} from '../../../action/cardsSearch';
import { setSearchModal } from '../../../action/displayOptions';

// la propriété loading est a false par défaut et si passée à vrai affiche un spinner
// la propriété "size" est facultative et a comme valeur par défaut une width de 100%,
// "size" peut prendre 3 valeurs : "quarter", "half", "three-quarter"
// qui appliquent respectivement 25%, 50%, 75% de width
const SearchBar = ({
  placeholder, size, fontSize,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchQuery, cardsMini, searchCountMini } = useSelector((state) => state.cardsSearch);
  const { loading } = useSelector((state) => state.displayOptions);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    history.push('/search');
    dispatch(fetchCardsSearch());
    dispatch(resetCardsMini());
    dispatch(setSearchModal(false));
  };

  const handleSearchbarChange = (e) => {
    window.clearTimeout();
    if (!searchQuery) {
      dispatch(resetCardsMini());
    }
    dispatch(changeSearchField(e.target.value, 'searchQuery'));
    setTimeout(() => {
      dispatch(fetchCardsMiniSearch());
    }, 300);
  };

  return (
    <div className="search-bar__container">
      <div className={`search-bar ${size} ${fontSize}`}>
        <form autoComplete="off" className="search-bar__form" onSubmit={handleSearchSubmit}>
          {(loading === false) && <FontAwesomeIcon icon={faSearch} className="search-bar__icon notloading" />}
          {(loading === true) && <FontAwesomeIcon icon={faSpinner} className="search-bar__icon loading" />}
          <input
            className={`search-bar__input ${fontSize}`}
            type="search"
            placeholder={placeholder}
            onChange={handleSearchbarChange}
            value={searchQuery}
          />
        </form>

        { ( cardsMini.length > 0 || searchQuery !== '') && (
        <div className={`search-bar__mini-results ${cardsMini.length > 0 ? 'show' : 'hide'}`}>
          {
            cardsMini.map(
              (card) => (
                <Link key={card.id} to={`/cards/${card.slug}/${card.id}`} className="search-bar__mini-results--item" onClick={() => dispatch(resetCardsMini())}>
                  <img src={card.image} alt={card.title} className="search-bar__mini-results--item__image" />
                  <div className="search-bar__mini-results--item__title">{card.type.toUpperCase()} - </div>
                  <div className="search-bar__mini-results--item__title">{card.title.substring(0, 70)}...</div>
                </Link>
              ),
            )
        }
          <div className="search-bar__mini-results--counter">{searchCountMini > 0 ? `${searchCountMini} résultats` : 'Aucun résultat'}</div>
        </div>
        )}
      </div>
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
