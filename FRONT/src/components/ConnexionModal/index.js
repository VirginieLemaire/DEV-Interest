import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';

import {
  changeField, changeNewUserField, login,
  showConnexionModal,
  showSingupModal,
} from '../../action/user';

import './connexion-modal.scss';

import logoCourt from '../../assets/DI-logo-court.png';

import EmailField from '../GenericComponents/EmailField';
import PasswordField from '../GenericComponents/PasswordField';
import SubmitButton from '../GenericComponents/SubmitButton';

const ConnexionModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const connexionModal = useSelector((state) => state.user.connexionModal);

  const hasAnAccount = useSelector((state) => state.user.hasAnAccount);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleSignupClick = () => {
    dispatch(showSingupModal());
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

  // const handleKeyPress = (e) => {
  //   if (e.keyCode === 27) {
  //     dispatch(showConnexionModal());
  //   }
  // };

  if (!connexionModal) {
    return null;
  }

  return (
    <div className="connexion-modal" onClick={() => dispatch(showConnexionModal())}>
      {hasAnAccount && (
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
      )}

      {!hasAnAccount && (
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
              <h4 className="connexion-modal__title">S'inscrire</h4>
            </div>
            <div className="connexion-modal__body">
              <EmailField
                autoComplete
                value={email}
                name="email"
                placeholder="Email"
                handleChange={(e) => dispatch(changeNewUserField(e.target.value, 'email'))}
                required
              />
              <PasswordField
                autoComplete
                value={password}
                name="new_user_password"
                placeholder="Mot de passe"
                handleChange={(e) => dispatch(changeNewUserField(e.target.value, 'password'))}
                required
                minlength="4"
              />
              <PasswordField
                autoComplete
                value={password}
                name="new_user_verification_password"
                placeholder="Vérification du Mot de passe"
                handleChange={(e) => dispatch(changeNewUserField(e.target.value, 'passwordVerfication'))}
                required
                minlength="4"
              />
            </div>
            <div className="connexion-modal__footer">
              <SubmitButton
                styling="full"
                content="S'inscrire"
                color
              />
              <div className="connexion-modal__option">
                <div>J'ai déjà un compte !</div>
                <div className="linky" onClick={handleSignupClick}>Se connecter</div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ConnexionModal;
