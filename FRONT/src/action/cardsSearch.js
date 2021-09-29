export const SEARCH_CARDS = 'SEARCH_CARDS';
export const searchCards = () => (
  {
    type: SEARCH_CARDS,
  }
);

export const FETCH_CARDS_SEARCH = 'FETCH_CARDS_SEARCH';
export const fetchCardsSearch = () => (
  {
    type: FETCH_CARDS_SEARCH,
  }
);

export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const changeSearchField = (value, fieldName) => (
  {
    type: CHANGE_SEARCH_FIELD,
    value,
    fieldName,
  }
);

export const SAVE_CARDS_SEARCH = 'SAVE_CARDS_SEARCH';
export const saveCardsSearch = (data) => (
  {
    type: SAVE_CARDS_SEARCH,
    data,

  }
);
