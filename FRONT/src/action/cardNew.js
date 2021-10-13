export const ADD_CARD = 'ADD_CARD';
export const addCard = () => (
  {
    type: ADD_CARD,
  }
);

export const CHANGE_NEW_CARD_FIELD = 'CHANGE_NEW_CARD_FIELD';
export const changeNewCardField = (value, fieldName) => (
  {
    type: CHANGE_NEW_CARD_FIELD,
    value,
    fieldName,
  }
);

export const CHANGE_NEW_CARD_TECHS = 'CHANGE_NEW_CARD_TECHS';
export const changeNewCardTechs = (value, fieldName) => (
  {
    type: CHANGE_NEW_CARD_TECHS,
    value,
    fieldName,
  }
);

export const CHANGE_NEW_CARD_CERTIFICATION = 'CHANGE_NEW_CARD_CERTIFICATION';
export const changeNewCardCertification = () => (
  {
    type: CHANGE_NEW_CARD_CERTIFICATION,
  }
);

export const RESET_NEW_CARD = 'RESET_NEW_CARD';
export const resetNewCard = () => ({
  type: RESET_NEW_CARD,
});

export const SAVE_NEW_CARDS = 'SAVE_NEW_CARDS';
export const saveNewCards = (cards) => (
  {
    type: SAVE_NEW_CARDS,
    cards,
  }
);

export const GET_OPENGRAPH_DATA = 'GET_OPENGRAPHE_DATA';
export const getOpengraphData = () => (
  {
    type: GET_OPENGRAPH_DATA,
  }
);

export const CARD_EXIST = 'CARD_EXIST';
export const cardExist = (value) => (
  {
    type: CARD_EXIST,
    value,
  }
);

export const SAVE_EXIST_CARD_URL = 'SAVE_EXIST_CARD_URL';
export const saveExistCardUrl = (url) => (
  {
    type: SAVE_EXIST_CARD_URL,
    url,
  }
);

export const MISSING_ADD_CARD_FIELDS = 'MISSING_ADD_CARD_FIELDS';
export const missingAddCardFields = (value) => (
  {
    type: MISSING_ADD_CARD_FIELDS,
    value,
  }
)
