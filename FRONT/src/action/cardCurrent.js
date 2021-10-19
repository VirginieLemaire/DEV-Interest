export const FETCH_CARD = 'FETCH_CARD';
export const fetchCard = (id, slug) => (
  {
    type: FETCH_CARD,
    id,
    slug,
  }
);

export const SAVE_CARD = 'SAVE_CARD';
export const saveCard = (data) => (
  {
    type: SAVE_CARD,
    data,
  }
);
