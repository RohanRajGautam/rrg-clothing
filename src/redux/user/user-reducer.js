import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  CurrentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        CurrentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
