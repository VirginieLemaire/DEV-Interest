import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Masonry from 'react-masonry-css';

import { LoadMoreResults, NextPage } from '../../action/cardsSearch';

import './search-results.scss';

import Card from '../Card';

const SearchResults = () => {
  // const dispatch = useDispatch();

  const { cards } = useSelector((state) => state.cardsSearch);
  const { loading } = useSelector((state) => state.displayOptions);

  const breakpointsColumnsObj = {
    default: 7,
    2500: 6,
    2050: 5,
    1750: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

  // const handleScroll = (e) => {
  //   const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

  //   if (scrollHeight - scrollTop === clientHeight) {
  //     dispatch(NextPage());
  //   }
  // };

  // useEffect(() => {
  //   dispatch(LoadMoreResults());
  // }, [page]);

  if (loading) return null;

  return (
    <div className="search-container">
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
    </div>
  );
};
export default SearchResults;
