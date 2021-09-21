// == Import

import { useSelector } from 'react-redux';

import './app.scss';

import Footer from '../Footer';
import Header from '../Header';
import ConnexionModal from '../ConnexionModal';


// == Composant
const App = () => {
  const connexionModal = useSelector((state) => state.user.connexionModal);

  return (
    <div className="app">
      <div className={connexionModal ? 'main__page blur' : 'main__page'}>
        <div className="content-wrap">
          <Header />
        </div>
        <Footer />
      </div>
      <ConnexionModal />
    </div>
  );
}
// == Export
export default App;
