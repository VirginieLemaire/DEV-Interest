import {
  ADD_CARD_THANK_MODAL,
  CREATE_ACCOUNT_THANK_MODAL,
  DARK_MODE_OFF,
  DARK_MODE_TOGGLE, DELETE_USER_SUCCESS_MODAL, SET_ACTIVE_MENU, SET_APP_LOADING, SET_LOADING,
  SET_MORE, SET_MORE_HOME, SHOW_ADD_CARD_MODAL,
  SHOW_CONNEXION_MODAL, SHOW_DELETE_USER_MODAL, SHOW_SIGNUP_MODAL, TOGGLE_DISPLAY_URL,
  TOGGLE_MODAL,
  TOGGLE_OPENNAV,
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
  deleteUserModal: false,

  modal: false,

  createAccountThankModalValue: false,
  updateAccountSuccessModalValue: false,
  addCardThankModalValue: false,
  updateCardSuccessModalValue: false,
  deleteUserSuccessModalValue: false,

  openNav: false,
  activeMenu: '',
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
    case SHOW_DELETE_USER_MODAL:
      return {
        ...state,
        deleteUserModal: !state.deleteUserModal,
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
    case DELETE_USER_SUCCESS_MODAL:
      return {
        ...state,
        deleteUserSuccessModalValue: !state.deleteUserSuccessModalValue,
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    case TOGGLE_OPENNAV:
      return {
        ...state,
        openNav: !state.openNav,
      };
    case SET_ACTIVE_MENU:
      return {
        ...state,
        activeMenu: action.activeMenu,
      };
    default:
      return state;
  }
};

export default reducer;
