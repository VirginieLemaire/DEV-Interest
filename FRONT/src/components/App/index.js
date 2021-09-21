import { useSelector } from 'react-redux';

import './app.scss';

import Footer from '../Footer';
import Header from '../Header';
import ConnexionModal from '../ConnexionModal';
import Card from '../Card';


// == Composant
const App = () => {
  const connexionModal = useSelector((state) => state.user.connexionModal);
  const cards = useSelector((state) => state.cards.cards)

  return (
   <div className="app">
      <div className={connexionModal ? 'main__page blur' : 'main__page'}>
        <div className="content-wrap">
          <Header />
          {
           cards.map(
             (card) => (
              <Card key={card.id} card={card}/>
             )
           )
          }
        </div>
        <Footer />
      </div>
      <ConnexionModal />
    </div>
  );
}
// == Export
export default App;
