import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';

import { useEffect } from 'react';
import { changeNewCardField, getOpengraphData, cardExist } from '../../action/cardNew';
import { setRedirectToFalse, showAddCardModal, showConnexionModal } from '../../action/displayOptions';

import LogoDEVLovePPER from '../../assets/LogoDEVLovePPER.svg';

import Button from '../GenericComponents/Button';

import './add-card-modal.scss';
import SubmitButton from '../GenericComponents/SubmitButton';
import UrlField from '../GenericComponents/UrlField';

const AddCardModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { url, cardExistValue, cardExistUrl } = useSelector((state) => state.cardNew);
  const { darkMode, addCardModal } = useSelector((state) => state.displayOptions);
  const { isLogged } = useSelector((state) => state.userCurrent);

  const { redirect } = useSelector((state) => state.displayOptions);
  useEffect(() => {
    if (redirect) {
      history.push('/add-card');
      dispatch(setRedirectToFalse());
    }
  }, [redirect]);

  const handleModalAddCardUrlSubmit = (e) => {
    e.preventDefault();
    if (isLogged) {
      dispatch(getOpengraphData());
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

  const handleNewCardEntryClick = () => {
    dispatch(changeNewCardField('', 'url'));
    dispatch(cardExist(false));
  };

  const handleSeeCardClick = () => {
    dispatch(cardExist(false));
    dispatch(changeNewCardField('', 'url'));
    dispatch(showAddCardModal());
    history.push(cardExistUrl);
  };

  if (!addCardModal) {
    return null;
  }

  return (
    <div className="add-card-modal__container">
      <div className="add-card-modal" onClick={() => dispatch(showAddCardModal())}>
        <div className={darkMode ? 'add-card-modal__content modal_animation add-card-modal__content--dark' : 'add-card-modal__content modal_animation'} onClick={(e) => e.stopPropagation()}>
          <div className="add-card-modal__header">
            <div className="connexion-modal__header-header">
              <div className="connexion-modal__header-header--item" />
              <div className="connexion-modal__header-header--item">
                <img className="connexion-modal__logo" src={LogoDEVLovePPER} alt="logo court" onClick={handleHomeRedirect} />
              </div>
              <div className="connexion-modal__header-header--item" onClick={() => dispatch(showAddCardModal())}>
                <GrFormClose className="close-icon" />
              </div>
            </div>
            <h4 className="add-card-modal__title">Enregistrement d'une nouvelle ressource</h4>
          </div>
          {
              (!isLogged) && (
                <div className="add-card-modal__connexion-warning__container">
                  <div
                    className="add-card-modal__connexion-warning"
                  >
                    Il faut être connecté.e pour pouvoir ajouter une ressource ou la mettre en favoris!
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
              (isLogged) && !cardExistValue && (
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
          {
              (isLogged) && cardExistValue && (
                <div className="add-card-modal__connexion-warning__container">
                  <div
                    className="add-card-modal__connexion-warning"
                  >
                    Votre carte existe déjà sur DEV Interest !
                  </div>
                  <div className="add-card-modal__footer">
                    <Button
                      submit
                      styling="outline"
                      handleClick={handleNewCardEntryClick}
                      content="Rentrer un nouveau lien"
                      color
                    />
                    <Button
                      submit
                      styling="full"
                      handleClick={handleSeeCardClick}
                      content="Voir la carte"
                      color
                    />
                  </div>
                </div>
              )
            }
        </div>
      </div>
    </div>
  );
};
export default AddCardModal;
