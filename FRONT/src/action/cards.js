export const FETCH_CARDS = 'FETCH_CARDS';
export const fetchCards = () => (
  {
    type: FETCH_CARDS,
  }
);

export const SAVE_CARDS = 'SAVE_CARDS';
export const saveCards = (cards) => (
  {
    type: SAVE_CARDS,
    cards,
  }
);

export const IS_LOADING = 'IS_LOADING';
export const isLoading = () => ({
  type: IS_LOADING,
});
