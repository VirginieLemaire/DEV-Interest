import { useDispatch, useSelector } from 'react-redux';
import { createAccountThankModal } from '../../../action/displayOptions';
import Modal from '../Modal';
import './create-account-thank-modal.scss';

const CreateAccountThankModal = () => {
  const dispatch = useDispatch();
  const { createAccountThankModalValue } = useSelector((state) => state.displayOptions);
  const { username } = useSelector((state) => state.userCurrent);

  return (
    <div className="create-account-thank-modal">
      <Modal
        toggleValue={createAccountThankModalValue}
        title="Votre compte a été créé avec succès!"
        body={`Nous avons hâte de vous rencontrer ${username} !`}
        displayFunction={() => dispatch(createAccountThankModal())}
      />
    </div>
  );
};

export default CreateAccountThankModal;
