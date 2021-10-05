import {
  AUTOFILL_UPDATE_FIELDS,
  CHANGE_UPDATE_CARD_CERTIFICATION, CHANGE_UPDATE_CARD_FIELD,
  CHANGE_UPDATE_CARD_TECHS, RESET_UPDATE_CARD,
} from '../action/cardUpdate';
import Card from '../components/Card';

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
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_UPDATE_CARD_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case CHANGE_UPDATE_CARD_TECHS:
      return {
        ...state,
        [action.fieldName]: [action.value.map((element) => element.value)],
      };
    case CHANGE_UPDATE_CARD_CERTIFICATION:
      return {
        ...state,
        certification: !state.certification,
      };
    case RESET_UPDATE_CARD:
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
    case AUTOFILL_UPDATE_FIELDS:
      return {
        ...state,
        title: action.card.title,
        slug: action.card.slug,
        website: action.card.website,
        description: action.card.description,
        url: action.card.url,
        image: action.card.image,
        type: action.card.type,
        techs: action.card.techs,
        level: action.card.level,
        lang: action.card.lang,
        category: action.card.category,
      };
    default:
      return state;
  }
};

export default reducer;
