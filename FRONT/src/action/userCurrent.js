export const TOGGLE_LOGGED = 'TOGGLE_LOGGED';
export const toggleLogged = () => (
  {
    type: TOGGLE_LOGGED,
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
