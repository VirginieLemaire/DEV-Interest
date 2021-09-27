import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';

import './search-results.scss';

import Card from '../Card';

const SearchResults = () => {
  const { cards } = useSelector((state) => state.cards);

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
      <div className="search-results">
        <Masonry
          breakpointCols={breakpointsColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
          // imagesLoadedOptions={imagesLoadedOptions}
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
    </div>
  );
};
export default SearchResults;
