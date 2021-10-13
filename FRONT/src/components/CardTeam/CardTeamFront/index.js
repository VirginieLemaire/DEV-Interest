import { useSelector } from 'react-redux';

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

import './card-team-front.scss';

// == Composant
const CardTeamFront = ({ card }) => {
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
    <div className={darkMode ? 'card-team card-team--dark' : 'card-team'}>
      <div className="card-team__image-container">
        <img className="card-team__image-container__image" src={card.image} alt={card.title} />
      </div>
      <div className="card-team__buttons-group">
        <div className="card-team__button media">{card.type}</div>
      </div>
      <div className="card-team_link">
        <h2 className="card-team__title">{card.title}</h2>
      </div>
      <div className="card-team__meta">
        <div className="card-team__tags">
          <div className={darkMode ? 'card-team__tags-techno card__tags-techno--dark' : 'card-team__tags-techno'}>
            {
              card.techs.map(
                (tech) => (
                  <aside key={`${card.title}-${tech}`} className={darkMode ? `card-team__tags-techno--item card-team__tags-techno--item--dark ${tech.toLowerCase()}` : `card__tags-techno--item ${tech.toLowerCase()}`}>{iconsTable[tech.toLowerCase()]}</aside>
                ),
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

CardTeamFront.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};


// == Export
export default CardTeam;
