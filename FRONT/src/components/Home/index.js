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
    color: '#6be2ef',
  },
  {
    name: 'JavaScript',
    color: '#e7fc5f',
  },
  {
    name: 'PHP',
    color: '6270ea',
  },
  {
    name: 'Python',
    color: '#f9a95e',
  },
  {
    name: 'Mongo',
    color: '#61f95e',
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
      <hr />
      <p className="home__catch-phrase">...et partage tes bons plans que tu peux garder en favoris!</p>
      <Button
        color
        styling="full"
        handleClick={handleClick}
        content="Proposer une nouvelle ressource"
      />
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
