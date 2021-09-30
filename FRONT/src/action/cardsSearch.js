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

export const LOAD_MORE_RESULTS = 'LOAD_MORE_RESULTS';
export const LoadMoreResults = () => (
  {
    type: LOAD_MORE_RESULTS,
  }
);

export const SAVE_MORE_CARDS = 'SAVE_MORE_CARDS';
export const saveMoreCards = (data) => (
  {
    type: SAVE_MORE_CARDS,
    data,
  }
);

export const NEXT_PAGE = 'NEXT_PAGE';
export const NextPage = () => (
  {
    type: NEXT_PAGE,
  }
);
