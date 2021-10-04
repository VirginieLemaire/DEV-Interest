import { useDispatch, useSelector } from 'react-redux';
import { updateAccountSuccessModal } from '../../../action/displayOptions';
import Modal from '../Modal';
import './update-account-success-modal.scss';

const UpdateAccountSuccessModal = () => {
  const dispatch = useDispatch();
  const { updateAccountSuccessModalValue } = useSelector((state) => state.displayOptions);
  return (
    <div className="update-account-success-modal">
      <Modal
        toggleValue={updateAccountSuccessModalValue}
        title="Vos données de compte ont bien été mises à jour!"
        body="Merci d'être vous !"
        displayFunction={() => dispatch(updateAccountSuccessModal())}
      />
    </div>
  );
};

export default UpdateAccountSuccessModal;
