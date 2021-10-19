import { SAVE_CARD } from '../action/cardCurrent';

// function randomIntFromInterval(min, max) { // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

export const initialState = {
  card: '',
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
