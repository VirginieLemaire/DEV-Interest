import { useSelector, useDispatch } from 'react-redux';
import { BsBookmark } from '@react-icons/all-files/bs/BsBookmark';
import { BsBookmarkFill } from '@react-icons/all-files/bs/BsBookmarkFill';

import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { DiMongodb } from '@react-icons/all-files/di/DiMongodb';
import { DiPhp } from '@react-icons/all-files/di/DiPhp';
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5';
import { DiWordpress } from '@react-icons/all-files/di/DiWordpress';
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql';
import { DiMarkdown } from '@react-icons/all-files/di/DiMarkdown';
import { DiRuby } from '@react-icons/all-files/di/DiRuby';
import { DiPython } from '@react-icons/all-files/di/DiPython';
import { BsFillQuestionDiamondFill } from '@react-icons/all-files/bs/BsFillQuestionDiamondFill';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card.scss';
import { useEffect } from 'react';
import { showAddCardModal } from '../../action/displayOptions';
import { addToBookmarks, removeFromBookmarks } from '../../action/userCurrent';
import { capitalizeFirstLetter } from '../../selectors/utils';

// == Composant
const Card = ({ card }) => {
  const dispatch = useDispatch();

  const { bookmarks, isLogged } = useSelector((state) => state.userCurrent);
  const { darkMode } = useSelector((state) => state.displayOptions);

  const isBookmarked = bookmarks.find((bookmark) => bookmark === card.id);
  // console.log('isBookmarked à la valeur: ', isBookmarked);

  const iconsTable = {
    javascript: <DiJavascript1 />,
    css: <DiCss3 />,
    mongodb: <DiMongodb />,
    php: <DiPhp />,
    html: <DiHtml5 />,
    wordpress: <DiWordpress />,
    postgresql: <SiPostgresql />,
    markdown: <DiMarkdown />,
    ruby: <DiRuby />,
    python: <DiPython />,
    autre: <BsFillQuestionDiamondFill />,
  };

  const levelIconsTable = {
    débutant: 'reception-1',
    intermédiaire: 'reception-2',
    avancé: 'reception-3',
    expert: 'reception-4',
  };

  const imgStyle = {
    minHeight: `${card.height}px`,
  };

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
    <div className={darkMode ? 'card card--dark' : 'card'} id={`card-${card.id}`}>
      <Link className="card_link" to={`/cards/${card.slug}/${card.id}`}>
        <img className="card__image" src={card.image} alt={card.title} style={imgStyle} />
      </Link>
      <div className="card__buttons-group">
        <a className="card__button media" type="button" href={card.url}>{capitalizeFirstLetter(card.type)}</a>
        <div className="card__button bookmark" type="button" onClick={handleClick}>{isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}</div>
      </div>
      <Link className="card_link" to={`/cards/${card.slug}/${card.id}`}>
        <h3 className="card__website">{card.website.toUpperCase()}</h3>
        <h2 className="card__title">{card.title}</h2>
      </Link>
      <div className="card__meta">
        <div className="card__tags">
          <div className={darkMode ? `card__tags-level card__tags-level--dark ${card.level.toLowerCase()}` : `card__tags-level ${card.level.toLowerCase()}`}>
            <div><i className={`bi bi-${levelIconsTable[card.level.toLowerCase()]}`} /></div>
          </div>
          <div className={darkMode ? 'card__tags-techno card__tags-techno--dark' : 'card__tags-techno'}>
            {
              card.techs.map(
                (tech) => (
                  <aside key={`${card.id}-${tech}`} className={darkMode ? `card__tags-techno--item card__tags-techno--item--dark ${tech.toLowerCase()}` : `card__tags-techno--item ${tech.toLowerCase()}`}>{iconsTable[tech.toLowerCase()]}</aside>
                ),
              )
            }
          </div>
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
    height: PropTypes.number.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    level: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,

};

// == Export
export default Card;
