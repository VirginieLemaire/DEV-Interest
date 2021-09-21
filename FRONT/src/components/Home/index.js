import './home.scss';
import PropTypes from 'prop-types';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';
import Tag from './Tag';

const Home = ({
  isConnected, user, categories, techs,
}) => {
  const handleSubmit = () => console.log('Submit');
  const handleChange = () => console.log('Change');
  const handleClick = () => console.log('Click');

  return (
    <div className="home">
      {
        isConnected ? <p className="home__catch-title">Salut {user.name}, qu'est ce qu'on fait aujourd'hui ?</p> : <p className="home__catch-title">Découvre de nouvelles choses</p>
      }
      <SearchBar
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
          color
          styling="full"
          handleClick={handleClick}
          content="Proposer une nouvelle ressource"
        />
      </div>
      <div className="home__tags-container">
        {
          categories.map((category) => (
            <Tag key={category.name} name={category.name} />
          ))
        }
        {
          techs.map((tech) => (
            <Tag key={tech.name} name={tech.name} color={tech.color} />
          ))
        }
      </div>
    </div>
  );
};

Home.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
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
