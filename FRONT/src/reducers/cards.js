import { SAVE_CARDS } from "../action/cards";

export const initialState = {
  cards: [{
    "id": 1,
    "slug": "comment-faire-une-base-de-donnees-avec-mongodb-et-manger-des-frites",
    "title": "Comment faire une base de données avec mongodb et manger des frites avec du ketchup",
    "website": "lesnumeriques.com",
    "image": "https://www.mentalhealthtoday.co.uk/media/37238/young-people-diversity-prime.jpg",
    "description": "Super cool ce truc",
    "category": "Apprendre",
    "technos": ["JS", "PHP"],
    "level": "Beginner",
    "media": "Vidéo",
    "link": "https://www.lesnumeriques.com",
    "contributor": "jean-claude",
    "createdAt": "17/09/2021"
  }],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  // console.log('reducer recipes', state);
  // dans un reducer qui a été combiné, on n'accède qu'à sa tranche de state
  switch (action.type) {
    case SAVE_CARDS:
      return {
        ...state,
        cards: action.cards,
        loading: false,
      }
    default:
      return state;
  }
};

export default reducer;
