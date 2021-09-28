export const FETCH_CARDS_HOME = 'FETCH_CARDS_HOME';
export const fetchCardsHome = () => (
  {
    type: FETCH_CARDS_HOME,
  }
);

export const SAVE_CARDS_HOME = 'SAVE_CARDS_HOME';
export const saveCardsHome = (data) => (
  {
    type: SAVE_CARDS_HOME,
    data,
  }
);
