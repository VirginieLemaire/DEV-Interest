import {
  CARD_EXIST,
  CHANGE_NEW_CARD_CERTIFICATION, CHANGE_NEW_CARD_FIELD,
  CHANGE_NEW_CARD_TECHS,
  MISSING_ADD_CARD_FIELDS,
  RESET_NEW_CARD, SAVE_EXIST_CARD_URL,
} from '../action/cardNew';

export const initialState = {
  title: '',
  slug: '',
  website: '',
  description: '',
  url: '',
  image: '',
  type: '',
  techs: [],
  level: '',
  lang: '',
  category: '',
  certification: false,
  addCardLinkField: '',
  cardExistValue: false,
  cardExistUrl: '',
  missingAddCardFieldsValue: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEW_CARD_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case CHANGE_NEW_CARD_TECHS:
      return {
        ...state,
        [action.fieldName]: [action.value.map((element) => element.value)],
      };
    case CHANGE_NEW_CARD_CERTIFICATION:
      return {
        ...state,
        certification: !state.certification,
      };
    case RESET_NEW_CARD:
      return {
        ...state,
        title: '',
        slug: '',
        website: '',
        description: '',
        url: '',
        image: '',
        type: '',
        techs: [],
        level: '',
        lang: '',
        category: '',
        certification: false,
      };
    case CARD_EXIST:
      return {
        ...state,
        cardExistValue: action.value,
      };
    case SAVE_EXIST_CARD_URL:
      return {
        ...state,
        cardExistUrl: action.url,
      };
    case MISSING_ADD_CARD_FIELDS:
      return {
        ...state,
        missingAddCardFieldsValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
