import { useDispatch, useSelector } from 'react-redux';
import { updateCardSuccessModal } from '../../../action/displayOptions';
import Modal from '../Modal';
import './update-card-success-modal.scss';

const UpdateCardSuccessModal = () => {
  const dispatch = useDispatch();
  const { updateCardSuccessModalValue } = useSelector((state) => state.displayOptions);

  return (
    <div className="update-card-success-modal">
      <Modal
        toggleValue={updateCardSuccessModalValue}
        title="Votre carte a bien été mise à jour!"
        body="Merci de nous fournir des informations au top!"
        displayFunction={() => dispatch(updateCardSuccessModal())}
      />
    </div>
  );
};

export default UpdateCardSuccessModal;
