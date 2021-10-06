import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';


import Card from '../Card';
import Button from '../GenericComponents/Button';
import './contributions.scss';
import { deleteContribution } from '../../action/userCurrent';

const BookmarkedCards = () => {
  const { contributions } = useSelector((state) => state.userCurrent);
  const { loading } = useSelector((state) => state.displayOptions);
  const dispatch = useDispatch();

  const handleModifyClick = () => null;

  const breakpointsColumnsObj = {
    default: 7,
    2500: 6,
    2050: 5,
    1750: 4,
    1400: 3,
    1100: 2,
    700: 1,
  };

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
                contributions.map(
                  (card) => (
                    <div className="masonry-div" key={card.id}>
                      <Card key={card.id} card={card} />
                      <div className="buttons-container">
                        <Button 
                          color
                          styling="full"
                          handleClick={handleModifyClick}
                          content="Modifier"
                        />
                        <Button 
                          color
                          styling="outline"
                          handleClick={() => dispatch(deleteContribution(card.id))}
                          content="Supprimer"
                        />
                      </div>
                    </div>
                  ),
                )
              }
        </Masonry>
      </div>
    </div>
  );
};

export default BookmarkedCards;
