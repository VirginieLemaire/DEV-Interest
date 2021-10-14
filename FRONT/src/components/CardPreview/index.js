import { useSelector, useDispatch } from 'react-redux';
import { BsBookmark } from '@react-icons/all-files/bs/BsBookmark';

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

import './card-preview.scss';
import { capitalizeFirstLetter } from '../../selectors/utils';

// == Composant
const CardPreview = ({ card }) => {
  const { darkMode } = useSelector((state) => state.displayOptions);

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

  const typeValues = [
    'Article',
    'Vidéo',
    'Image',
    'Site Web',
    'Repository',
    'Package',
    'Autre',
  ];

  const levelValues = [
    'Débutant',
    'Intermédiaire',
    'Avancé',
    'Expert',
  ];

  const techValues = [
    'JavaScript',
    'CSS',
    'MongoDB',
    'PHP',
    'HTML',
    'WordPress',
    'PostgreSQL',
    'MarkDown',
    'Ruby',
    'Python',
    'Autre',
  ];
  return (
    <div className={darkMode ? 'card-preview card-preview--dark' : 'card-preview'}>
      <div className="card-preview__image-container">
        <img className="card-preview__image-container__image" src={card.image} alt={card.title} />
      </div>
      <div className="card-preview__buttons-group">
        <div className="card-preview__button media" type="button" href={card.url}>{card.type ? capitalizeFirstLetter(typeValues[card.type - 1]) : ""}</div>
        <div className="card-preview__button bookmark" type="button"><BsBookmark /></div>
      </div>
      <div className="card-preview_link">
        <h3 className="card-preview__website">{card.website.toUpperCase()}</h3>
        <h2 className="card-preview__title">{card.title}</h2>
      </div>
      <div className="card-preview__meta">
        <div className="card-preview__tags">
          { card.level && 
            <div className={darkMode ? `card-preview__tags-level card-preview__tags-level--dark ${levelValues[card.level - 1].toLowerCase()}` : `card-preview__tags-level ${levelValues[card.level - 1].toLowerCase()}`}>
              <div><i className={`bi bi-${levelIconsTable[levelValues[card.level - 1].toLowerCase()]}`} /></div>
            </div>
          }
          { card.techs[0] &&
            <div className={darkMode ? 'card-preview__tags-techno card__tags-techno--dark' : 'card-preview__tags-techno'}>
              {
                card.techs[0].map(
                  (tech) => (
                    <aside key={`${card.title}-${tech}`} className={darkMode ? `card-preview__tags-techno--item card-preview__tags-techno--item--dark ${techValues[tech -1].toLowerCase()}` : `card__tags-techno--item ${techValues[tech -1].toLowerCase()}`}>{iconsTable[techValues[tech -1].toLowerCase()]}</aside>
                  ),
                )
              }
            </div>
          }
        </div>

      </div>
    </div>
  );
};

CardPreview.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    website: PropTypes.string,
    type: PropTypes.string,
    level: PropTypes.string,
    techs: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.number,
      ),
    ),}),
};

// Valeurs par défaut pour les props
CardPreview.defaultProps = {
  card: PropTypes.shape({
    image: "",
    title: "",
    website: "",
    type: null,
    level: null,
    techs: null,
  },),
};

// == Export
export default CardPreview;
