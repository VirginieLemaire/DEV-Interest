import {

} from '../action/userCurrent';

export const initialState = {
  id: '',
  email: '',
  username: '',
  bookarmksId: [],
  bookmarkedCards: [],
  darkMode: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
