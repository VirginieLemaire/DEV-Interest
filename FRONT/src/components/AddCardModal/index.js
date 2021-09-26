import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';
import { showAddCardModal, showConnexionModal } from '../../action/user';

import Button from '../GenericComponents/Button';

import './add-card-modal.scss';
import { changeNewCardField } from '../../action/cards';
import logoCourt from '../../assets/DI-logo-court.png';
import SubmitButton from '../GenericComponents/SubmitButton';
import UrlField from '../GenericComponents/UrlField';

const AddCardModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { addCardModal, isLogged, darkMode } = useSelector((state) => state.user);

  const { url } = useSelector((state) => state.cards.newCard);

  const handleModalAddCardUrlSubmit = (e) => {
    e.preventDefault();
    if (isLogged) {
      dispatch(showAddCardModal());
      history.push('/add-card');
    }
  };

  const handleConnexionClick = () => {
    dispatch(showAddCardModal());
    dispatch(showConnexionModal());
  };

  const handleHomeRedirect = () => {
    history.push('/');
    dispatch(showConnexionModal());
  };

  if (!addCardModal) {
    return null;
  }

  return (
    <div className="add-card-modal__container">
      <div className="add-card-modal" onClick={() => dispatch(showAddCardModal())}>
        <div className={darkMode ? 'add-card-modal__content add-card-modal__content--dark' : 'add-card-modal__content'} onClick={(e) => e.stopPropagation()}>
          <div className="add-card-modal__header">
            <div className="connexion-modal__header-header">
              <div className="connexion-modal__header-header--item" />
              <div className="connexion-modal__header-header--item">
                <img className="connexion-modal__logo " src={logoCourt} alt="logo court" onClick={handleHomeRedirect} />
              </div>
              <div className="connexion-modal__header-header--item" onClick={() => dispatch(showAddCardModal())}>
                <GrFormClose className="close-icon" />
              </div>
            </div>
            <h4 className="add-card-modal__title">Partage une nouvelle ressource</h4>
          </div>
          {
              (!isLogged) && (
                <div className="add-card-modal__connexion-warning__container">
                  <div
                    className="add-card-modal__connexion-warning"
                  >
                    Il faut être connecter pour pouvoir ajouter une nouvelle ressource !
                  </div>
                  <div className="add-card-modal__footer">

                    <Button
                      submit
                      styling="full"
                      handleClick={handleConnexionClick}
                      content="Se connecter"
                      color
                    />
                  </div>
                </div>
              )
            }
          {
              (isLogged) && (
                <form autoComplete="off" onSubmit={handleModalAddCardUrlSubmit}>
                  <div className="add-card-modal__body">
                    <UrlField
                      value={url}
                      type="url"
                      name="add-card-url"
                      placeholder="Lien URL de votre ressource..."
                      required
                      handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'url'))}
                    />
                  </div>
                  <div className="add-card-modal__footer">
                    <SubmitButton
                      styling="full"
                      content="Envoyer"
                      color
                    />
                  </div>
                </form>
              )
            }
        </div>
      </div>
    </div>
  );
};
export default AddCardModal;
