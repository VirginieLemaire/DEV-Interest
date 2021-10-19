import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
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
      <div className="card-team__role">{card.role}</div>
      <h2 className="card-team__title">{card.title}</h2>
      <div className="card-team__meta">
        <div className="card-team__meta__links">
          <Link className="card-team__meta__links__link-container" to={{ pathname: card.linkedin }} target="_blank">
            <SiLinkedin />
          </Link>
          <Link className="card-team__meta__links__link-container" to={{ pathname: card.github }} target="_blank">
            <SiGithub />
          </Link>
        </div>
        <div className="card-team__meta__tags">
          <div className={darkMode ? 'card-team__meta__tags-techno card-team__meta__tags-techno--dark' : 'card-team__meta__tags-techno'}>
            {
              card.techs.map(
                (tech) => (
                  <aside key={`${card.title}-${tech}`} className={darkMode ? `card-team__meta__tags-techno--item card-team__meta__tags-techno--item--dark ${tech.toLowerCase()}` : `card-team__meta__tags-techno--item ${tech.toLowerCase()}`}>{iconsTable[tech.toLowerCase()]}</aside>
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
    role: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};


// == Export
export default CardTeamFront;
