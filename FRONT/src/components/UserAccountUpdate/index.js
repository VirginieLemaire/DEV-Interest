import './user-account-update.scss';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import SubmitButton from '../GenericComponents/SubmitButton';
import { changeCurrentUserField } from '../../action/userCurrent';
import EmailField from '../GenericComponents/EmailField';
import PasswordField from '../GenericComponents/PasswordField';
import { changeUpdateUserField, resetUpdateUserFields, updateUserCurrent } from '../../action/userUpdate';

const UserAccountUpdate = () => {
  const dispatch = useDispatch();
  const { username, email, passwordCurrent, passwordNew, passwordNewVerification } = useSelector((state) => state.userUpdate);
  const { darkMode } = useSelector((state) => state.displayOptions);

  const handleClick = () => (
    dispatch(resetUpdateUserFields())
  )

  const handleSubmitUpdateForm = (event) => {
    event.preventDefault();
    // insérer vérifs
    updateUserCurrent();
  }

  return (
    <div className={darkMode ? 'user-account user-account--dark' : 'user-account'}>
      <form className="user-account-update__form" onSubmit={handleSubmitUpdateForm}>
        <h1 className="user-account-update__form__title">Modification du compte</h1>
        <h2 className="user-account-update__form__subtitle">Modifier le nom d'utilisation</h2>
        <Field
          autoComplete="off"
          value={username}
          name="username"
          placeholder="Nom d'utilisateur"
          handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'username'))}
          minlength="4"
          maxlength="20"
          required
        />
        <h2 className="user-account-update__form__subtitle">Modifier l'email de compte</h2>
        <EmailField
          autoComplete="off"
          value={email}
          name="email"
          placeholder="Email"
          handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'email'))}
          required
        />
        <h2 className="user-account-update__form__subtitle">Modifier le mot de passe</h2>
        <PasswordField
          autoComplete="password"
          value={passwordCurrent}
          name="passwordCurrent"
          placeholder="Mot de passe actuel"
          handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'passwordCurrent'))}
          required
          minlength="4"
        />
        <div className="user-account-update__form__new-password-container">
        <PasswordField
          autoComplete="new-password"
          value={passwordNew}
          name="passwordNew"
          placeholder="Nouveau mot de passe"
          handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'passwordNew'))}
          required
          minlength="4"
        />
        <PasswordField
          autoComplete="new-password-verification"
          value={passwordNewVerification}
          name="passwordNewVerification"
          placeholder="Vérifier mot de passe"
          handleChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'passwordNewVerification'))}
          required
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
  )
}

export default UserAccountUpdate;

