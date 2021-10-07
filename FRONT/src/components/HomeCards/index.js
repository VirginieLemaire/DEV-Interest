import InfiniteScroll from 'react-infinite-scroll-component';

import { useDispatch, useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import { fetchCardsHome, loadMoreHomeCards } from '../../action/cardsHome';

import './home-cards.scss';

import Card from '../Card';
import AppLoader from '../GenericComponents/AppLoader';
import { useEffect } from 'react';

const HomeCards = () => {
  const dispatch = useDispatch();

  const { cards } = useSelector((state) => state.cardsHome);
  const { loading, moreHome } = useSelector((state) => state.displayOptions);

  // console.log('home cards', cards);

  const breakpointsColumnsObj = {
    default: 7,
    2500: 6,
    2050: 5,
    1750: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

  useEffect(() => {
    dispatch(fetchCardsHome());
  }, []);

  if (loading) return null;

  return (
    <div className="search-container">
      <div className="search-results">
        <InfiniteScroll
          dataLength={cards.length}
          next={() => dispatch(loadMoreHomeCards())}
          hasMore={moreHome}
          loader={moreHome ? null : (<AppLoader />)}
        >
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
        </InfiniteScroll>
      </div>
    </div>
  );
};
export default HomeCards;
