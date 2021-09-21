export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const changeSearchField = (currentSearch) => (
  {
    type: CHANGE_SEARCH_FIELD,
    value: currentSearch,
  }
);
