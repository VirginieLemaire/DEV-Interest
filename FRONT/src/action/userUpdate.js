export const CHANGE_UPDATE_USER_FIELD = 'CHANGE_UPDATE_USER_FIELD';
export const changeUpdateUserField = (value, fieldName) => (
  {
    type: CHANGE_UPDATE_USER_FIELD,
    value,
    fieldName,
  }
);

export const RESET_UPDATE_USER_FIELDS = 'RESET_UPDATE_USER_FIELDS';
export const resetUpdateUserFields = () => (
  {
    type: RESET_UPDATE_USER_FIELDS,
  }
);

export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const updateCurrentUser = () => (
  {
    type: UPDATE_CURRENT_USER,
  }
);
