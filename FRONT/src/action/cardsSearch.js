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
export const saveCardsSearch = (data, count) => (
  {
    type: SAVE_CARDS_SEARCH,
    data,
    count,
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

export const FETCH_CARDS_MINI_SEARCH = 'FETCH_CARDS_MINI_SEARCH';
export const fetchCardsMiniSearch = () => (
  {
    type: FETCH_CARDS_MINI_SEARCH,
  }
);

export const SAVE_CARDS_MINI_SEARCH = 'SAVE_CARDS_MINI_SEARCH';
export const saveCardsMiniSearch = (data, count) => (
  {
    type: SAVE_CARDS_MINI_SEARCH,
    data,
    count,
  }
);

export const RESET_CARDS_MINI = 'RESET_CARDS_MINI';
export const resetCardsMini = () => (
  {
    type: RESET_CARDS_MINI,
  }
);

export const RESET_FILTERS_TO_ALL = 'RESET_FILTERS_TO_ALL';
export const resetFiltersToAll = () => (
  {
    type: RESET_FILTERS_TO_ALL,
  }
);

export const SET_FILTER = 'SET_FILTER';
export const setFilter = (value, fieldName) => (
  {
    type: SET_FILTER,
    value,
    fieldName,
  }
);

export const SET_CURRENT_SEARCH = 'SET_CURRENT_SEARCH';
export const setCurrentSearch = (value) => (
  {
    type: SET_CURRENT_SEARCH,
    value,
  }
);
