import { useSelector } from 'react-redux';

import ReactCardFlip from 'react-card-flip';
import CardTeamFront from '../CardTeamFront';
import CardTeamBack from './CardTeamBack';

import PropTypes from 'prop-types';

const CardTeam = ({ card }) => {
const { isFlipped } = useSelector((state) => state.cardsTeam.teamCards);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <CardTeamFront card={card} />
      <CardTeamBack card={card} />
    </ReactCardFlip>
  );
}; 

CardTeam.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default CardTeam;
