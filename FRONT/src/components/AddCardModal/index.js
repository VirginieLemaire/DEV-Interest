import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showAddCardModal, showConnexionModal } from '../../action/user';

import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';

import './add-card-modal.scss';
import { changeNewCardField } from '../../action/cards';

const AddCardModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addCardModal = useSelector((state) => state.user.addCardModal);
  const isLogged = useSelector((state) => state.user.isLogged);

  const url = useSelector((state) => state.cards.newCard.url);

  const handleCloseModalAndRedirectClick = () => {
    if (isLogged) {
      dispatch(showAddCardModal());
      history.push('/add-card');
    }
  };

  const handleSubmitAddCardLink = (e) => {
    e.preventDefault();
  };

  const handleConnexionClick = () => {
    dispatch(showAddCardModal());
    dispatch(showConnexionModal());
  };

  if (!addCardModal) {
    return null;
  }

  return (
    <div className="add-card-modal__container">
      <div className="add-card-modal__close">
        Close
      </div>
      <div className="add-card-modal" onClick={() => dispatch(showAddCardModal())}>
        <div className="add-card-modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="add-card-modal__header">
            <h4 className="add-card-modal__title">Partager une nouvelle ressource</h4>
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
                <form autoComplete="off" onSubmit={handleSubmitAddCardLink}>
                  <div className="add-card-modal__body">
                    <Field
                      value={url}
                      type="text"
                      name="add-card-url"
                      placeholder="Lien URL de votre ressource..."
                      handleChange={(e) => dispatch(changeNewCardField(e.target.value, 'url'))}
                    />
                  </div>
                  <div className="add-card-modal__footer">
                    <Button
                      submit
                      styling="full"
                      handleClick={handleCloseModalAndRedirectClick}
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
