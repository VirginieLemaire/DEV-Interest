import { CHANGE_FIELD, CHANGE_SEARCH_FIELD, SHOW_CONNEXION_MODAL } from "../action/user";

export const initialState = {
  search: '',
  connexionModal: false,
  email: 'hello',
  password: 'You',
  username: 'Roger',
  bookmarks: [],
  isConnected: false,
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
