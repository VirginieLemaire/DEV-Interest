import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';

import {
  changeField, login,
  showConnexionModal,
} from '../../action/user';

import './connexion-modal.scss';

import logoCourt from '../../assets/DI-logo-court.png';

import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import EmailField from '../GenericComponents/EmailField';
import PasswordField from '../GenericComponents/PasswordField';
import SubmitButton from '../GenericComponents/SubmitButton';

const ConnexionModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const connexionModal = useSelector((state) => state.user.connexionModal);

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleSignupClick = () => {
    dispatch(showConnexionModal());
    history.push('/signup');
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    dispatch(showConnexionModal());
    dispatch(login());
    history.push('/');
  };

  const handleHomeRedirect = () => {
    history.push('/');
    dispatch(showConnexionModal());
  };

  if (!connexionModal) {
    return null;
  }

  return (
    <div className="connexion-modal" onClick={() => dispatch(showConnexionModal())}>
      <div className="connexion-modal__content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmitConnexion}>
          <div className="connexion-modal__header">
            <div className="connexion-modal__header-header">
              <div className="connexion-modal__header-header--item" />
              <div className="connexion-modal__header-header--item">
                <img className="connexion-modal__logo " src={logoCourt} alt="logo court" onClick={handleHomeRedirect} />
              </div>
              <div className="connexion-modal__header-header--item" onClick={() => dispatch(showConnexionModal())}>
                <GrFormClose className="close-icon" />
              </div>
            </div>
            <h4 className="connexion-modal__title">Se connecter</h4>
          </div>
          <div className="connexion-modal__body">
            <EmailField
              autoComplete
              value={email}
              name="email"
              placeholder="Email"
              handleChange={(e) => dispatch(changeField(e.target.value, 'email'))}
              required
            />
            <PasswordField
              autoComplete
              value={password}
              name="password"
              placeholder="Mot de passe"
              handleChange={(e) => dispatch(changeField(e.target.value, 'password'))}
              required
              minlength="4"
            />
          </div>
          <div className="connexion-modal__footer">
            <SubmitButton
              styling="full"
              content="Se connecter"
              color
            />
            <div className="connexion-modal__option">
              <div>Vous n'avez pas de compte ?</div>
              <div className="linky" onClick={handleSignupClick}>S'inscrire</div>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default ConnexionModal;
