import { CHANGE_SEARCH_FIELD, SAVE_CARDS_SEARCH } from '../action/cardsSearch';

export const initialState = {
  cards: [],
  searchQuery: '',
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
    case SAVE_CARDS_SEARCH:
      return {
        ...state,
        cards: action.data,
      };
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
