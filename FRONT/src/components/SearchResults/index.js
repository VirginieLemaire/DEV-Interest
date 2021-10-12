import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { fetchCardsSearch, LoadMoreResults } from '../../action/cardsSearch';

import './search-results.scss';

import Card from '../Card';
import AppLoader from '../GenericComponents/AppLoader';
import Loader from '../GenericComponents/Loader';
import SearchFilters from '../SearchFilters';

const SearchResults = () => {
  const dispatch = useDispatch();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();

  const keywords = query.get('keywords');
  const techFilter = query.get('tech');
  const categoryFilter = query.get('category');
  const levelFilter = query.get('level');
  const typeFilter = query.get('type');
  const langFilter = query.get('lang');

  console.log('-----------------');
  console.log('keywords', keywords);
  console.log('techFilter', techFilter);
  console.log('categoryFilter', categoryFilter);
  console.log('levelFilter', levelFilter);
  console.log('typeFilter', typeFilter);
  console.log('langFilter', langFilter);

  useEffect(() => {
    dispatch(fetchCardsSearch(
      keywords, techFilter, categoryFilter, levelFilter, typeFilter, langFilter,
    ));
  }, [keywords, techFilter, categoryFilter, levelFilter, typeFilter, langFilter]);

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
      <SearchFilters />
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
