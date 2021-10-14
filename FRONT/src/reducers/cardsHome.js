import { NEXT_PAGE_HOME, SAVE_CARDS_HOME, SAVE_MORE_HOME_CARDS } from '../action/cardsHome';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const initialState = {
  cards: [],
  type: '',
  techs: [],
  level: '',
  lang: '',
  category: '',
  page: 1,
  size: 30,
  moreHome: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CARDS_HOME:
      return {
        ...state,
        cards: action.data.map((card) => ({ ...card, height: randomIntFromInterval(300, 500) })),
        page: 1,
      };
    case NEXT_PAGE_HOME:
      return {
        ...state,
        page: state.page + 1,
      };
    case SAVE_MORE_HOME_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.data.map((card) => ({ ...card, height: randomIntFromInterval(300, 500) }))],
      };
    default:
      return state;
  }
};

export default reducer;
