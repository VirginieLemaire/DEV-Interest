import './home.scss';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';
import Tag from './Tag';

const categories = [
  {
    name: 'Approfondir',
  },
  {
    name: 'Apprendre',
  },
  {
    name: 'Me challenger',
  },
];

const techs = [
  {
    name: 'HTML',
    color: '#eaa8a8',
  },
  {
    name: 'CSS',
    color: '#00bfff',
  },
  {
    name: 'JavaScript',
    color: '#e0e000',
  },
  {
    name: 'PHP',
    color: '#6270ea',
  },
  {
    name: 'Python',
    color: '#f9a95e',
  },
  {
    name: 'Mongo',
    color: '#069101',
  },
];

const Home = () => {
  const handleSubmit = () => console.log('Submit');
  const handleChange = () => console.log('Change');
  const handleClick = () => console.log('Click');

  return (
    <div className="home">
      <p className="home__catch-title">Découvre de nouvelles choses</p>
      <SearchBar
        loading={false}
        placeholder="Saisis un mot clé..."
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value=""
      />
      <hr className="home__break" />
      <p className="home__catch-phrase">...et partage tes bons plans que tu peux garder en favoris!</p>
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

export default Home;
