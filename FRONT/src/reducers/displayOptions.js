import { 
  TOGGLE_DISPLAY_URL,
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
    case TOGGLE_DISPLAY_URL:
      return {
        ...state,
        displayUrl: !state.displayUrl,
      };
    default:
      return state;
  }
};

export default reducer;
