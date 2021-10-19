import './about.scss';
import { useSelector, useDispatch } from 'react-redux';
import CardTeamFront from '../CardTeamFront';
import CardTeamBack from '../CardTeamBack';
import ReactCardFlip from 'react-card-flip';
import { flipCard } from '../../action/cardsTeam';

const About = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.displayOptions);
  const { teamCards } = useSelector((state) => state.cardsTeam);

  return (
    <div className={darkMode ? "about about--dark" : "about"}>
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
      <div className="about__description__title subtitle">L'équipe DEVinterest</div>
      <div className="about__team">
        <div className="about__team__cards">
            {
                teamCards.map(
                  (card) => (
                    <div onClick={()=> dispatch(flipCard(card.id))} className="about__team__cards__card" key={card.title}>
                    <ReactCardFlip key={card.id} isFlipped={card.isFlipped} flipDirection="horizontal" flipSpeedFrontToBack={0.9}	flipSpeedBackToFront={0.9}>
                      <CardTeamFront card={card} />
                      <CardTeamBack card={card} />
                    </ReactCardFlip>
                    </div>
                  ),
                )
            }
        </div>
      </div>
    </div>
  );
}; 

export default About;
