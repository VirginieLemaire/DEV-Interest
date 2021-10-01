import { useSelector, useDispatch } from 'react-redux';
import { BsBookmark } from '@react-icons/all-files/bs/BsBookmark';
import { BsBookmarkFill } from '@react-icons/all-files/bs/BsBookmarkFill';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card.scss';
import { showAddCardModal } from '../../action/displayOptions';
import { addToBookmarks, removeFromBookmarks } from '../../action/userCurrent';


// == Composant
const Card = ({ card }) => {
  const dispatch = useDispatch();

  const { bookmarks, isLogged } = useSelector((state) => state.userCurrent);
  const { darkMode } = useSelector((state) => state.displayOptions);

  const isBookmarked = bookmarks.find((bookmark) => bookmark === card.id);
  // console.log('isBookmarked à la valeur: ', isBookmarked);

  const handleClick = () => {
    if (isLogged) {
      if (isBookmarked) dispatch(removeFromBookmarks(card.id));
      else dispatch(addToBookmarks(card.id));
    }
    else if (!isLogged) {
      dispatch(showAddCardModal());
    }
  };

  return (
    <div className={darkMode ? 'card card--dark' : 'card'}>
      <Link className="card_link" to={`/cards/${card.slug}/${card.id}`}>
        <img className="card__image" src={card.image} alt={card.title} />
      </Link>
      <div className="card__buttons-group">
        <a className="card__button media" type="button" href={card.url}>{card.type}</a>
        <div className="card__button bookmark" type="button" onClick={handleClick}>{isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}</div>
      </div>
      <Link className="card_link" to={`/cards/${card.slug}/${card.id}`}>
        <h2 className="card__title">{card.title}</h2>
        <h3 className="card__website">{card.website}</h3>
      </Link>
      <div className="card__meta">
        <div className="card__tags">
          <div className="card__tags-category">
            <aside className={`card__tags-category--item ${card.category.toLowerCase()}`}>{card.category}</aside>
          </div>
          <div className={darkMode ? 'card__tags-techno card__tags-techno--dark' : 'card__tags-techno'}>
            {
              card.techs.map(
                (tech) => (
                  <aside key={`${card.id}-${tech}`} className={darkMode ? `card__tags-techno--item card__tags-techno--item--dark ${tech.toLowerCase()}` : `card__tags-techno--item ${tech.toLowerCase()}`}>{tech}</aside>
                ),
              )
            }
          </div>
        </div>
        <div className={darkMode ? `card__level card__level--dark ${card.level.toLowerCase()}` : `card__level ${card.level.toLowerCase()}`}>
          <div>{card.level}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    level: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,

};

// == Export
export default Card;
