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

export const LOAD_MORE_HOME_CARDS = 'LOAD_MORE_HOME_CARDS';
export const loadMoreHomeCards = () => (
  {
    type: LOAD_MORE_HOME_CARDS,
  }
);

export const NEXT_PAGE_HOME = 'NEXT_PAGE_HOME';
export const NextPageHome = () => (
  {
    type: NEXT_PAGE_HOME,
  }
);

export const SAVE_MORE_HOME_CARDS = 'SAVE_MORE_HOME_CARDS';
export const saveMoreHomeCards = (data) => (
  {
    type: SAVE_MORE_HOME_CARDS,
    data,
  }
);
