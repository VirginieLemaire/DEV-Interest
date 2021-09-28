import './user-account.scss';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import { changeCurrentUserField } from '../../action/userCurrent';

const UserAccount = () => {
  const dispatch = useDispatch();

  const handleClick = () => (
    console.log("click")
  )

  return (
    <div className="user-account">
      <h1 className="user-account__title">Modification du compte</h1>
      <form className="user-account__form">
        <h2 className="user-account__form__title">Modifier le nom d'utilisation</h2>
        <Field
          autoComplete="off"
          value={newUserUsername}
          name="new-user_username"
          placeholder="Nom d'utilisateur"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'username'))}
          minlength="4"
          maxlength="20"
          required
        />
        <h2 className="user-account__form__title">Modifier l'email de compte'</h2>
        <EmailField
          autoComplete="off"
          value={newUserEmail}
          name="new-user_email"
          placeholder="Email"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'email'))}
          required
        />
        <h2 className="user-account__form__title">Modifier le mot de passe</h2>
        <PasswordField
          autoComplete="new-password"
          value={newUserPassword}
          name="new-user_password"
          placeholder="Mot de passe"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'password'))}
          required
          minlength="4"
        />
        <div className="user-account__form__new-password-container">
        <PasswordField
          autoComplete="new-password"
          value={newUserPasswordVerif}
          name="new-user_verification_password"
          placeholder="Vérification du mot de passe"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'passwordVerification'))}
          required
          minlength="4"
        />
        <PasswordField
          autoComplete="new-password"
          value={newUserPasswordVerif}
          name="new-user_verification_password"
          placeholder="Vérification du mot de passe"
          handleChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'passwordVerification'))}
          required
          minlength="4"
        />
        </div>
        <h2 className="user-account__form__title"></h2>
        <p className="user-account__form__subtitle">Supprimer le compte et les données qui y sont associées</p>
        <Button 
          color
          styling="full"
          handleClick={handleClick}
          content="Supprimer le compte"
          fontSize="medium"
          />
        <div className="user-account__form__validation-buttons-container">
        <Button 
          color
          styling="full"
          handleClick={handleClick}
          content="Annuler"
          fontSize="medium"
        />
        <Button
          color
          styling="full"
          handleClick={handleClick}
          content="Valider"
          fontSize="medium"
        />
        </div>
      </form>
    </div>
  )
}

export default UserAccount;

