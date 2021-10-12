import { SAVE_CARD } from '../action/cardCurrent';

export const initialState = {
  card: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CARD:
      return {
        ...state,
        card: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
