import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';

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
import AddCardThankModal from '../Modals/AddCardThankModal';
import CreateAccountThankModal from '../Modals/CreateAccountThankModal';
import UpdateAccountSuccessModal from '../Modals/UpdateAccountSuccessModal';
import UpdateCardSuccessModal from '../Modals/UpdateCardSuccessModal';
import DeleteUserSuccessModal from '../Modals/DeleteUserSuccessModal';
import Header2 from '../Header2';
import HeaderOffset from '../GenericComponents/HeaderOffSet';
import DeleteUserModal from '../DeleteUserModal';
import UpdateCard from '../UpdateCard';
import DeleteCardModal from '../DeleteCardModal';
import DeleteCardSuccessModal from '../Modals/DeleteCardSuccessModal';
import ErrorPage from '../404';
import { getUserWithToken, toggleLogged } from '../../action/userCurrent';
import Home2 from '../Home2';
import SearchModal from '../SearchModal';

const App = () => {
  const dispatch = useDispatch();

  const {
    darkMode, appLoading, addCardModal, connexionModal, modal,
  } = useSelector((state) => state.displayOptions);

  const { username, id, isLogged } = useSelector((state) => state.userCurrent);

  const cardsHome = useSelector((state) => state.cardsHome.cards);

  const cardsSearch = useSelector((state) => state.cardsSearch.cards);

  const { contributions, bookmarkedCards } = useSelector((state) => state.userCurrent);

  const mergedCards = [...cardsHome, ...cardsSearch, ...contributions, ...bookmarkedCards];

  // dispatch(getUserWithToken());

  useEffect(() => {
    dispatch(getUserWithToken());
    dispatch(fetchCardsHome());
  }, []);

  if (appLoading) return <AppLoader />;

  return (
    <div className={darkMode ? 'app--dark' : 'app'}>
      <div className={`main__page ${connexionModal ? 'blur' : ''} ${addCardModal ? 'blur' : ''} ${modal ? 'blur' : ''}`}>
        <div className="content-wrap">
          <ScrollTop />
          <Header2 />
          <HeaderOffset />
          <Switch>
            <Route path="/" exact component={Home2} />
            <Route path="/search" exact component={SearchResults} />
            {
              mergedCards.map(
                (card) => (
                  <Route key={card.id} path={`/cards/${card.slug}/${card.id}`} exact>
                    <CardDetails key={card.id} card={card} />
                  </Route>
                ),
              )
            }
            <Route path="/add-card" exact component={AddCard} />
            <Route path="/update-card" exact component={UpdateCard} />
            <Route path={`/${username.toLowerCase()}/${id}/bookmarks`} exact component={UserBookmarks} />
            <Route path={`/${username.toLowerCase()}/account`} exact component={UserAccount} />
            <Route path={`/${username.toLowerCase()}/account/update`} exact component={UserAccountUpdate} />
            <Route path="/legal" exact component={Legal} />
            <Route path="/terms-of-use" exact component={TermsOfUse} />
            <Route path="/about" exact component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
      </div>
      <AddCardModal />
      <SearchModal />
      <ConnexionModal />
      <AddCardThankModal />
      <CreateAccountThankModal />
      <UpdateAccountSuccessModal />
      <UpdateCardSuccessModal />
      <DeleteUserSuccessModal />
      <DeleteCardSuccessModal />
      <DeleteUserModal />
      <DeleteCardModal />
    </div>
  );
};

export default App;
