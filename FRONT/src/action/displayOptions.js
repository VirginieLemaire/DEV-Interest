export const SET_LOADING = 'SET_LOADING';
export const setLoading = (loading) => ({
  type: SET_LOADING,
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
