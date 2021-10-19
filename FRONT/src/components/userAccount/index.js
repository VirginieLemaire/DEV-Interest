import './user-account.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Field from '../GenericComponents/Field';
import Button from '../GenericComponents/Button';
import { showDeleteUserModal } from '../../action/displayOptions';
import { formatDate } from '../../selectors/utils';

const UserAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const { username, email, createdAt } = useSelector((state) => state.userCurrent);
  const { darkMode } = useSelector((state) => state.displayOptions);
  const inscriptionDate = formatDate(createdAt);
  
  const handleModifyClick = () => {
    history.push(`/${username.toLowerCase()}/account/update`);
  };

  const handleDeleteButtonClick = () => {
    dispatch(showDeleteUserModal());
  };

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
      <h2 className="user-account__subtitle">Date d'inscription</h2>
      <Field
        name="currentEmail"
        placeholder={inscriptionDate}
        handleChange={() => null}
      />
      <div className="user-account__button-container">
        <Button
          color
          styling="full"
          handleClick={handleModifyClick}
          content="Modifier le compte"
        />
        <Button
          color
          styling="outline"
          handleClick={handleDeleteButtonClick}
          content="Supprimer le compte"
        />
      </div>
    </div>
  );
};

export default UserAccount;
