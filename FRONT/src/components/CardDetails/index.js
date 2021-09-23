import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './card-details.scss';

const CardDetails = () => {
  const card = useSelector((state) => state.card[0]);
  return (
    <div className="card-details">
      <div className="card-details__board">
        <div className="card-details__board__picture-container">
          <image className="card-details__board__picture-container__image" />
        </div>
        <div className="card-details__board__picture-container__infos">
          <h1 className="card-details__board__picture-container__infos__title"></h1>
          <p className="card-details__board__picture-container__infos__description"></p>
          <div className="card-details__board__picture-container__infos__contributor-container">
            <p className="card-details__board__picture-container__infos__contributor">Proposé par:</p>
            <p className="card-details__board__picture-container__infos__date">le</p>
          </div>
          <div className="card-details__board__picture-container__infos__level-container">

          </div>
          <div className="card-details__board__picture-container__infos__technos-container">

          </div>
          <div className="card-details__board__picture-container__infos__categories-container">

          </div>
          <div className="card-details__board__picture-container__infos__buttons-container">

          </div>
        </div>
      </div>
      <h2 className="card-details__suggestion-title">D'autres cartes pourraient t'intéresser</h2>
      <div className="card-details__cards-container">
      </div>
    </div>
  );
}

// Card.propTypes = {
//   card: PropTypes.shape({
//     slug: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     website: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     technos: PropTypes.arrayOf(
//       PropTypes.string.isRequired,
//     ).isRequired,
//     level: PropTypes.string.isRequired,
//     media: PropTypes.string.isRequired,
//   }).isRequired,

// };

export default CardDetails;
