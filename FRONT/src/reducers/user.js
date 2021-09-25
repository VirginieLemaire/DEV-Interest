import {
  CHANGE_FIELD, CONNECT_USER, SHOW_ADD_CARD_MODAL, SHOW_CONNEXION_MODAL, USER_LOGOUT,
} from '../action/user';

export const initialState = {
  search: '',
  connexionModal: false,
  addCardModal: false,
  email: '',
  password: '',
  username: 'Romain',
  isLogged: true,
  bookmarks: [
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
  addCardLinkField: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SHOW_CONNEXION_MODAL:
      return {
        ...state,
        connexionModal: !state.connexionModal,
      };
    case SHOW_ADD_CARD_MODAL:
      return {
        ...state,
        addCardModal: !state.addCardModal,
      };
    case CONNECT_USER:
      return {
        ...state,
        ...action.data,
        email: '',
        password: '',
        isLogged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default reducer;
