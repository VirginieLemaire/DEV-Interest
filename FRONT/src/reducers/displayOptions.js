import {
  DARK_MODE_OFF,
  DARK_MODE_TOGGLE, SET_APP_LOADING, SET_LOADING, SHOW_ADD_CARD_MODAL, SHOW_CONNEXION_MODAL,
  SHOW_SIGNUP_MODAL, TOGGLE_DISPLAY_URL,
} from '../action/displayOptions';

export const initialState = {
  connexionModal: false,
  addCardModal: false,
  addCardSuccessModal: false,
  loading: false,
  appLoading: true,
  hasAnAccount: true,
  displayUrl: false,
  darkMode: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_CONNEXION_MODAL:
      return {
        ...state,
        connexionModal: !state.connexionModal,
      };
    case SHOW_SIGNUP_MODAL:
      return {
        ...state,
        hasAnAccount: !state.hasAnAccount,
      };
    case SHOW_ADD_CARD_MODAL:
      return {
        ...state,
        addCardModal: !state.addCardModal,
      };
    case DARK_MODE_TOGGLE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case DARK_MODE_OFF:
      return {
        ...state,
        darkMode: false,
      };
    case TOGGLE_DISPLAY_URL:
      return {
        ...state,
        displayUrl: !state.displayUrl,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_APP_LOADING:
      return {
        ...state,
        appLoading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
