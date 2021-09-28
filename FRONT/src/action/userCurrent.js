export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const addBookmark = (card) => (
  {
    type: ADD_BOOKMARK,
    card,
  }
);

export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const removeBookmark = (card) => (
  {
    type: REMOVE_BOOKMARK,
    card,
  }
);

// export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
// export const addToFavorites = (cardId) => (
//   {
//     type: ADD_TO_FAVORITES,
//     cardId,
//   }
// );

// export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
// export const removeFromFavorites = (cardId) => (
//   {
//     type: REMOVE_FROM_FAVORITES,
//     cardId,
//   }
// );
