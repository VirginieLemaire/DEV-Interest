import './about.scss';

import CardPreview from '../CardPreview';
import Masonry from 'react-masonry-css';

const About = () => {

  const teamCards = [
    {
      id:1,
      title:"Virginie",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      description:"",
      category:"",
      level:"",
      type:"Product Owner / Git Master",
      slug: '',
      website: '',
      url: '',
      techs: [""],
      lang: '',
    },
    {
      id:1,
      title:"Virginie",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      description:"",
      category:"",
      level:"",
      type:"Product Owner / Git Master",
      slug: '',
      website: '',
      url: '',
      techs: [""],
      lang: '',
    },
    {
      id:1,
      title:"Virginie",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      description:"",
      category:"",
      level:"",
      type:"Product Owner / Git Master",
      slug: '',
      website: '',
      url: '',
      techs: [""],
      lang: '',
    },
    {
      id:1,
      title:"Virginie",
      image:"https://www.nombresdesanges.com/wp-content/uploads/2018/09/4.jpg",
      description:"",
      category:"",
      level:"",
      type:"Product Owner / Git Master",
      slug: '',
      website: '',
      url: '',
      techs: [""],
      lang: '',
    },
  ]

  return (
    <div className="about">
      <div className="about__description">
        <h2 className="about__description__title subtitle">Qu'est-ce que DEVinterest?</h2>
        <p className="about__description__text">
          DEVinterest est une plateforme d'agrégation de liens sous forme de cartes ludiques vers des contenus intéressant les développeurs. 
          Le site veut rendre l'accès aux contenus autour du développement accessible au plus grand nombre en créant une communauté basée sur le partage!
        </p>
        <p className="about__description__text">
          Le développement web est tellement vaste et en perpétuelle évolution qu'il peut s'avérer difficile de faire son choix parmi un éventail infini de ressources (pas toujours de qualité), et éparpillées sur une multitude de plateformes différentes.
          Pour apprendre, pratiquer ou approfondir une nouvelle notion, il peut être difficile de connaitre les ressources existantes et adaptées à notre niveau/besoins. On ne sait pas toujours où regarder devant la profusion de sites proposant eux-mêmes des milliers de contenus.
        </p>
        <p className="about__description__text">
          L'objectif principal du site est de permettre aux utilisateurs de sauvegarder des contenus sous forme de liens, de les organiser (par technologie, par catégorie et par difficulté) en un seul endroit et de pouvoir également les partager. 
        </p>
        <p className="about__description__text">
          Ce système offre par la même occasion à tous les visiteurs, connectés ou non, la possibilité de découvrir les liens vers des ressources qui peuvent les inspirer ou leur être utiles.
          Les cartes sont des liens vers des ressources diverses (astuces, tutos, inspiration, outils, plateformes de challenges, ...) aux formats variés (articles, vidéos, jeux...). 
        </p>
      </div>
      <div className="about__team">
        <div className="about__team__title subtitle">L'équipe DEVinterest</div>
        <Masonry
            breakpointCols={4}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {
                teamCards.map(
                  (card) => (
                    <div className="masonry-div" key={card.id}>
                      <CardPreview key={card.id} card={card} />
                    </div>
                  ),
                )
              }
          </Masonry>
      </div>
    </div>
  );
}; 

export default About;
