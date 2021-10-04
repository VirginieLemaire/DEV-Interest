import {
  ADD_BOOKMARK, CONNECT_USER, REMOVE_BOOKMARK, TOGGLE_LOGGED, UPDATE_THUMB,
  USER_LOGOUT, CHANGE_CURRENT_USER_FIELD, SAVE_BOOKMARKED_CARDS, UPDATE_BOOKMARKS, SAVE_CONTRIBUTIONS
} from '../action/userCurrent';

export const initialState = {
  id: '',
  email: '',
  username: '',
  password: '',
  newEmail: '',
  newPassword: '',
  newPasswordVerification: '',
  thumb: "favorites",
  bookmarks: [],
  bookmarkedCards: [],
  contributions: [
    {
      id:45,
      title:"Typescript, a hero!",
      slug:"typescript-a-hero",
      website:"Medium.com",
      image:"https://miro.medium.com/max/628/1*zt7XtfNA03TvzVreccTw9A.png",
      description:"Typescript helped me in achieving ZERO UI failures on Production",
      category:"Approfondir",
      level:"Avancé",
      techs:["javascript", "HTML", "Css"],
      type:"article",
      url:"https://medium.com/front-end-weekly/typescript-a-hero-f7d9d1ad40d4",
      contributor:"Romain",
      user_id:82,
      lang:"anglais",
      createdat:"2021-09-30T15:37:59.728Z",
    }
  ],
  isLogged: false,
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
        bookmarkedCards: action.data,
      };
    case UPDATE_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.data,
      };
    case SAVE_CONTRIBUTIONS:
      return {
        ...state,
        contributions: action.data,
      };
    case UPDATE_THUMB:
      return {
        ...state,
        thumb: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
