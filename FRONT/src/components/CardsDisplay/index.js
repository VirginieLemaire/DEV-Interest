import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { fetchCardsSearch, LoadMoreResults, setFilter } from '../../action/cardsSearch';

import './cards-display.scss';

import Card from '../Card';
import AppLoader from '../GenericComponents/AppLoader';
import Loader from '../GenericComponents/Loader';
import SearchFilters from '../SearchFilters';

const CardsDisplay = ({keyword}) => {
  const dispatch = useDispatch();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();

  query.set("keywords", `${keyword}`);

  const keywords = query.get('keywords');;
  const techFilter = "all";
  const categoryFilter = "all";
  const levelFilter = "all";
  const typeFilter = "all";
  const langFilter = "all";


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
export default CardsDisplay;
