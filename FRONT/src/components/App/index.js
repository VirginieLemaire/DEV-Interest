// == Import
import Button from '../GenericComponents/Button';
import CardDetails from '../CardDetails';
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
    <CardDetails />
    
  </div>
);
}
// == Export
export default App;
