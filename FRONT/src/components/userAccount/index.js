import './user-account.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import { deleteUserCurrent } from '../../action/userUpdate';

const UserAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { username, email } = useSelector((state) => state.userCurrent);
  const { darkMode } = useSelector((state) => state.displayOptions);

  const handleModifyClick = () => {
    history.push(`/${username.toLowerCase()}/account/update`);
  }

  const handleDeleteButtonClick = () => {
    dispatch(deleteUserCurrent());
    history.push('/');
  }

  return (
    <div className={darkMode ? 'user-account user-account--dark' : 'user-account'}>
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
              handleClick={handleModifyClick}
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
            handleClick={handleDeleteButtonClick}
            content="Supprimer le compte"
          />
      </div>
    </div>
  )
}

export default UserAccount;

