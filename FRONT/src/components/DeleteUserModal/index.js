import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';

import { showDeleteUserModal } from '../../action/displayOptions';

import LogoDEVLovePPER from '../../assets/LogoDEVLovePPER.svg';

import Button from '../GenericComponents/Button';

import './delete-user-modal.scss';
import { deleteUserCurrent } from '../../action/userUpdate';

const DeleteUserModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { darkMode, deleteUserModal } = useSelector((state) => state.displayOptions);
  const { isLogged, username } = useSelector((state) => state.userCurrent);

  const handleYesConnexionClick = () => {
    dispatch(deleteUserCurrent());
    dispatch(showDeleteUserModal());
    history.push('/');
  };

  const handleNoConnexionClick = () => {
    dispatch(showDeleteUserModal());
  };

  const handleHomeRedirect = () => {
    history.push('/');
    dispatch(showDeleteUserModal());
  };

  if (!deleteUserModal || !isLogged) {
    return null;
  }

  return (
    <div className="add-card-modal__container">
      <div className="add-card-modal" onClick={() => dispatch(showDeleteUserModal())}>
        <div className={darkMode ? 'add-card-modal__content modal_animation add-card-modal__content--dark' : 'add-card-modal__content modal_animation'} onClick={(e) => e.stopPropagation()}>
          <div className="delete-user-modal__header">
            <div className="connexion-modal__header-header">
              <div className="connexion-modal__header-header--item" />
              <div className="connexion-modal__header-header--item">
                <img className="connexion-modal__logo" src={LogoDEVLovePPER} alt="logo court" onClick={handleHomeRedirect} />
              </div>
              <div className="connexion-modal__header-header--item" onClick={() => dispatch(showDeleteUserModal())}>
                <GrFormClose className="close-icon" />
              </div>
            </div>
            <h4 className="delete-user-modal__title">{username}</h4>
          </div>
          <div className="delete-user-modal__connexion-warning__container">
            <div
              className={darkMode ? 'delete-user-modal__connexion-warning delete-user-modal__connexion-warning--dark' : 'delete-user-modal__connexion-warning'}
            >
              <div className="delete-user-modal__connexion-warning__main"> Souhaites-tu vraiment nous quitter ? </div>
              La communauté DEV Interest te remercie pour le temps que tu lui a accordé et espère te revoir très vite!
            </div>
            <div className="delete-user-modal__footer">
              <Button
                submit
                styling="outline"
                handleClick={handleYesConnexionClick}
                content="Supprimer"
                color
              />
              <Button
                submit
                styling="full"
                handleClick={handleNoConnexionClick}
                content="Rester"
                color
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
