// == Import
import './app.scss';
import Home from '../Home';
import {
  isConnected, user, categories, techs,
} from '../../../public/fakeDatas';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Home isConnected={isConnected} user={user} categories={categories} techs={techs} />
    </div>
  );
};

// == Export
export default App;
