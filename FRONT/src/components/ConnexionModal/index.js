import { Link, useHistory } from 'react-router-dom';
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

const ConnexionModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const connexionModal = useSelector((state) => state.user.connexionModal);

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleEmailChange = (event) => {
    dispatch(changeField(event.target.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    dispatch(changeField(event.target.value, 'password'));
  };

  const handleCloseModalClick = () => {
    dispatch(showConnexionModal());
  };

  const handleSignupClick = () => {
    dispatch(showConnexionModal());
    history.push('/signup');
  };

  const handleSubmitConnexion = (e) => {
    e.preventDefault();
    dispatch(showConnexionModal());
    dispatch(login());
  };

  const handleHomeRedirect = () => {
    history.push('/');
    handleCloseModalClick();
  };

  if (!connexionModal) {
    return null;
  }

  return (
    <div className="connexion-modal" onClick={handleCloseModalClick}>
      <div className="connexion-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="connexion-modal__header">
          <div className="connexion-modal__header-header">
            <div className="connexion-modal__header-header--item" />
            <div className="connexion-modal__header-header--item">
              <img className="connexion-modal__logo " src={logoCourt} alt="logo court" onClick={handleHomeRedirect} />
            </div>
            <div className="connexion-modal__header-header--item" onClick={handleCloseModalClick}>
              <GrFormClose className="close-icon" />
            </div>
          </div>
          <h4 className="connexion-modal__title">Se connecter</h4>
        </div>
        <div className="connexion-modal__body">
          <Field
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            handleChange={handleEmailChange}
            required
          />
          <Field
            value={password}
            type="password"
            name="password"
            placeholder="Mot de passe"
            handleChange={handlePasswordChange}
            required
          />
        </div>
        <div className="connexion-modal__footer">
          <Button
            styling="full"
            handleClick={handleSubmitConnexion}
            content="Se connecter"
            color
          />
          <div className="connexion-modal__option">
            <div>Vous n'avez pas de compte ?</div>
            <Link className="linky" to="/signup" onClick={handleSignupClick}>S'inscrire</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnexionModal;
