import {
  AUTOFILL_UPDATE_FIELDS,
  CHANGE_UPDATE_CARD_CERTIFICATION, CHANGE_UPDATE_CARD_FIELD,
  CHANGE_UPDATE_CARD_TECHS, MISSING_UPDATE_CARD_FIELDS, RESET_UPDATE_CARD, SET_DELETE_CARD_ID,
} from '../action/cardUpdate';

export const initialState = {
  id: '',
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

  deleteCardId: '',
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
        // [1,2] [{value: 1, label: css}, {}]
      };
    case CHANGE_UPDATE_CARD_CERTIFICATION:
      return {
        ...state,
        certification: !state.certification,
      };
    case RESET_UPDATE_CARD:
      return {
        ...state,
        id: '',
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
        id: action.card.id,
        title: action.card.title,
        slug: action.card.slug,
        website: action.card.website,
        description: action.card.description,
        url: action.card.url,
        image: action.card.url_image,
        type: action.card.type_id,
        techs: action.card.techs,
        level: action.card.level_id,
        lang: action.card.language_id,
        category: action.card.category_id,
        certification: false,
      };
    case SET_DELETE_CARD_ID:
      return {
        ...state,
        deleteCardId: action.id,
      };
    case MISSING_UPDATE_CARD_FIELDS:
      return {
        ...state,
        missingUpdateCardFieldsValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
