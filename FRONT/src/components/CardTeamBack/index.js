import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { GiTechnoHeart } from '@react-icons/all-files/gi/GiTechnoHeart';

import './card-team-back.scss';




// import './card-team-front.scss';

// == Composant
const CardTeamBack = ({ card }) => {
  const { darkMode } = useSelector((state) => state.displayOptions);


  return (
    <div className={darkMode ? 'card-team card-team--dark' : 'card-team'}>
      <div className="card-team__back">
        {
          card.letter && <div className="card-team__back__letter">{card.letter}</div>
        }
        {
          !card.letter && <div className="card-team__back__heart"><GiTechnoHeart /></div>
        }
      </div>
    </div>
  );
};

CardTeamBack.propTypes = {
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
export default CardTeamBack;

