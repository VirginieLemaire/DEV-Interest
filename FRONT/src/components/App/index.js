import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { fetchCardsHome } from '../../action/cardsHome';

import './app.scss';

import Home from '../Home';
import Footer from '../Footer';
import Header from '../Header';
import ConnexionModal from '../ConnexionModal';
import CardDetails from '../CardDetails';
import Page404 from '../Page404';
import UserBookmarks from '../UserBookmarks';
import AddCard from '../AddCard';
import Legal from '../Legal';
import TermsOfUse from '../TermsOfUse';
import About from '../About';
import UserAccount from '../userAccount';
import UserAccountUpdate from '../UserAccountUpdate';
import SearchResults from '../SearchResults';
import AddCardModal from '../AddCardModal';
import ScrollTop from '../ScrollTop';
import AppLoader from '../GenericComponents/AppLoader';
import Loader from '../GenericComponents/Loader';

const App = () => {
  const dispatch = useDispatch();

  const {
    darkMode, appLoading, addCardModal, connexionModal,
  } = useSelector((state) => state.displayOptions);

  const { username, id } = useSelector((state) => state.userCurrent);

  const cardsHome = useSelector((state) => state.cardsHome.cards);

  const cardsSearch = useSelector((state) => state.cardsSearch.cards);

  const mergedCards = [...cardsHome, ...cardsSearch];

  useEffect(() => {
    dispatch(fetchCardsHome());
  }, []);

  if (appLoading) return <AppLoader />;

  return (
    <div className={darkMode ? 'app--dark' : 'app'}>
      <div className={`main__page ${connexionModal ? 'blur' : ''} ${addCardModal ? 'blur' : ''}`}>
        <div className="content-wrap">
          <ScrollTop />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact>
              <Loader />
              <SearchResults />
            </Route>
            {
              mergedCards.map(
                (card) => (
                  <Route key={card.id} path={`/cards/${card.slug}/${card.id}`} exact>
                    <CardDetails key={card.id} card={card} />
                  </Route>
                ),
              )
            }
            <Route path="/add-card" exact>
              <Loader />
              <AddCard />
            </Route>
            <Route path={`/${username.toLowerCase()}/${id}/bookmarks`} exact>
              <Loader />
              <UserBookmarks />
            </Route>
            <Route path={`/${username.toLowerCase()}/account`} exact component={UserAccount} />
            <Route path={`/${username.toLowerCase()}/account/update`} exact component={UserAccountUpdate} />
            <Route path="/legal" exact component={Legal} />
            <Route path="/terms-of-use" exact component={TermsOfUse} />
            <Route path="/about" exact component={About} />
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </div>
      <AddCardModal />
      <ConnexionModal />
    </div>
  );
};

export default App;
