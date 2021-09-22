// == Import

import { useSelector } from 'react-redux';
import Header from '../Header';
import './app.scss';

// == Composant
const App = () => {
  const cards = useSelector((state) => state.cards.cards)

  console.log(cards);
  return(
  <div className="app">
    <Header />
  </div>
);
}
// == Export
export default App;
