import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import logoDevLovePper from '../../assets/LogoDEVLovePPER.svg';

import './home-cards.scss';

import Card from '../Card';

const HomeCards = () => {
  const { cards } = useSelector((state) => state.cardsHome);
  const { loading } = useSelector((state) => state.displayOptions);

  console.log('home cards', cards);

  const breakpointsColumnsObj = {
    default: 7,
    2500: 6,
    2050: 5,
    1750: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="search-container">
      {
        (loading) && (
        <div className="search-loading-container">
          <div className="search-loading-heart">
            <img src={logoDevLovePper} alt="DEVLovePPER Logo" />
          </div>
        </div>
        )
      }
      {
        (!loading) && (
          <div className="search-results">
            <Masonry
              breakpointCols={breakpointsColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {
                cards.map(
                  (card) => (
                    <div className="masonry-div" key={card.id}>
                      <Card key={card.id} card={card} />
                    </div>
                  ),
                )
              }
            </Masonry>
          </div>
        )
      }

    </div>
  );
};
export default HomeCards;
