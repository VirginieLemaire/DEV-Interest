import ReactCardFlip from 'react-card-flip';
import CardTeamFront from './CardTeamFront';
import CardTeamBack from './CardTeamBack';

const CardTeam = () => (
  <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
    <CardTeamFront />
    <CardTeamBack />
  </ReactCardFlip>
);

export default CardTeam;
