export const TOGGLE_LOGGED = 'TOGGLE_LOGGED';
export const toggleLogged = () => (
  {
    type: TOGGLE_LOGGED,
  }
);

export const LOGGED = 'LOGGED';
export const Logged = (value) => (
  {
    type: LOGGED,
    value,
  }
);

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const CHANGE_CURRENT_USER_FIELD = 'CHANGE_CURRENT_USER_FIELD';
export const changeCurrentUserField = (value, fieldName) => (
  {
    type: CHANGE_CURRENT_USER_FIELD,
    value,
    fieldName,
  }
);

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

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (data) => (
  {
    type: CONNECT_USER,
    data,
  }
);

export const FETCH_CONTRIBUTIONS = 'FETCH_CONTRIBUTIONS';
export const fetchContributions = () => (
  {
    type: FETCH_CONTRIBUTIONS,
  }
);

export const SAVE_CONTRIBUTIONS = 'SAVE_CONTRIBUTIONS';
export const saveContributions = (data) => (
  {
    type: SAVE_CONTRIBUTIONS,
    data,
  }
);

export const FETCH_BOOKMARKED_CARDS = 'FETCH_BOOKMARKED_CARDS';
export const fetchBookmarkedCards = () => (
  {
    type: FETCH_BOOKMARKED_CARDS,
  }
);

export const SAVE_BOOKMARKED_CARDS = 'SAVE_BOOKMARKED_CARDS';
export const saveBookmarkedCards = (data) => (
  {
    type: SAVE_BOOKMARKED_CARDS,
    data,
  }
);

export const UPDATE_BOOKMARKS = 'UPDATE_BOOKMARKS';
export const updateBookmarks = (data) => (
  {
    type: UPDATE_BOOKMARKS,
    data,
  }
);

export const ADD_TO_BOOKMARKS = 'ADD_TO_BOOKMARKS';
export const addToBookmarks = (cardId) => (
  {
    type: ADD_TO_BOOKMARKS,
    cardId,
  }
);

export const REMOVE_FROM_BOOKMARKS = 'REMOVE_FROM_BOOKMARKS';
export const removeFromBookmarks = (cardId) => (
  {
    type: REMOVE_FROM_BOOKMARKS,
    cardId,
  }
);

export const READ_USER_CURRENT_DATA = 'READ_USER_CURRENT_DATA';
export const readUserCurrentData = () => (
  {
    type: READ_USER_CURRENT_DATA,
  }
);

export const UPDATE_THUMB = 'UPDATE_THUMB';
export const updateThumb = (value) => (
  {
    type: UPDATE_THUMB,
    value,
  }
);

export const DELETE_CONTRIBUTION = 'DELETE_CONTRIBUTION';
export const deleteContribution = (cardId) => (
  {
    type: DELETE_CONTRIBUTION,
    cardId,
  }
);

export const USER_API_LOGOUT = 'USER_API_LOGOUT';
export const userApiLogout = () => (
  {
    type: USER_API_LOGOUT,
  }
);

export const GET_USER_WITH_TOKEN = 'GET_USER_WITH_TOKEN';
export const getUserWithToken = () => (
  {
    type: GET_USER_WITH_TOKEN,
  }
);

export const CONNEXION_ERROR = 'CONNEXION_ERROR';
export const connexionError = (value) => (
  {
    type: CONNEXION_ERROR,
    value,
  }
);
