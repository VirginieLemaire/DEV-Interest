import './user-account.scss';

const UserAccount = () => (
  <div className="user-account">
    UserAccount
  </div>
);

export default UserAccount;
import './user-account.scss';
export default UserAccount;
import './user-account.scss';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import { changeField } from '../../action/user';



const UserAccount = () => {
  const dispatch = useDispatch();

  const changeUsername = useSelector((state) => state.user.changeUsername);
  const changeEmail = useSelector((state) => state.user.changeEmail);
  const changePassword = useSelector((state) => state.user.changePassword);

  return (
    <div className="user-account">
      <h1 className="user-account__title">Modification du compte</h1>
      <form className="user-account__form">
        <h2 className="user-account__form__title">Modifier le nom d'utilisation</h2>
        <Field
          value={changeUsername}
          type="text"
          name="changeUsername"
          placeholder="Nom d'utilisateur"
          handleChange={(event) => dispatch(changeField(event.target.value, 'changeUsername'))}
          required
        />
        <h2 className="user-account__form__title">Modifier l'email de compte'</h2>
        <Field
          value={changeEmail}
          type="email"
          name="changeEmail"
          placeholder="Email"
          handleChange={(event) => dispatch(changeField(event.target.value, 'changeEmail'))}
          required
        />
        <h2 className="user-account__form__title">Modifier le mot de passe</h2>
        <Field
          value={changePassword}
          type="text"
          name="changePassword"
          placeholder="Nouveau mot de passe"
          handleChange={(event) => dispatch(changeField(event.target.value, 'changePassword'))}
          required
        />
        <div className="user-account__form__new-password-container">
        <Field
          value={changePassword}
          type="text"
          name="changePassword"
          placeholder="Nouveau mot de passe"
          handleChange={(event) => dispatch(changeField(event.target.value, 'changePassword'))}
          required
        />
        <Field
          value={changePassword}
          type="text"
          name="changePassword"
          placeholder="Nouveau mot de passe"
          handleChange={(event) => dispatch(changeField(event.target.value, 'changePassword'))}
          required
        />
        </div>
        <h2 className="user-account__form__title"></h2>
        <p className="user-account__form__subtitle">Supprimer le compte et les données qui y sont associées</p>
        <Button 
          color
          styling="full"
          submit={handleSupressionSubmit}
          handleClick
          content
          fontSize
          />
        <div className="user-account__form__validation-buttons-container">
        <Button />
        <Button />
        </div>
