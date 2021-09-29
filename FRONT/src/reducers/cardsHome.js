import { SAVE_CARDS_HOME } from '../action/cardsHome';

export const initialState = {
  cards: [],
  type: '',
  techs: [],
  level: '',
  lang: '',
  category: '',
  page: '',
  size: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CARDS_HOME:
      return {
        ...state,
        cards: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
