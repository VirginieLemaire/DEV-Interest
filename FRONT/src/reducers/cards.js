import {
  CHANGE_NEW_CARD_CERTIFICATION, CHANGE_NEW_CARD_FIELD, IS_LOADING, SAVE_CARDS,
} from '../action/cards';

export const initialState = {
  cards: [
    {
      id: 34,
      title: "Mon super titre d'article 27",
      slug: 'Mon-super-titre-article-27',
      website: 'Nom du site 27',
      image: 'https://images.unsplash.com/photo-1622447806884-6aabf9a96e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8MjFhcGMzVFVFVm98fGVufDB8fHx8&auto=format&fit=crop&w=400&q=68',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      category: 'Apprendre',
      level: 'intermédiaire',
      type: 'article',
      url: ' https://www.pinterest.fr/',
      contributor: 'Fred',
      lang: 'français',
      createdat: '2021-09-22T09:12:52.986Z',
      techs: ['mongodb', 'PHP'],
    },
  ],
  loading: false,
  newCardTitle: '',
  newCardWebsite: '',
  newCardImage: '',
  newCardDescription: '',
  newCardCategory: '',
  newCardLevel: '',
  newCardType: '',
  newCardUrl: '',
  newCardContributor: '',
  newCardLanguage: '',
  newCardTechs: [],
  newCardCertification: false,
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
      };
    case IS_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case CHANGE_NEW_CARD_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case CHANGE_NEW_CARD_CERTIFICATION:
      return {
        ...state,
        newCardCertification: !state.newCardCertification,
      };
    default:
      return state;
  }
};

export default reducer;
