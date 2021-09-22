import { SAVE_CARDS } from '../action/cards';

export const initialState = {
  cards: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  // console.log('reducer recipes', state);
  // dans un reducer qui a été combiné, on n'accède qu'à sa tranche de state
  switch (action.type) {
    case SAVE_CARDS:
      return {
        ...state,
        cards: action.cards,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
