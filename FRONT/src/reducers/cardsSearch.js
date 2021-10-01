import {
  CHANGE_SEARCH_FIELD, NEXT_PAGE, SAVE_CARDS_MINI_SEARCH, SAVE_CARDS_SEARCH, SAVE_CARDS__MINI_SEARCH, SAVE_MORE_CARDS,
} from '../action/cardsSearch';

export const initialState = {
  currentSearch: '',
  cardMini: [],
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
    default:
      return state;
  }
};

export default reducer;
