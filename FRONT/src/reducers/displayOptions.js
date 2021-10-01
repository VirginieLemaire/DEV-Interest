import {
  ADD_CARD_THANK_MODAL,
  CREATE_ACCOUNT_THANK_MODAL,
  DARK_MODE_OFF,
  DARK_MODE_TOGGLE, SET_APP_LOADING, SET_LOADING, SET_MORE, SET_MORE_HOME, SHOW_ADD_CARD_MODAL,
  SHOW_CONNEXION_MODAL, SHOW_SIGNUP_MODAL, TOGGLE_DISPLAY_URL,
  TOGGLE_MODAL,
  UPDATE_ACCOUNT_SUCCESS_MODAL, UPDATE_CARD_SUCCESS_MODAL,
} from '../action/displayOptions';

export const initialState = {
  loading: false,
  appLoading: true,
  hasAnAccount: true,
  displayUrl: false,
  darkMode: false,
  more: true,
  moreHome: true,
  connexionModal: false,
  addCardModal: false,

  modal: false,

  createAccountThankModalValue: false,
  updateAccountSuccessModalValue: false,
  addCardThankModalValue: false,
  updateCardSuccessModalValue: false,
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
    case SET_MORE:
      return {
        ...state,
        more: action.more,
      };
    case SET_MORE_HOME:
      return {
        ...state,
        more: action.more,
      };
    case CREATE_ACCOUNT_THANK_MODAL:
      return {
        ...state,
        createAccountThankModalValue: !state.createAccountThankModalValue,
      };
    case UPDATE_ACCOUNT_SUCCESS_MODAL:
      return {
        ...state,
        updateAccountSuccessModalValue: !state.updateAccountSuccessModalValue,
      };
    case ADD_CARD_THANK_MODAL:
      return {
        ...state,
        addCardThankModalValue: !state.addCardThankModalValue,
      };
    case UPDATE_CARD_SUCCESS_MODAL:
      return {
        ...state,
        updateCardSuccessModalValue: !state.updateCardSuccessModalValue,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export default reducer;
