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
const CardPreview = ({ title, image, website }) => {
  const { darkMode } = useSelector((state) => state.displayOptions);

  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const imgStyle = {
    minHeight: `${randomIntFromInterval(300, 500)}px`,
  };

  const iconsTable = {
    javascript: <DiJavascript1 />,
    css: <DiCss3 />,
    mongodb: <DiMongodb />,
    php: <DiPhp />,
    html5: <DiHtml5 />,
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

  return (
    <div className={darkMode ? 'card-preview card-preview--dark' : 'card-preview'}>
      <div className="card-preview__image-container">
        <img className="card-preview__image-container__image" src={image} alt={title} style={imgStyle} />
      </div>
      <div className="card-preview__buttons-group">
        <div className="card-preview__button bookmark" type="button"><BsBookmark /></div>
      </div>
      <div className="card-preview_link">
        <h3 className="card-preview__website">{website.toUpperCase()}</h3>
        <h2 className="card-preview__title">{title}</h2>
      </div>
      {/* <div className="card-preview__meta">
        <div className="card-preview__tags">
          <div className={darkMode ? `card-preview__tags-level card-preview__tags-level--dark ${level.toLowerCase()}` : `card-preview__tags-level ${level.toLowerCase()}`}>
            <div><i className={`bi bi-${levelIconsTable[level.toLowerCase()]}`} /></div>
          </div>
          <div className={darkMode ? 'card-preview__tags-techno card__tags-techno--dark' : 'card-preview__tags-techno'}>
            {
              techs.map(
                (tech) => (
                  <aside key={`${title}-${tech}`} className={darkMode ? `card-preview__tags-techno--item card-preview__tags-techno--item--dark ${tech.toLowerCase()}` : `card__tags-techno--item ${tech.toLowerCase()}`}>{iconsTable[tech.toLowerCase()]}</aside>
                ),
              )
            }
          </div>
        </div>

      </div> */}
    </div>
  );
};

CardPreview.propTypes = {

    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    // techs: PropTypes.arrayOf(
    //   PropTypes.string.isRequired,
    // ).isRequired,
    // level: PropTypes.string.isRequired,

};

// == Export
export default CardPreview;
