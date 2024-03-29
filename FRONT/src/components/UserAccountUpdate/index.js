import './user-account-update.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import SubmitButton from '../GenericComponents/SubmitButton';
import EmailField from '../GenericComponents/EmailField';
import PasswordField from '../GenericComponents/PasswordField';
import { changeUpdateUserField, resetUpdateUserFields, updateUserCurrent } from '../../action/userUpdate';
import { updateAccountSuccessModal } from '../../action/displayOptions';

const UserAccountUpdate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    username, email, passwordCurrent, passwordNew, passwordNewVerification,
  } = useSelector((state) => state.userUpdate);
  const { username: usernameCurrent, email: emailCurrent } = useSelector((state) => state.userCurrent);
  const { darkMode } = useSelector((state) => state.displayOptions);

  const handleClick = () => {
    dispatch(resetUpdateUserFields());
    history.push(`/${usernameCurrent.toLowerCase()}/account`);
  };

  const handleSubmitUpdateForm = (event) => {
    event.preventDefault();
    if (passwordNew === passwordNewVerification) {
      dispatch(updateUserCurrent());
      history.push('/');
    }
  };

  return (
    <div className={darkMode ? 'user-account user-account--dark' : 'user-account'}>
      <form className="user-account-update__form" onSubmit={handleSubmitUpdateForm}>
        <h1 className="user-account-update__form__title">Modification du compte</h1>
        <h2 className="user-account-update__form__subtitle">Modifier le nom d'utilisation</h2>
        <Field
          autoComplete="off"
          value={username}
          name="username"
          placeholder={usernameCurrent}
          handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'username'))}
          minlength="4"
          maxlength="20"
        />
        <h2 className="user-account-update__form__subtitle">Modifier l'email de compte</h2>
        <EmailField
          autoComplete="off"
          value={email}
          name="email"
          placeholder={emailCurrent}
          handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'email'))}
        />
        <h2 className="user-account-update__form__subtitle">Modifier le mot de passe</h2>
        <div className="user-account-update__form__new-password-container">
          <PasswordField
            autoComplete="password"
            value={passwordCurrent}
            name="passwordCurrent"
            placeholder="Mot de passe actuel"
            handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'passwordCurrent'))}
            required
            minlength="4"
          />
          <PasswordField
            autoComplete="new-password"
            value={passwordNew}
            name="passwordNew"
            placeholder="Nouveau mot de passe"
            handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'passwordNew'))}
            minlength="4"
          />
          <PasswordField
            autoComplete="new-password-verification"
            value={passwordNewVerification}
            name="passwordNewVerification"
            placeholder="Vérifier mot de passe"
            handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'passwordNewVerification'))}
            minlength="4"
          />
        </div>
        {/* <div className="user-account__form__supress-container">
        <div className="user-account__form__supress-container__text">
          <h2 className="user-account__form__supress-container__text__subtitle">Supprimer le compte</h2>
          <p className="user-account__form__supress-container__text__warning">Supprimer le compte et les données qui y sont associées</p>
        </div>
          <Button
            color
            styling="full"
            handleClick={handleClick}
            content="Supprimer le compte"
            />
        </div> */}
        <div className="user-account-update__form__validation-buttons-container">
          <Button
            color
            styling="full"
            handleClick={handleClick}
            content="Annuler"
          />
          <SubmitButton
            color
            styling="full"
            content="Valider"
          />
        </div>
      </form>
    </div>
  );
};

export default UserAccountUpdate;
