import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';

import { showConnexionModal, showSingupModal } from '../../action/displayOptions';
import { changeConnectingUserField, login } from '../../action/userConnect';

import LogoDEVLovePPER from '../../assets/LogoDEVLovePPER.svg';

import './connexion-modal.scss';

import EmailField from '../GenericComponents/EmailField';
import PasswordField from '../GenericComponents/PasswordField';
import SubmitButton from '../GenericComponents/SubmitButton';
import Field from '../GenericComponents/Field';
import {
  changeNewUserField, signup, verifyEmail, verifyUsername,
} from '../../action/userCreate';

const ConnexionModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { darkMode, hasAnAccount, connexionModal } = useSelector((state) => state.displayOptions);
  const { usernameAvailability, emailAvailability } = useSelector((state) => state.userCreate);

  const { email, password } = useSelector((state) => state.userConnect);

  const newUserUsername = useSelector((state) => state.userCreate.username);
  const newUserEmail = useSelector((state) => state.userCreate.email);
  const newUserPassword = useSelector((state) => state.userCreate.password);
  const newUserPasswordVerif = useSelector((state) => state.userCreate.passwordVerification);

  const handleSignupClick = () => {
    dispatch(showSingupModal());
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    dispatch(showConnexionModal());
    dispatch(login());
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    if (newUserPassword === newUserPasswordVerif) {
      dispatch(showConnexionModal());
      dispatch(signup());
      history.push('/');
    }
  };

  const handleHomeRedirect = () => {
    history.push('/');
    dispatch(showConnexionModal());
  };

  const handleChangeNewUsername = (e) => {
    dispatch(verifyUsername(e.target.value));
    dispatch(changeNewUserField(e.target.value, 'username'));
  };
  const handleChangeNewEmail = (e) => {
    dispatch(verifyEmail(e.target.value));
    dispatch(changeNewUserField(e.target.value, 'email'));
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
        <div className={darkMode ? 'connexion-modal__content modal_animation connexion-modal__content--dark' : 'connexion-modal__content modal_animation'} onClick={(e) => e.stopPropagation()}>
          <form autoComplete="on" onSubmit={handleSubmitConnexion}>
            <div className="connexion-modal__header">
              <div className="connexion-modal__header-header">
                <div className="connexion-modal__header-header--item" />
                <div className="connexion-modal__header-header--item">
                  <img className="connexion-modal__logo" src={LogoDEVLovePPER} alt="logo court" onClick={handleHomeRedirect} />
                </div>
                <div className={darkMode ? 'connexion-modal__header-header--item connexion-modal__header-header--item--dark' : 'connexion-modal__header-header--item'} onClick={() => dispatch(showConnexionModal())}>
                  <GrFormClose className="close-icon" />
                </div>
              </div>
              <h4 className="connexion-modal__title">Se connecter</h4>
            </div>
            <div className="connexion-modal__body">
              <EmailField
                autoComplete="on"
                value={email}
                name="email"
                placeholder="Email"
                handleChange={(e) => dispatch(changeConnectingUserField(e.target.value, 'email'))}
                required
              />
              <PasswordField
                autoComplete="on"
                value={password}
                name="password"
                placeholder="Mot de passe"
                handleChange={(e) => dispatch(changeConnectingUserField(e.target.value, 'password'))}
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
        <div className={darkMode ? 'connexion-modal__content modal_animation connexion-modal__content--dark' : 'connexion-modal__content modal_animation'} onClick={(e) => e.stopPropagation()}>
          <form autoComplete="off" onSubmit={handleSubmitSignup}>
            <div className="connexion-modal__header">
              <div className="connexion-modal__header-header">
                <div className="connexion-modal__header-header--item" />
                <div className="connexion-modal__header-header--item">
                  <img className="connexion-modal__logo" src={LogoDEVLovePPER} alt="logo court" onClick={handleHomeRedirect} />
                </div>
                <div className="connexion-modal__header-header--item" onClick={() => dispatch(showConnexionModal())}>
                  <GrFormClose />
                </div>
              </div>
              <h4 className="connexion-modal__title">S'inscrire</h4>
            </div>
            <div className="connexion-modal__body">
              <Field
                autoComplete="off"
                value={newUserUsername}
                name="new-user_username"
                placeholder={usernameAvailability ? 'Nom d\'utilisateur' : 'Nom d\'utilisateur - déjà utilisé'}
                handleChange={handleChangeNewUsername}
                minlength="4"
                maxlength="20"
                required
                className={usernameAvailability ? 'field__input' : 'field__input not-available'}
              />
              <EmailField
                autoComplete="off"
                value={newUserEmail}
                name="new-user_email"
                placeholder={emailAvailability ? 'Email' : 'Email - déjà utilisé'}
                handleChange={handleChangeNewEmail}
                required
                className={emailAvailability ? 'email-field__input' : 'email-field__input not-available'}
              />
              <PasswordField
                autoComplete="new-password"
                value={newUserPassword}
                name="new-user_password"
                placeholder="Mot de passe"
                handleChange={(e) => dispatch(changeNewUserField(e.target.value, 'password'))}
                required
                minlength="4"
              />
              <PasswordField
                autoComplete="new-password"
                value={newUserPasswordVerif}
                name="new-user_verification_password"
                placeholder="Vérification du mot de passe"
                handleChange={(e) => dispatch(changeNewUserField(e.target.value, 'passwordVerification'))}
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
