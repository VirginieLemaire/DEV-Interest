import {
  CHANGE_NEW_CARD_CERTIFICATION,
  CHANGE_NEW_CARD_FIELD, CHANGE_NEW_CARD_TECHS,
  IS_LOADING, RESET_NEW_CARD, SAVE_CARDS,
} from '../action/cards';

export const initialState = {
  loading: false,
  cards: [],
  newCard: {
    title: '',
    slug: '',
    website: '',
    description: '',
    url: '',
    image: '',
    type: '',
    techs: [],
    level: '',
    language: '',
    category: '',
  },
  certification: false,

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
    case IS_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case CHANGE_NEW_CARD_FIELD:
      return {
        ...state,
        newCard: {
          ...state.newCard,
          [action.fieldName]: action.value,
        },
      };
    case CHANGE_NEW_CARD_TECHS:
      return {
        ...state,
        newCard: {
          ...state.newCard,
          [action.fieldName]: action.value.map((element) => element.value),
        },
      };
    case CHANGE_NEW_CARD_CERTIFICATION:
      return {
        ...state,
        certification: !state.certification,
      };
    case RESET_NEW_CARD:
      return {
        ...state,
        newCard: {
          ...state.newCard,
          title: '',
          slug: '',
          website: '',
          description: '',
          url: '',
          image: '',
          type: '',
          techs: [],
          level: '',
          language: '',
          category: '',
        },
      };
    default:
      return state;
  }
};

export default reducer;
