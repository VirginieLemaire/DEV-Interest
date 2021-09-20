export const initialState = {
  initialstate: '',
};

const reducer = (state = initialState, action = {}) => {
  // console.log('reducer recipes', state);
  // dans un reducer qui a été combiné, on n'accède qu'à sa tranche de state
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
