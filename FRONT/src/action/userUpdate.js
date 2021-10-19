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

export const UPDATE_USER_CURRENT = 'UPDATE_USER_CURRENT';
export const updateUserCurrent = () => (
  {
    type: UPDATE_USER_CURRENT,
  }
);

export const DELETE_USER_CURRENT = 'DELETE_USER_CURRENT'
export const deleteUserCurrent = () => (
  {
    type: DELETE_USER_CURRENT,
  }
)

