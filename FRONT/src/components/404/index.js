import Card from '../Card';
import './404.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Button from '../GenericComponents/Button';
import AppLoader from '../GenericComponents/AppLoader';
import CardsDisplay from '../CardsDisplay';
import { fetchCardsSearch, setCurrentSearch } from '../../action/cardsSearch';

const ErrorPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="error-page">
      <h1 className="error-page__title">Oups, cette page n'existe pas ...</h1>
      <Button
        color
        styling="full"
        handleClick={() => history.push('/')}
        content="Retour à l'accueil"
      />
      <p className="error-page__text">Nous pouvons tout de même de proposer quelques lectures sur la 404 ...</p>
      <div className="error-page__cards">
        {/* <Masonry
          breakpointCols={3}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {
              fakeCards.map(
                (card) => (
                  <div className="masonry-div" key={card.id}>
                    <Card key={card.id} card={card} />
                  </div>
                ),
              )
            }
        </Masonry> */}
        <CardsDisplay keyword={'404'}/>
      </div>
    </div>
  );
};
export default ErrorPage;


