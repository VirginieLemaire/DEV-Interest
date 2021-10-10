import { useDispatch, useSelector } from 'react-redux';
import { showAddCardModal } from '../../../action/displayOptions';
import { capitalizeFirstLetter } from '../../../selectors/utils';
import Button from '../../GenericComponents/Button';
import SearchBar from '../../GenericComponents/SearchBar';
import Slider from '../../Slider';
import './home-lp.scss';

const HomeLP = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.displayOptions);
  const { username, isLogged } = useSelector((state) => state.userCurrent);

  return (
    <div className={darkMode ? 'home-lp home-lp--dark' : 'home-lp'}>
      <div className="home-lp__actions-container">
        { isLogged && (
          <div>
            <h2 className="home-lp__title"><br />Hello <span className="home-lp__title-devint">{capitalizeFirstLetter(username)}</span> !<br /> Qu'est ce que l'on fait aujourd'hui ?</h2>
            <aside className="home-lp__subtitle"> Pars à la découverte de nouvelles ressources pour être un développeur toujours à la pointe ou partage tes bons plans à la communauté</aside>
          </div>
        )}
        { !isLogged && (
          <div>
            <h2 className="home-lp__title"><span className="home-lp__title-devint">DEV Interest</span><br /> Tout ce qui tient à coeur <br /> aux développeurs</h2>
            <aside className="home-lp__subtitle"> Découvre, recherche, sauvegarde ou partage une multitude de ressources autour du développement informatique pour être toujours à la page!</aside>
          </div>
        )}
        <div className="home-lp__actions-container__actions">
          <div className="home-lp__searchbar-container">
            <SearchBar
              fontSize="medium"
              placeholder={isLogged ? 'Découvre de nouvelles ressources' : 'Saisis un mot clé...'}
              value=""
            />
          </div>
          <p className="home-lp__or">ou</p>
          <div className="home-lp__button" onClick={() => dispatch(showAddCardModal())}>Propose une nouvelle ressource</div>
        </div>
      </div>
      <div className="home-lp__slider-container">
        <Slider />
      </div>
    </div>
  );
};

export default HomeLP;
