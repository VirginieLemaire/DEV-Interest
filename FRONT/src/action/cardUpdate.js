export const UPDATE_CARD = 'UPDATE_CARD';
export const updateCard = () => (
  {
    type: UPDATE_CARD,
  }
);

export const CHANGE_UPDATE_CARD_FIELD = 'CHANGE_UPDATE_CARD_FIELD';
export const changeUpdateCardField = (value, fieldName) => (
  {
    type: CHANGE_UPDATE_CARD_FIELD,
    value,
    fieldName,
  }
);

export const CHANGE_UPDATE_CARD_TECHS = 'CHANGE_UPDATE_CARD_TECHS';
export const changeUpdateCardTechs = (value, fieldName) => (
  {
    type: CHANGE_UPDATE_CARD_TECHS,
    value,
    fieldName,
  }
);

export const CHANGE_UPDATE_CARD_CERTIFICATION = 'CHANGE_UPDATE_CARD_CERTIFICATION';
export const changeUpdateCardCertification = () => (
  {
    type: CHANGE_UPDATE_CARD_CERTIFICATION,
  }
);

export const RESET_UPDATE_CARD = 'RESET_UPDATE_CARD';
export const resetUpdateCard = () => ({
  type: RESET_UPDATE_CARD,
});

export const SAVE_UPDATE_CARDS = 'SAVE_UPDATE_CARDS';
export const saveUpdateCards = (cards) => (
  {
    type: SAVE_UPDATE_CARDS,
    cards,
  }
);

export const GET_UPDATE_CARD_INFO = 'GET_UPDATE_CARD_INFO';
export const getUpdateCardInfo = (id) => (
  {
    type: GET_UPDATE_CARD_INFO,
    id,
  }
);

export const AUTOFILL_UPDATE_FIELDS = 'AUTOFILL_UPDATE_FIELDS';
export const autofillUpdateFields = (card) => (
  {
    type: AUTOFILL_UPDATE_FIELDS,
    card,
  }
);

export const SET_DELETE_CARD_ID = 'SET_DELETE_CARD_ID';
export const setDeleteCardId = (id) => (
  {
    type: SET_DELETE_CARD_ID,
    id,
  }
);

export const DELETE_CARD = 'DELETE_CARD';
export const deleteCard = (id) => (
  {
    type: DELETE_CARD,
    id,
  }
);

export const MISSING_UPDATE_CARD_FIELDS = 'MISSING_UPDATE_CARD_FIELDS';
export const missingUpdateCardFields = (value) => (
  {
    type: MISSING_UPDATE_CARD_FIELDS,
    value,
  }
)
