const INITIAL_STATE = {
  CurrentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        CurrentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
