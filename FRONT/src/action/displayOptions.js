export const SET_LOADING = 'SET_LOADING';
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const SET_APP_LOADING = 'SET_APP_LOADING';
export const setAppLoading = (loading) => ({
  type: SET_APP_LOADING,
  loading,
});

export const SHOW_CONNEXION_MODAL = 'SHOW_CONNEXION_MODAL';
export const showConnexionModal = () => (
  {
    type: SHOW_CONNEXION_MODAL,
  }
);

export const SHOW_SIGNUP_MODAL = 'SHOW_SIGNUP_MODAL';
export const showSingupModal = () => ({
  type: SHOW_SIGNUP_MODAL,
});

export const SHOW_ADD_CARD_MODAL = 'SHOW_ADD_CARD_MODAL';
export const showAddCardModal = () => (
  {
    type: SHOW_ADD_CARD_MODAL,
  }
);

export const DARK_MODE_TOGGLE = 'DARK_MODE_TOGGLE';
export const darkModeToggle = () => (
  {
    type: DARK_MODE_TOGGLE,
  }
);

export const DARK_MODE_OFF = 'DARK_MODE_OFF';
export const darkModeOff = () => (
  {
    type: DARK_MODE_OFF,
  }
);

export const TOGGLE_DISPLAY_URL = 'TOGGLE_DISPLAY_URL';
export const toggleDisplayUrl = () => (
  {
    type: TOGGLE_DISPLAY_URL,
  }
);

export const SET_MORE = 'SET_MORE';
export const setMore = (more) => (
  {
    type: SET_MORE,
    more,
  }
);

export const SET_MORE_HOME = 'SET_MORE_HOME';
export const setMoreHome = (more) => (
  {
    type: SET_MORE_HOME,
    more,
  }
);

export const CREATE_ACCOUNT_THANK_MODAL = 'CREATE_ACCOUNT_THANK_MODAL';
export const createAccountThankModal = () => (
  {
    type: CREATE_ACCOUNT_THANK_MODAL,
  }
);

export const UPDATE_ACCOUNT_SUCCESS_MODAL = 'UPDATE_ACCOUNT_SUCCESS_MODAL';
export const updateAccountSuccessModal = () => (
  {
    type: UPDATE_ACCOUNT_SUCCESS_MODAL,
  }
);

export const ADD_CARD_THANK_MODAL = 'ADD_CARD_THANK_MODAL';
export const addCardThankModal = () => (
  {
    type: ADD_CARD_THANK_MODAL,
  }
);

export const UPDATE_CARD_SUCCESS_MODAL = 'UPDATE_CARD_SUCCESS_MODAL';
export const updateCardSuccessModal = () => (
  {
    type: UPDATE_CARD_SUCCESS_MODAL,
  }
);

export const DELETE_USER_SUCCESS_MODAL = 'DELETE_USER_SUCCESS_MODAL';
export const deleteUserSuccessModal = () => (
  {
    type: DELETE_USER_SUCCESS_MODAL,
  }
);

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => (
  {
    type: TOGGLE_MODAL,
  }
);

export const TOGGLE_OPENNAV = 'TOGGLE_OPENNAV';
export const toggleOpenNav = () => (
  {
    type: TOGGLE_OPENNAV,
  }
);

export const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU';
export const setActiveMenu = (activeMenu) => (
  {
    type: SET_ACTIVE_MENU,
    activeMenu,
  }
);

export const SHOW_DELETE_USER_MODAL = 'SHOW_DELETE_USER_MODAL';
export const showDeleteUserModal = () => (
  {
    type: SHOW_DELETE_USER_MODAL,
  }
);

export const SHOW_DELETE_CARD_MODAL = 'SHOW_DELETE_CARD_MODAL';
export const showDeleteCardModal = () => (
  {
    type: SHOW_DELETE_CARD_MODAL,
  }
);

export const DELETE_CARD_SUCCESS_MODAL = 'DELETE_CARD_SUCCESS_MODAL';
export const deleteCardSuccessModal = () => (
  {
    type: DELETE_CARD_SUCCESS_MODAL,
  }
);

export const SHOW_SEARCH_MODAL = 'SHOW_SEARCH_MODAL';
export const showSearchModal = () => (
  {
    type: SHOW_SEARCH_MODAL,
  }
);
