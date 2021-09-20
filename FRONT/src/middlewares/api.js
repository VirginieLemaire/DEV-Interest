export default (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};
