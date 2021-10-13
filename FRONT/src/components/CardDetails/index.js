import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';

import { MdPermMedia } from '@react-icons/all-files/md/MdPermMedia';
import { FaTags } from '@react-icons/all-files/fa/FaTags';
import { MdLanguage } from '@react-icons/all-files/md/MdLanguage';

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

import { getDomainName, formatDate, capitalizeFirstLetter } from '../../selectors/utils';
import Button from '../GenericComponents/Button';
import Tag from '../GenericComponents/Tag';
import SearchResults from '../SearchResults';
import HomeCards from '../HomeCards';
import './card-details.scss';
import { showAddCardModal, toggleDisplayUrl } from '../../action/displayOptions';
import { addToBookmarks, removeFromBookmarks } from '../../action/userCurrent';
import { fetchCard } from '../../action/cardCurrent';
import Loader from '../GenericComponents/Loader';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const CardDetails = () => {
  const dispatch = useDispatch();
  const { slug, id } = useParams();

  console.log('slug', slug);
  console.log('id', id);

  useEffect(() => {
    dispatch(fetchCard(id, slug));
  }, [id, slug]);

  const { card } = useSelector((state) => state.cardCurrent);
  const { displayUrl, darkMode, loading } = useSelector((state) => state.displayOptions);
  const { bookmarks, isLogged } = useSelector((state) => state.userCurrent);
  const { searchQuery } = useSelector((state) => state.cardsSearch);

  const isBookmarked = bookmarks.find((bookmark) => bookmark === card.id);

  const levelIconsTable = {
    débutant: 'reception-1',
    intermédiaire: 'reception-2',
    avancé: 'reception-3',
    expert: 'reception-4',
  };

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

  const handleClick = () => {
    if (isLogged) {
      if (isBookmarked) dispatch(removeFromBookmarks(card.id));
      else dispatch(addToBookmarks(card.id));
    }
    else if (!isLogged) {
      dispatch(showAddCardModal());
    }
  };
  const creationDate = formatDate(card.createat);

  const handleContentToggle = () => {
    dispatch(toggleDisplayUrl());
  };

  console.log('Card FETCHED ', card);

  if (!card) return <Loader />;

  return (
    <div className="card-details">
      <div className={darkMode ? 'card-details__board card-details__board--dark' : 'card-details__board'}>
        {card.type === 'vidéo' && <ReactPlayer url={card.url} width="100%" height="auto" controls />}
        {card.type !== 'vidéo' && <img className="card-details__board__image" src={card.image} alt={card.title} />}
        <div className="card-details__board__infos">
          <div className="card-details__board__infos__title-container">
            <h1 className="card-details__board__infos__title-container__title"><strong>{card.title}</strong></h1>
            <div className="card-details__board__infos__title-container__lang-container">
              <div className="card-details__board__infos__title-container__lang-container__icon">
                <MdLanguage />
              </div>
              <div className="card-details__board__infos__tags-container__type">
                <p>{capitalizeFirstLetter(card.lang)}</p>
              </div>
            </div>
          </div>
          <p className="card-details__board__infos__description">{card.description}</p>
          <div className="card-details__board__infos__contributor-container">
            <p className="card-details__board__infos__contributor">Proposé par: <strong>{card.contributor}</strong></p>
            <p className="card-details__board__infos__date">le {creationDate}</p>
          </div>
          <div className="card-details__board__infos__techs-container">

            <p className="card-details__board__infos__techs-container__title">Technos: </p>
            <div className="card-details__board__infos__techs-container__techs">
              {
                card.techs.map((tech) => (
                  <div className="card-details__board__infos__techs-container__techs__tech">
                    <aside key={`${card.id}-${tech}`} className="card-details__board__infos__techs-container__techs__tech__icon">{iconsTable[tech.toLowerCase()]}</aside>
                    <Tag id={tech} name={tech.capitalize()} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="card-details__board__infos__tags-container">
            <div className="card-details__board__infos__tags-container__tag">
              <p>Niveau: </p>
              <div className="card-details__board__infos__tags-container__tag__icon">
                <i className={`bi bi-${levelIconsTable[card.level.toLowerCase()]}`} />
              </div>
              <Tag name={capitalizeFirstLetter(card.level)} />
            </div>
            <div className="card-details__board__infos__tags-container__tag">
              <p>Catégorie: </p>
              <div className="card-details__board__infos__tags-container__tag__icon">
                <FaTags />
              </div>
              <Tag name={capitalizeFirstLetter(card.category)} />
            </div>
            <div className="card-details__board__infos__tags-container__tag">
              <p>Type: </p>
              <div className="card-details__board__infos__tags-container__tag__icon">
                <MdPermMedia />
              </div>
              <Tag name={capitalizeFirstLetter(card.type)} />
            </div>
          </div>
          <div className="card-details__board__infos__buttons-container">
            <Link to={{ pathname: card.url }} target="_blank">
              <button
                className="card-details__board__infos__buttons-container__button"
                type="button"
                onMouseEnter={handleContentToggle}
                onMouseLeave={handleContentToggle}
              >
                {!displayUrl ? 'Source' : (capitalizeFirstLetter(getDomainName(card.url))) }
              </button>
            </Link>
            <Button
              styling={isBookmarked ? 'outline' : 'full'}
              color
              handleClick={handleClick}
              content={isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            />
          </div>
        </div>
      </div>
      <div className="card-details__suggestion-title-container">
        <h2 className={darkMode ? 'card-details__suggestion-title-container__title card-details__suggestion-title-container__title--dark' : 'card-details__suggestion-title-container__title'}>D'autres cartes pourraient t'intéresser</h2>
      </div>
      {searchQuery && <SearchResults />}
      {!searchQuery && <HomeCards />}
    </div>
  );
};

export default CardDetails;
