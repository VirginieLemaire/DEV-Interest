export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, fieldName) => (
  {
    type: CHANGE_FIELD,
    value,
    fieldName,
  }
);

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

export const LOGIN = 'LOGIN';
export const login = () => (
  {
    type: LOGIN,
  }
);

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (data) => ({
  type: CONNECT_USER,
  data,
});

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = () => (
  {
    type: USER_LOGIN,
  }
);

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const addBookmark = (card) => (
  {
    type: ADD_BOOKMARK,
    card,
  }
);

export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const removeBookmark = (card) => (
  {
    type: REMOVE_BOOKMARK,
    card,
  }
);

// export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
// export const addToFavorites = (cardId) => (
//   {
//     type: ADD_TO_FAVORITES,
//     cardId,
//   }
// );

// export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
// export const removeFromFavorites = (cardId) => (
//   {
//     type: REMOVE_FROM_FAVORITES,
//     cardId,
//   }
// );

export const CHANGE_NEW_USER_FIELD = 'CHANGE_NEW_USER_FIELD';
export const changeNewUserField = (value, fieldName) => (
  {
    type: CHANGE_NEW_USER_FIELD,
    value,
    fieldName,
  }
);

export const SIGNUP = 'SIGNUP';
export const signup = () => (
  {
    type: SIGNUP,
  }
);

export const DARK_MODE_TOGGLE = 'DARK_MODE_TOGGLE';
export const darkModeToggle = () => (
  {
    type: DARK_MODE_TOGGLE,
  }
);
