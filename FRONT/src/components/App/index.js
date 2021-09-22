// == Import

import { useSelector } from 'react-redux';
import Header from '../Header';
import './app.scss';
import Home from '../Home';
import {
  isConnected, user, categories, techs,
} from '../../../public/fakeDatas';

// == Composant
const App = () => {
  const cards = useSelector((state) => state.cards.cards)
  console.log(cards);
  return(
  <div className="app">
    <Header />
    <Home isConnected={isConnected} user={user} categories={categories} techs={techs} />
  </div>
);
}

// == Export
export default App;
