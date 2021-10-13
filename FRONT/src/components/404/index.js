import Card from '../Card';
import './404.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Button from '../GenericComponents/Button';
import AppLoader from '../GenericComponents/AppLoader';
import SearchResults from '../SearchResults';
import { fetchCardsSearch, setCurrentSearch } from '../../action/cardsSearch';

const ErrorPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.displayOptions);
  const history = useHistory();
  
  const fakeCards = [
    {
      id:1,
      title:"Signification du Chiffre 4",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      description:"Error",
      category:"Autre",
      level:"Débutant",
      type:"article",
      slug: '',
      website: '',
      url: '',
      techs: ["Autre"],
      lang: '',
    

    },
    {
      id:2,
      title:"Diviser 0 par 0",
      image:"https://ms3.embroideryshristi.com/3878-thickbox_default/news-outline-number-0.jpg",
      description:"Null",
      category:"Autre",
      level:"Expert",
      type:"article",
      slug: '',
      website: '',
      url: '',
      techs: ["Autre"],
      lang: '',
    },
    {
      id:3,
      title:"Métro ligne 4",
      image:"https://www.transilien.com/sites/transilien/files/styles/cards_bubble_crop/public/2021-06/metro_4_fc.png?h=4ff4a9b9&itok=dtFleUEC",
      description:"Lost",
      category:"Autre",
      level:"Débutant",
      type:"article",
      slug: '',
      website: '',
      url: '',
      techs: ["Autre"],
      lang: '',
    },
  ];

  useEffect(() => {
    dispatch(setCurrentSearch(404));
    dispatch(fetchCardsSearch());
  }, []);

  if (loading) return AppLoader;

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
        <SearchResults />
      </div>
    </div>
  );
};
export default ErrorPage;


