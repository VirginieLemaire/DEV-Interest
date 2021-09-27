import './home.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';
import Tag from '../GenericComponents/Tag';
import Card from '../Card';
import { randomArrayShuffle } from '../../selectors/utils';
import { changeNewCardField, fetchCards } from '../../action/cards';
import SearchResults from '../SearchResults';
import { showAddCardModal } from '../../action/user';

const Home = ({
  isConnected, categories, techs,
}) => {
  const handleSubmit = () => console.log('Submit');
  const handleChange = () => console.log('Change');
  const handleClick = () => {
    dispatch(showAddCardModal());
    dispatch(changeNewCardField('', 'url'));
  };

  const { username, isLogged } = useSelector((state) => state.user);
  const cards = useSelector((state) => state.cards.cards);

  // Get categories from cards and remove doubles
  const mapCategories = cards.map((card) => card.category);
  const categories = [...new Set(mapCategories)];
  // Get techs from cards and remove doubles
  const mapTechnosArrays = cards.map((card) => card.technos);
  const mergeTechnosArrays = mapTechnosArrays.flat(1);
  const technos = [...new Set(mergeTechnosArrays)];
  // Regroup categories and technos in an array
  const groupCategoriesAndTechnos = [categories, technos];
  const tags = groupCategoriesAndTechnos.flat(1);
  // Make tags array random
  randomArrayShuffle(tags);

  const username = useSelector((state) => state.user.username);

  return (
    <div className="home">
      {
        isLogged ? <p className="home__catch-title">Salut {username}, qu'est ce qu'on fait aujourd'hui ?</p> : <p className="home__catch-title">Découvre de nouvelles choses</p>
      }
      <div className="home__searchbar-container">
        <SearchBar
          fontSize="medium"
          // size="half"
          loading={false}
          placeholder={isLogged ? 'Découvre de nouvelles choses' : 'Saisis un mot clé...'}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value=""
        />
      </div>
      <hr className="home__break" />
      {!isLogged ? <p className="home__catch-phrase">...et partage tes bons plans que tu peux garder en favoris!</p> : null}
      <div className="home__button-container">
        <Button
          color
          styling="full"
          handleClick={handleClick}
          content="Proposer une nouvelle ressource"
        />
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

      <SearchResults />
    </div>
  );
};

Home.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  techs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
