import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDisplayUrl } from '../../action/cards';
import { FaThermometerEmpty } from '@react-icons/all-files/fa/FaThermometerEmpty';
import { FaThermometerHalf } from '@react-icons/all-files/fa/FaThermometerHalf';
import { FaThermometerThreeQuarters } from '@react-icons/all-files/fa/FaThermometerThreeQuarters';
import { FaThermometerFull } from '@react-icons/all-files/fa/FaThermometerFull';
import { MdPermMedia } from '@react-icons/all-files/md/MdPermMedia';
import { CgScreen } from '@react-icons/all-files/cg/CgScreen';
import { FaTags } from '@react-icons/all-files/fa/FaTags';
import { GrLanguage } from '@react-icons/all-files/gr/GrLanguage';
import { getDomainName } from '../../selectors/utils';
import Button from '../GenericComponents/Button';
import Tag from '../GenericComponents/Tag';
import SearchResults from '../SearchResults';
import './card-details.scss';

// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};


const CardDetails = ({ card }) => {
  const dispatch = useDispatch();
  const displayUrl = useSelector((state) => state.cards.displayUrl);

  const handleClick = (event) => {
    console.log(event);
  };
  const creationDate = new Date(card.createdat).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });


  const handleContentToggle = () => {
    dispatch(toggleDisplayUrl());
  };



  return (
    <div className="card-details">
      <div className="card-details__board">
        <div className="card-details__board__image-container">
          <img className="card-details__board__image-container__image" src={card.image} alt={card.title} />
        </div>
        <div className="card-details__board__infos">
          <div className="card-details__board__infos__title-container">
            <h1 className="card-details__board__infos__title-container__title"><strong>{card.title}</strong></h1>
            <div className="card-details__board__infos__title-container__lang-container">
              <div className="card-details__board__infos__title-container__lang-container__icon">
                <GrLanguage />
              </div>
              <div className="card-details__board__infos__tags-section__tags-container__type">
                <p>{card.lang.capitalize()}</p>
              </div>
            </div>
          </div>
          <p className="card-details__board__infos__description">{card.description}</p>
          <div className="card-details__board__infos__contributor-container">
            <p className="card-details__board__infos__contributor">Proposé par: <strong>{card.contributor}</strong></p>
            <p className="card-details__board__infos__date">le {creationDate}</p>
          </div>
          <div className="card-details__board__infos__tags-section">
            <div className="card-details__board__infos__tags-section__tags-container">
              <div className="card-details__board__infos__tags-section__tags-container__icon">
                {(card.level === 'Débutant') && (<FaThermometerEmpty />)}
                {(card.level === 'Intermédiaire') && (<FaThermometerHalf />)}
                {(card.level === 'Avancé') && (<FaThermometerThreeQuarters />)}
                {(card.level === 'Expert') && (<FaThermometerFull />)}
              </div>
              <div className="card-details__board__infos__tags-section__tags-container__level">
                <Tag name={card.level.capitalize()} />
              </div>
            </div>
            <div className="card-details__board__infos__tags-section__tags-container">
              <div className="card-details__board__infos__tags-section__tags-container__icon">
                <CgScreen />
              </div>
              <div className="card-details__board__infos__tags-section__tags-container__techs-container">
                {
                  card.techs.map((tech) => (
                    <Tag id={tech} name={tech.capitalize()} />
                  ))
                }
              </div>
            </div>
            <div className="card-details__board__infos__tags-section__tags-container">
              <div className="card-details__board__infos__tags-section__tags-container__icon">
                <FaTags />
              </div>
              <div className="card-details__board__infos__tags-section__tags-container__category">
                <Tag name={card.category.capitalize()} />
              </div>
            </div>
            <div className="card-details__board__infos__tags-section__tags-container">
              <div className="card-details__board__infos__tags-section__tags-container__icon">
                <MdPermMedia />
              </div>
              <div className="card-details__board__infos__tags-section__tags-container__type">
                <Tag name={card.type.capitalize()} />
              </div>
            </div>
          </div>

          <div className="card-details__board__infos__buttons-container">
            <Link to={{ pathname: card.url }} target="_blank">
              <div onMouseEnter={handleContentToggle} onMouseLeave={handleContentToggle}>
                <Button 
                  className="card-details__board__infos__buttons-container__card"
                  styling="outline"
                  color
                  onClick={handleClick}
                  content={!displayUrl ? "Consulter la source" : "url" }

                />
              </div>
            </Link>
            <Button
              styling="full"
              color
              handleClick={handleClick}
              content="Favoris"
            />
          </div>
        </div>
      </div>
      <div className="card-details__suggestion-title-container">
        <h2 className="card-details__suggestion-title-container__title">D'autres cartes pourraient t'intéresser</h2>
      </div>
      <SearchResults />
    </div>
  );
};

CardDetails.propTypes = {
  card: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdat: PropTypes.string.isRequired,
    contributor: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    level: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
  }).isRequired,

};

export default CardDetails;
