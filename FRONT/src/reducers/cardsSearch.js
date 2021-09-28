import {

} from '../action/cardsSearch';

export const initialState = {
  cards: [],
  keyword: '',
  type: '',
  techs: [],
  level: '',
  lang: '',
  category: '',
  page: '',
  size: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
