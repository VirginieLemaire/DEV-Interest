// == Import

import { useSelector } from 'react-redux';

import Footer from '../Footer';
import Header from '../Header';
import './app.scss';

// == Composant
const App = () => {
  const cards = useSelector((state) => state.cards.cards)

  console.log(cards);
  return(
  <div className="app">
    <div className="content-wrap">
      <Header />
    </div>
    <Footer />  
  </div>
);
}
// == Export
export default App;
