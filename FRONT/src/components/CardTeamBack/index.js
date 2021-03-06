import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { GiTechnoHeart } from '@react-icons/all-files/gi/GiTechnoHeart';
import { GiReturnArrow } from '@react-icons/all-files/gi/GiReturnArrow';

import './card-team-back.scss';




// import './card-team-front.scss';

// == Composant
const CardTeamBack = ({ card }) => {
  const { darkMode } = useSelector((state) => state.displayOptions);


  return (
    <div className={darkMode ? 'card-team card-team--dark' : 'card-team'}>
      <div className="card-team__back">
        {
          card.letter && 
            <div className="card-team__back__letter">
              {card.letter}
              <div className="card-team__back__letter__arrow"><GiReturnArrow /></div>
            </div>
        }
        {
          !card.letter && 
            <div className="card-team__back__heart">
              <GiTechnoHeart />
              <div className="card-team__back__heart__arrow"><GiReturnArrow /></div>
            </div>
        }
      </div>
    </div>
  );
};

CardTeamBack.propTypes = {
  card: PropTypes.shape({
    letter: PropTypes.string.isRequired,
  }).isRequired,
};


// == Export
export default CardTeamBack;

