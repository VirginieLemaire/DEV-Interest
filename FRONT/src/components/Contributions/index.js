
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Masonry from 'react-masonry-css';

import Card from '../Card';
import Button from '../GenericComponents/Button';
import './contributions.scss';

import { getUpdateCardInfo, setDeleteCardId } from '../../action/cardUpdate';
import Loader from '../GenericComponents/Loader';
import { showDeleteCardModal } from '../../action/displayOptions';
import { deleteContribution } from '../../action/userCurrent';


const BookmarkedCards = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { contributions } = useSelector((state) => state.userCurrent);
  const { loading } = useSelector((state) => state.displayOptions);
  const dispatch = useDispatch();


  const handleUpdateButtonClick = (cardId) => {
    history.push('/update-card');
    dispatch(getUpdateCardInfo(cardId));
  };
  const handleDeleteButtonClick = (cardId) => {
    dispatch(setDeleteCardId(cardId));
    dispatch(showDeleteCardModal());
  };


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
                contributions.map(
                  (card) => (
                    <div className="masonry-div" key={card.id}>
                      <Card key={card.id} card={card} />
                      <div className="buttons-container">
                        <Button
                          color
                          styling="full"
                          handleClick={() => handleUpdateButtonClick(card.id)}
                          content="Modifier"
                        />
                        <Button
                          color
                          styling="outline"

                          handleClick={() => handleDeleteButtonClick(card.id)}

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
