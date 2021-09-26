import {
  CHANGE_NEW_CARD_CERTIFICATION, CHANGE_NEW_CARD_FIELD, IS_LOADING, SAVE_CARDS
} from '../action/cards';

export const initialState = {
  cards: [],
  loading: false,
  newCardTitle: '',
  newCardWebsite: '',
  newCardImage: '',
  newCardDescription: '',
  newCardCategory: '',
  newCardLevel: '',
  newCardType: '',
  newCardUrl: '',
  newCardContributor: '',
  newCardLanguage: '',
  newCardTechs: [],
  newCardCertification: false,
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
        [action.fieldName]: action.value,
      };
    case CHANGE_NEW_CARD_CERTIFICATION:
      return {
        ...state,
        newCardCertification: !state.newCardCertification,
      };
    default:
      return state;
  }
};

export default reducer;
