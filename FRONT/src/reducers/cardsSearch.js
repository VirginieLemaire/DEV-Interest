import {
  CHANGE_SEARCH_FIELD, NEXT_PAGE, RESET_CARDS_MINI,
  SAVE_CARDS_MINI_SEARCH, SAVE_CARDS_SEARCH, SAVE_MORE_CARDS,
} from '../action/cardsSearch';

export const initialState = {
  currentSearch: '',
  cardsMini: [],
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
    case SAVE_CARDS_MINI_SEARCH:
      return {
        ...state,
        cardsMini: action.data,
      };
    case RESET_CARDS_MINI:
      return {
        ...state,
        cardsMini: [],
        searchQuery: '',
      };
    default:
      return state;
  }
};

export default reducer;
