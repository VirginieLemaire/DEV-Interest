import {
  ADD_CARD_THANK_MODAL,
  CREATE_ACCOUNT_THANK_MODAL,
  DARK_MODE_OFF,
  DARK_MODE_TOGGLE, DELETE_CARD_SUCCESS_MODAL, DELETE_USER_SUCCESS_MODAL, SET_ACTIVE_MENU,
  SET_APP_LOADING, SET_DARKMODE, SET_LOADING,
  SET_MORE, SET_MORE_HOME, SET_REDIRECT_TO_TRUE, SET_SEARCH_MODAL, SHOW_ADD_CARD_MODAL,
  SHOW_CONNEXION_MODAL, SHOW_DELETE_CARD_MODAL, SHOW_DELETE_USER_MODAL, SHOW_SEARCH_MODAL, SHOW_SIGNUP_MODAL,
  TOGGLE_DISPLAY_URL, TOGGLE_MODAL,
  TOGGLE_OPENNAV, UPDATE_ACCOUNT_SUCCESS_MODAL, UPDATE_CARD_SUCCESS_MODAL,
} from '../action/displayOptions';

export const initialState = {
  loading: false,
  appLoading: true,
  hasAnAccount: true,
  displayUrl: false,
  darkMode: false,
  more: true,
  moreHome: true,

  searchModal: false,
  connexionModal: false,
  addCardModal: false,
  deleteUserModal: false,
  deleteCardModal: false,

  modal: false,

  createAccountThankModalValue: false,
  updateAccountSuccessModalValue: false,
  addCardThankModalValue: false,
  updateCardSuccessModalValue: false,
  deleteUserSuccessModalValue: false,
  deleteCardSuccessModalValue: false,

  openNav: false,
  activeMenu: '',

  redirect: false,
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
    case SHOW_SEARCH_MODAL:
      return {
        ...state,
        searchModal: !state.searchModal,
      };
    case SHOW_DELETE_USER_MODAL:
      return {
        ...state,
        deleteUserModal: !state.deleteUserModal,
        modal: !state.modal,
      };
    case SHOW_DELETE_CARD_MODAL:
      return {
        ...state,
        deleteCardModal: !state.deleteCardModal,
        modal: !state.modal,
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
    case DELETE_CARD_SUCCESS_MODAL:
      return {
        ...state,
        deleteCardSuccessModalValue: !state.deleteCardSuccessModalValue,
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
    case SET_DARKMODE:
      return {
        ...state,
        darkMode: action.value,
      };
    case SET_SEARCH_MODAL:
      return {
        ...state,
        searchModal: action.value,
      };
    case SET_REDIRECT_TO_TRUE:
      return {
        ...state,
        redirect: true,
      };
    default:
      return state;
  }
};

export default reducer;
