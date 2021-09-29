import './user-account.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';

const UserAccount = () => {
  const dispatch = useDispatch();
  const { username, email } = useSelector((state) => state.userCurrent);
  console.log(username)

  const handleSubmitUpdateForm = (event) => {
    event.preventDefault();
    // insérer vérifs
    updateCurrentUser();
  }

  return (
    <div className="user-account">
      <h1 className="user-account__title">Information de compte</h1>
      <h2 className="user-account__subtitle">Nom d'utilisateur</h2>
      <Field
        name="currentUsername"
        placeholder={username}
        handleChange={() => null}
      />
      <h2 className="user-account__subtitle">Email de compte</h2>
      <Field
        name="currentEmail"
        placeholder={email}
        handleChange={() => null}
      />
      <div className="user-account__button-container">
        <div className="user-account__button-container__text">
            <h2 className="user-account__button-container__text__subtitle">Modifier</h2>
            <p className="user-account__button-container__text__warning">Modifier les informations de compte</p>
          </div>
            <Button 
              color
              styling="full"
              handleClick={() => null}
              content="Modifier le compte"
            />
      </div>
      <div className="user-account__button-container">
        <div className="user-account__button-container__text">
          <h2 className="user-account__button-container__text__subtitle">Supprimer</h2>
          <p className="user-account__button-container__text__warning">Supprimer le compte et les données qui y sont associées</p>
        </div>
          <Button 
            color
            styling="full"
            handleClick={() => null}
            content="Supprimer le compte"
          />
      </div>
    </div>
  )
}

export default UserAccount;

