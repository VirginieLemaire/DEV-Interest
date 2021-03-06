import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import CgAddR from '@react-icons/all-files/cg/CgAddR';

import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';
// import Tag from '../GenericComponents/Tag';
// import { randomArrayShuffle } from '../../selectors/utils';
// import { changeNewCardField, fetchCards } from '../../action/cards';
import { showAddCardModal } from '../../action/displayOptions';
import HomeCards from '../HomeCards';
import { fetchCardsHome } from '../../action/cardsHome';
import Loader from '../GenericComponents/Loader';
import Slider from '../Slider';

const Home = () => {
  const dispatch = useDispatch();

  const { username, isLogged } = useSelector((state) => state.userCurrent);

  const { darkMode } = useSelector((state) => state.displayOptions);
  // // Get categories from cards and remove doubles
  // const mapCategories = cards.map((card) => card.category);
  // const categories = [...new Set(mapCategories)];
  // // Get techs from cards and remove doubles
  // const mapTechnosArrays = cards.map((card) => card.technos);
  // const mergeTechnosArrays = mapTechnosArrays.flat(1);
  // const technos = [...new Set(mergeTechnosArrays)];
  // // Regroup categories and technos in an array
  // const groupCategoriesAndTechnos = [categories, technos];
  // const tags = groupCategoriesAndTechnos.flat(1);
  // // Make tags array random
  // randomArrayShuffle(tags);

  return (
    <div className={darkMode ? 'home home--dark' : 'home'}>
      <div className="home__welcome-container">
        <div className="home__welcome-container__actions">
          {
            isLogged ? <p className="home__welcome-container__actions__catch-title">Salut {username}, qu'est ce qu'on fait aujourd'hui ?</p> : <p className="home__welcome-container__actions__catch-title">Découvre de nouvelles choses</p>
          }
          <div className="home__welcome-container__actions__searchbar-container">
            <SearchBar
              fontSize="medium"
              // size="half"
              placeholder={isLogged ? 'Découvre de nouvelles choses' : 'Saisis un mot clé...'}
              value=""
            />
          </div>
          <hr className="home__welcome-container__actions__break" />
          {!isLogged ? <p className="home__welcome-container__actions__catch-phrase">...et partage tes bons plans que tu peux garder en favoris!</p> : null}
          <div className="home__welcome-container__actions__button-container">
            <Button
              fontSize="medium"
              color
              styling="full"
              handleClick={() => dispatch(showAddCardModal())}
              content="Proposer une nouvelle ressource"
            />
          </div>
        </div>
        <div className={darkMode ? 'home__welcome-container__slider--dark' : 'home__welcome-container__slider'}  >
          <Slider  />
        </div>
      </div>
      {
        //   <div className="home__tags-content-wraper">
        //   <div className="home__tags-content-wraper__tags-container">
        //     {
        //       tags.map((tag) => (
        //         <Tag key={tag} name={tag} />
        //       ))
        //     }
        //   </div>
        // </div>
      }
      <Loader />
      <HomeCards />
    </div>
  );
};

export default Home;
