import { CHANGE_FIELD, SHOW_CONNEXION_MODAL } from '../action/user';

export const initialState = {
  search: '',
  connexionModal: false,
  email: '',
  password: '',
  username: 'Roger',
  isLogged: true,
  bookmarks: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SHOW_CONNEXION_MODAL:
      return {
        ...state,
        connexionModal: !state.connexionModal,
      };
    default:
      return state;
  }
};

export default reducer;
