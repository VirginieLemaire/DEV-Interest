import {

} from '../action/cardsHome';

export const initialState = {
  cards: [],
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
