// == Import

import { useSelector } from 'react-redux';

import './app.scss';
import {
  isConnected, user, categories, techs,
} from '../../../public/fakeDatas';

import Home from '../Home';
import Footer from '../Footer';
import Header from '../Header';

import ConnexionModal from '../ConnexionModal';


const App = () => {
  console.log(cards);
  
  const connexionModal = useSelector((state) => state.user.connexionModal);
  const cards = useSelector((state) => state.cards.cards)


  return (
    <div className="app">
      <div className={connexionModal ? 'main__page blur' : 'main__page'}>
        <div className="content-wrap">
          <Header />
          <Home isConnected={isConnected} user={user} categories={categories} techs={techs} />
        </div>
        <Footer />
      </div>
      <ConnexionModal />
    </div>
  );
}

export default App;
