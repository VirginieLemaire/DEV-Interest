import { useDispatch, useSelector } from 'react-redux';
import { deleteUserSuccessModal } from '../../../action/displayOptions';
import Modal from '../Modal';
import './delete-user-success-modal.scss';

const DeleteUserSuccessModal = () => {
  const dispatch = useDispatch();
  const { deleteUserSuccessModalValue } = useSelector((state) => state.displayOptions);
  return (
    <div className="delete-user-success-modal">
      <Modal
        toggleValue={deleteUserSuccessModalValue}
        title="Votre compte a bien été supprimé"
        body="Nous espèrons que ce n'est qu'un au revoir !"
        displayFunction={() => dispatch(deleteUserSuccessModal())}
      />
    </div>
  );
};

export default DeleteUserSuccessModal;
