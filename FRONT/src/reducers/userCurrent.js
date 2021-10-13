import {
  CONNECT_USER, TOGGLE_LOGGED, UPDATE_THUMB,
  USER_LOGOUT, CHANGE_CURRENT_USER_FIELD, SAVE_BOOKMARKED_CARDS,
  UPDATE_BOOKMARKS, SAVE_CONTRIBUTIONS, LOGGED, CONNEXION_ERROR,
} from '../action/userCurrent';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const initialState = {
  id: '',
  email: '',
  username: '',
  password: '',
  newEmail: '',
  newPassword: '',
  newPasswordVerification: '',
  thumb: 'favorites',
  bookmarks: [],
  bookmarkedCards: [],
  contributions: [],
  isLogged: false,
  createdAt: '',
  connexionErrorValue: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECT_USER:
      return {
        ...state,
        ...action.data,
      };
    case TOGGLE_LOGGED:
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    case USER_LOGOUT:
      return {
        ...state,
        id: '',
        email: '',
        username: '',
        password: '',
        bookmarks: [],
        isLogged: false,
      };
    case CHANGE_CURRENT_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SAVE_BOOKMARKED_CARDS:
      return {
        ...state,
        bookmarkedCards: action.data.map((card) => ({ ...card, height: randomIntFromInterval(300, 500) })),
      };
    case UPDATE_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.data,
      };
    case SAVE_CONTRIBUTIONS:
      return {
        ...state,
        contributions: action.data.map((card) => ({ ...card, height: randomIntFromInterval(300, 500) })),
      };
    case UPDATE_THUMB:
      return {
        ...state,
        thumb: action.value,
      };
    case LOGGED:
      return {
        ...state,
        isLogged: action.value,
      };
    case CONNEXION_ERROR:
      return {
        ...state,
        connexionErrorValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
