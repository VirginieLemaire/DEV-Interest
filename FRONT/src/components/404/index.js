import Card from '../Card';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';
import AppLoader from '../GenericComponents/AppLoader';

const ErrorPage = () => {

  const { loading } = useSelector((state) => state.displayOptions);

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
      techs: [],
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
      techs: [],
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
      techs: [],
      lang: '',
    },
    {
      category: "Approfondir",
      contributor: "Romain",
      createdat: "2021-10-07T23:25:40.240Z",
      description: "Pour détecter et gérer les erreurs 404, vous avez plusieurs solutions comme créer une redirection 301, ou bien valider la page en 410. L'identification de ses erreurs peut se faire à travers un audit de site.Cette analyse mènera ensuite à effectuer toutes les corrections qui s’imposent.",
      id: 100,
      image: "https://k-graphiste.com/wp-content/uploads/2021/07/erreur-404.jpg",
      lang: "français",
      level: "Intermédiaire",
      slug: "quest-ce-quune-erreur-404-et-comment-la-corriger-k-graphiste",
      techs: ["Autre"],
      title: "Qu'est-ce qu'une erreur 404 et comment la corriger ? » K-Graphiste",
      type: "article",
      url: "https://k-graphiste.com/actus/referencement/gerer-404/",
      user_id: 82,
      website: "K-graphiste.com",
    }
  ];

  if (loading) return null;

  return (
    <div className="error-page">
      <h1 className="error-page__title"></h1>
      <div className="error-page__cards">
          <Masonry
            breakpointCols={breakpointsColumnsObj}
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
          </Masonry>
      </div>
    </div>
  );
};
export default ErrorPage;


