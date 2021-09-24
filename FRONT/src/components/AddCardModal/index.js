import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, showAddCardModal } from '../../action/user';

import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';

import './add-card-modal.scss';
import { changeNewCardField } from '../../action/cards';

const AddCardModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addCardModal = useSelector((state) => state.user.addCardModal);

  const newCardUrl = useSelector((state) => state.cards.newCardUrl);

  const handleAddCardLinkChange = (event) => {
    dispatch(changeNewCardField(event.target.value, 'newCardUrl'));
  };

  const handleCloseModalClick = () => {
    dispatch(showAddCardModal());
  };

  const handleCloseModalAndRedirectClick = () => {
    dispatch(showAddCardModal());
    history.push('/add-card');
  };

  const handleSubmitAddCardLink = (e) => {
    e.preventDefault();
  };

  if (!addCardModal) {
    return null;
  }

  return (
    <div className="add-card-modal__container">
      <div className="add-card-modal__close">
        Close
      </div>
      <div className="add-card-modal" onClick={handleCloseModalClick}>
        <div className="add-card-modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="add-card-modal__header">
            <h4 className="add-card-modal__title">Partager une nouvelle ressource</h4>
          </div>
          <form autoComplete="off" onSubmit={handleSubmitAddCardLink}>
            <div className="add-card-modal__body">
              <Field
                value={newCardUrl}
                type="text"
                name="add-card-url"
                placeholder="Lien URL de votre ressource..."
                handleChange={handleAddCardLinkChange}
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
        </div>
      </div>
    </div>
  );
};
export default AddCardModal;
