import { faAllergies } from '@fortawesome/free-solid-svg-icons';
import {
  CHANGE_SEARCH_FIELD, NEXT_PAGE, RESET_CARDS_MINI,
  RESET_FILTERS_TO_ALL,
  SAVE_CARDS_MINI_SEARCH, SAVE_CARDS_SEARCH, SAVE_MORE_CARDS, SET_CURRENT_SEARCH, SET_FILTER,
} from '../action/cardsSearch';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const initialState = {
  currentSearch: '',
  cardsMini: [],
  cards: [],
  searchQuery: '',
  searchCount: '',
  searchCountMini: '',
  type: '',
  techs: [],
  level: '',
  lang: '',
  category: '',
  page: 1,
  size: 15,
  techFilter: 'all',
  categoryFilter: 'all',
  levelFilter: 'all',
  typeFilter: 'all',
  langFilter: 'all',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CARDS_SEARCH:
      return {
        ...state,
        cards: action.data.map((card) => ({ ...card, height: randomIntFromInterval(300, 500) })),
        page: 1,
        searchQuery: '',
        searchCount: action.count,
        cardsMini: [],
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case SAVE_MORE_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.data.map((card) => ({ ...card, height: randomIntFromInterval(300, 500) }))],
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
        searchCountMini: action.count,
      };
    case RESET_CARDS_MINI:
      return {
        ...state,
        cardsMini: [],
        searchQuery: '',
        searchCountMini: '',
      };
    case RESET_FILTERS_TO_ALL:
      return {
        ...state,
        techFilter: 'all',
        categoryFilter: 'all',
        levelFilter: 'all',
        typeFilter: 'all',
        langFilter: 'all',
      };
    case SET_FILTER:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
