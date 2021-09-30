import {
  CHANGE_SEARCH_FIELD, NEXT_PAGE, SAVE_CARDS_SEARCH, SAVE_MORE_CARDS,
} from '../action/cardsSearch';

export const initialState = {
  currentSearch: '',
  cards: [],
  searchQuery: '',
  type: '',
  techs: [],
  level: '',
  lang: '',
  category: '',
  page: 1,
  size: 15,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CARDS_SEARCH:
      return {
        ...state,
        cards: action.data,
        page: 1,
        currentSearch: state.searchQuery,
        searchQuery: '',
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case SAVE_MORE_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.data],
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
