import {
  CHANGE_NEW_CARD_CERTIFICATION, CHANGE_NEW_CARD_FIELD, CHANGE_NEW_CARD_TECHS, RESET_NEW_CARD,
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
        [action.fieldName]: action.value.map((element) => element.value),
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
        language: '',
        category: '',
        certification: false,
      };
    default:
      return state;
  }
};

export default reducer;
