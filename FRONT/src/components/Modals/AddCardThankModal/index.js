import { useDispatch, useSelector } from 'react-redux';
import { addCardThankModal } from '../../../action/displayOptions';

import Modal from '../Modal';

import './add-card-thank-modal.scss';

const AddCardThankModal = () => {
  const dispatch = useDispatch();
  const { addCardThankModalValue } = useSelector((state) => state.displayOptions);

  return (
    <div className="add-card-thank-modal">
      <Modal
        toggleValue={addCardThankModalValue}
        title="Carte créée avec succès!"
        body="Merci d'avoir ajouté une nouvelle carte pour la communauté!"
        displayFunction={() => dispatch(addCardThankModal())}
      />
    </div>
  );
};
export default AddCardThankModal;
