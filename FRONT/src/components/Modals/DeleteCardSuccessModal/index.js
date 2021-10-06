import { useDispatch, useSelector } from 'react-redux';
import { deleteCardSuccessModal } from '../../../action/displayOptions';
import Modal from '../Modal';
import './delete-card-success-modal.scss';

const DeleteCardSuccessModal = () => {
  const dispatch = useDispatch();
  const { deleteCardSuccessModalValue } = useSelector((state) => state.displayOptions);
  return (
    <div className="delete-user-success-modal">
      <Modal
        toggleValue={deleteCardSuccessModalValue}
        title="Votre ressource a bien été supprimée"
        body="N'hésitez pas à nous partager vos meilleurs ressources tech !"
        displayFunction={() => dispatch(deleteCardSuccessModal())}
      />
    </div>
  );
};

export default DeleteCardSuccessModal;
