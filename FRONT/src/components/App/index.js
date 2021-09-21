// == Import
import Button from '../GenericComponents/Button';
import './app.scss';

// == Composant
const App = () => {
  
  const handleClick = (e) =>{
    e.preventDefault();
  }

  return(
  <div className="app">
    <h1>Composant : App</h1>
    <Button color styling="full" submit handleClick={handleClick} content="Se connecter" />
  </div>
);
}
// == Export
export default App;
