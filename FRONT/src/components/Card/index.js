import { BsBookmark } from '@react-icons/all-files/bs/BsBookmark';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card.scss';

// == Composant
const Card = ({ card }) => (
  <div className="card">
    <Link className="card_link" to={`/cards/${card.slug}/${card.id}`}>
      <img className="card__image" src={card.image} alt={card.title} />
    </Link>
    <div className="card__buttons-group">
      <a className="card__button media" type="button" href={card.url}>{card.type}</a>
      <div className="card__button bookmark" type="button"><BsBookmark /></div>
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
        <div className="card__tags-techno">
          {
            // card.techs.map(
            //   (tech) => (
            //     <aside key={tech} className={`card__tags-techno--item ${tech.toLowerCase()}`}>{tech}</aside>
            //   ),
            // )
          }
          <aside className={`card__tags-techno--item ${card.techs.toLowerCase()}`}>{card.techs}</aside>
        </div>
      </div>
      <div className={`card__level ${card.level.toLowerCase()}`}>
        <div>{card.level}</div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    // techs: PropTypes.arrayOf(
    //   PropTypes.string.isRequired,
    // ).isRequired,
    techs: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,

};

// == Export
export default Card;
