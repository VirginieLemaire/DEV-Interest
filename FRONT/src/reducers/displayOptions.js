import {

} from '../action/displayOptions';

export const initialState = {
  connexionModal: false,
  addCardModal: false,
  addCardSuccessModal: false,
  isLogged: false,
  loading: true,
  hasAnAccount: false,
  displayUrl: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
