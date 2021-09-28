import {

} from '../action/userCreate';

export const initialState = {
  username: '',
  email: '',
  password: '',
  passwordVerification: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
