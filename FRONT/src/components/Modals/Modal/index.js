import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';

import LogoDEVLovePPER from '../../../assets/LogoDEVLovePPER.svg';

import './modal.scss';
import { toggleModal } from '../../../action/displayOptions';

const Modal = ({
  toggleValue, title, displayFunction, body,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { darkMode } = useSelector((state) => state.displayOptions);

  const handleClick = () => {
    displayFunction();
    dispatch(toggleModal());
  };

  if (!toggleValue) {
    return null;
  }

  return (
    <div
      className="modal"
      onClick={handleClick}
    >
      <div className={darkMode ? 'modal__content modal_animation modal__content--dark' : 'modal__content modal_animation'} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__header-header">
            <div className="modal__header-header--item" />
            <div className="modal__header-header--item">
              <img className="modal__logo" src={LogoDEVLovePPER} alt="logo court" onClick={() => history.push('/')} />
            </div>
            <div className={darkMode ? 'modal__header-header--item modal__header-header--item--dark' : 'modal__header-header--item'} onClick={handleClick}>
              <GrFormClose className="close-icon" />
            </div>
          </div>
          <h4 className="modal__title">
            {title}
          </h4>
        </div>
        <div className="modal__body">
          {body}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggleValue: PropTypes.bool.isRequired,
  displayFunction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Modal;
