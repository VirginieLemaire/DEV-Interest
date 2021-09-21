import './home.scss';
import SearchBar from '../GenericComponents/SearchBar';
import Button from '../GenericComponents/Button';

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

    </div>
  );
};

export default Home;
