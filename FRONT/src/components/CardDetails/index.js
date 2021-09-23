import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaThermometerEmpty } from '@react-icons/all-files/fa/FaThermometerEmpty';
import { FaThermometerHalf } from '@react-icons/all-files/fa/FaThermometerHalf';
import { FaThermometerFull } from '@react-icons/all-files/fa/FaThermometerFull';
import { CgScreen } from '@react-icons/all-files/cg/CgScreen';
import Button from '../GenericComponents/Button';
import SearchResults from '../SearchResults';
import './card-details.scss';

const CardDetails = () => {
  const card = useSelector((state) => state.cards.cards[0]);
  const handleClick = (event) => {
    console.log(event);
  }
  const creationDate = new Date(card.createdat).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div className="card-details">
      <div className="card-details__board">
        <div className="card-details__board__image-container">
          <img className="card-details__board__image-container__image" src={card.image} alt={card.title} />
        </div>
        <div className="card-details__board__infos">
          <h1 className="card-details__board__infos__title"><strong>{card.title}</strong></h1>
          <p className="card-details__board__infos__description">{card.description}</p>
          <div className="card-details__board__infos__contributor-container">
            <p className="card-details__board__infos__contributor">Proposé par: <strong>{card.contributor}</strong></p>
            <p className="card-details__board__infos__date">le {creationDate}</p>
          </div>
          <div className="card-details__board__infos__tags-container">
            <div className="card-details__board__infos__tags-container__icon icons">
              {(card.level === 'facile') && (<FaThermometerEmpty />)}
              {(card.level === 'intermédiaire') && (<FaThermometerHalf />)}
              {(card.level === 'difficile') && (<FaThermometerFull />)}
            </div>
            <div className="card-details__board__infos__tags-container__level">
              <div>{card.level}</div>
            </div>
          </div>
          <div className="card-details__board__infos__tags-container">
            <div className="card-details__board__infos__tags-container__icon icons">
              <CgScreen />
            </div>
            <div className="card-details__board__infos__tags-container__techs-container">
              {
                card.techs.map((tech) => (
                  <div>{tech}</div>
                ))
              }
            </div>
          </div>
          <div className="card-details__board__infos__tags-container">
            <div className="card-details__board__infos__tags-container__icon icons">
              <div>icone</div>
            </div>
            <div className="card-details__board__infos__tags-container__category">
              <div>{card.category}</div>
            </div>
          </div>
          <div className="card-details__board__infos__buttons-container">
            <Link to="">
              <div className="card-details__board__infos__buttons-container__type">
                {card.type}
              </div>
            </Link>
            <Button
              styling='full'
              color
              handleClick={handleClick}
              content='Favoris'
              fontSize='medium'
            />
          </div>
        </div>
      </div>
      <h2 className="card-details__suggestion-title">D'autres cartes pourraient t'intéresser</h2>
      {/* <SearchResults /> */}
    </div>
  );
}

// Card.propTypes = {
//   card: PropTypes.shape({
//     slug: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     website: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     technos: PropTypes.arrayOf(
//       PropTypes.string.isRequired,
//     ).isRequired,
//     level: PropTypes.string.isRequired,
//     media: PropTypes.string.isRequired,
//   }).isRequired,

// };

export default CardDetails;

