import './home.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';
import Tag from './Tag';
import Card from '../Card';
import { randomArrayShuffle } from '../../selectors/utils';

const Home = () => {
  const handleSubmit = () => console.log('Submit');
  const handleChange = () => console.log('Change');
  const handleClick = () => console.log('Click');

  const { username, isConnected } = useSelector((state) => state.user);
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

  return (
    <div className="home">
      {
        isConnected ? <p className="home__catch-title">Salut {username}, qu'est ce qu'on fait aujourd'hui ?</p> : <p className="home__catch-title">Découvre de nouvelles choses</p>
      }
      <SearchBar
        fontSize="medium"
        size="half"
        loading={false}
        placeholder={isConnected ? 'Découvre de nouvelles choses' : 'Saisis un mot clé...'}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value=""
      />
      <hr className="home__break" />
      {!isConnected ? <p className="home__catch-phrase">...et partage tes bons plans que tu peux garder en favoris!</p> : null}
      <div className="home__button-container">
        <Button
          className="home__button"
          color
          styling="full"
          handleClick={handleClick}
          content="Proposer une nouvelle ressource"
        />
      </div>
      <div className="home__tags-container">
        {
          tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))
        }
      </div>
      <div className="home__cards-container">
        {
          cards.map((card) => (
            <Card key={card.id} card={card} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
