import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose';

import { changeNewCardField, getOpengraphData } from '../../action/cardNew';
import { showAddCardModal, showConnexionModal, showSearchModal } from '../../action/displayOptions';

import LogoDEVLovePPER from '../../assets/LogoDEVLovePPER.svg';

import './search-modal.scss';
import SearchBar from '../GenericComponents/SearchBar';

const SearchModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { darkMode, searchModal } = useSelector((state) => state.displayOptions);

  const handleHomeRedirect = () => {
    history.push('/');
    dispatch(showSearchModal());
  };

  if (!searchModal) {
    return null;
  }

  return (
    <div className="add-card-modal__container">
      <div className="add-card-modal" onClick={() => dispatch(showSearchModal())}>
        <div className={darkMode ? 'add-card-modal__content modal_animation add-card-modal__content--dark' : 'add-card-modal__content modal_animation'} onClick={(e) => e.stopPropagation()}>
          <div className="add-card-modal__header">
            <div className="connexion-modal__header-header">
              <div className="connexion-modal__header-header--item" />
              <div className="connexion-modal__header-header--item">
                <img className="connexion-modal__logo" src={LogoDEVLovePPER} alt="logo court" onClick={handleHomeRedirect} />
              </div>
              <div className="connexion-modal__header-header--item" onClick={() => dispatch(showSearchModal())}>
                <GrFormClose className="close-icon" />
              </div>
            </div>
            <h4 className="add-card-modal__title">Fait une nouvelle recherche</h4>
          </div>
          <div className="searchbar-modal">
            <SearchBar
              className="header__search-bar"
              placeholder="Search..."
              size="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchModal;
