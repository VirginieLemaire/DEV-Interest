import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import { LoadMoreResults } from '../../action/cardsSearch';

import './search-results.scss';

import Card from '../Card';
import AppLoader from '../GenericComponents/AppLoader';
import Loader from '../GenericComponents/Loader';

const SearchResults = () => {
  const dispatch = useDispatch();

  const { cards, searchCount } = useSelector((state) => state.cardsSearch);
  const { loading, more, darkMode } = useSelector((state) => state.displayOptions);

  const breakpointsColumnsObj = {
    default: 7,
    2500: 6,
    2050: 5,
    1750: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

  if (loading) return <Loader />;

  return (
    <div className="search-container">
      <div className={darkMode ? 'search-counter search-counter--dark' : 'search-counter'}> {searchCount > 0 ? `Il y a  ${searchCount} résultats` : 'Aucun résultat'}</div>

      <div className="search-results">
        <InfiniteScroll
          dataLength={cards.length}
          next={() => dispatch(LoadMoreResults())}
          hasMore={more}
          loader={more ? null : (<AppLoader />)}
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
export default SearchResults;
