import './user-account.scss';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import SubmitButton from '../GenericComponents/SubmitButton';
import { changeCurrentUserField } from '../../action/userCurrent';
import EmailField from '../GenericComponents/EmailField';
import PasswordField from '../GenericComponents/PasswordField';

const UserAccount = () => {
  const dispatch = useDispatch();
  const { password,newUsername, newEmail, newPassword, newPasswordVerification } = useSelector((state) => state.userCurrent);

  const handleClick = () => (
    console.log("click")
  )

  return (
    <div className="user-account">
      <form className="user-account__form">
        <h1 className="user-account__form__title">Modification du compte</h1>
        <h2 className="user-account__form__subtitle">Modifier le nom d'utilisation</h2>
        <Field
          autoComplete="off"
          value={newUsername}
          name="newUsername"
          placeholder="Nom d'utilisateur"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'newUsername'))}
          minlength="4"
          maxlength="20"
          required
        />
        <h2 className="user-account__form__subtitle">Modifier l'email de compte</h2>
        <EmailField
          autoComplete="off"
          value={newEmail}
          name="newEmail"
          placeholder="Email"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'newEmail'))}
          required
        />
        <h2 className="user-account__form__subtitle">Modifier le mot de passe</h2>
        <PasswordField
          autoComplete="new-password"
          value={password}
          name="password"
          placeholder="Mot de passe actuel"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'password'))}
          required
          minlength="4"
        />
        <div className="user-account__form__new-password-container">
        <PasswordField
          autoComplete="new-password"
          value={newPassword}
          name="newPassword"
          placeholder="Nouveau mot de passe"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'newPassword'))}
          required
          minlength="4"
        />
        <PasswordField
          autoComplete="new-password"
          value={newPasswordVerification}
          name="newPasswordVerification"
          placeholder="Vérification du mot de passe"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'newPasswordVerification'))}
          required
          minlength="4"
        />
        </div>
        <h2 className="user-account__form__subtitle">Supprimer le compte</h2>
        <p className="user-account__form__warning">Supprimer le compte et les données qui y sont associées</p>
        <div className="user-account__form__supress-button">
          <Button 
            color
            styling="full"
            handleClick={handleClick}
            content="Supprimer le compte"
            />
        </div>
        <div className="user-account__form__validation-buttons-container">
        <Button 
          color
          styling="full"
          handleClick={handleClick}
          content="Annuler"
        />
        <Button
          color
          styling="full"
          handleClick={handleClick}
          content="Valider"
        />
        </div>
      </form>
    </div>
  )
}

export default UserAccount;

