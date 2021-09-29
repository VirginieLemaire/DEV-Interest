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
