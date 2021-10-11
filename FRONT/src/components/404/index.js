import Card from '../Card';
import './404.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import Button from '../GenericComponents/Button';
import AppLoader from '../GenericComponents/AppLoader';

const ErrorPage = () => {

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
    {
      category: "Approfondir",
      contributor: "Romain",
      createdat: "2021-10-07T23:57:22.728Z",
      description: "On navigue tranquillement sur Internet, de pages en pages, à la recherche d'une information ciblée... Quand soudain : une erreur 404. La page est",
      id: 101,
      image: "https://f.hellowork.com/blogdumoderateur/2013/07/404-lego-550x316.jpg",
      lang: "français",
      level: "Intermédiaire",
      slug: "top-20-des-meilleures-pages-derreur-404-bdm",
      techs: ["Autre"],
      title: "Top 20 des meilleures pages d'erreur 404 - BDM",
      type: "article",
      url: "https://www.blogdumoderateur.com/meilleures-pages-404/",
      user_id: 82,
      website: "Blogdumoderateur.com",

    },
    {
      category: "Apprendre",
      contributor: "Romain",
      createdat: "2021-10-08T05:32:15.687Z",
      description: "Tutorial pour PluXml pour modifier la page d'erreur 404 par défaut",
      id: 103,
      image: "https://pluxopolis.net/data/images/0045/capture01.png",
      lang: "français",
      level: "Débutant",
      slug: "creer-un-page-d039-erreur-404-personalisee-pluxopolis",
      techs: ["Autre"],
      title: "Créer un page d&amp;#039;erreur 404 personalisée - Pluxopolis",
      type: "article",
      url: "https://pluxopolis.net/creer-un-page-d-erreur-404-personalisee.html",
      user_id: 82,
      website: "Pluxopolis.net",
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
    },
  ];

  if (loading) return null;

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
          <Masonry
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
          </Masonry>
      </div>
    </div>
  );
};
export default ErrorPage;


