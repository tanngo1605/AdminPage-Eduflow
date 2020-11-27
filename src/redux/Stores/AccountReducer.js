
export const setCurrentUser = (payload) => ({
  type: "SET_USER",
  payload,
});
export const getCurrentUser = (payload) => ({
  type: "GET_CURRENT_USER",
  payload,
});


const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      let userData = action.payload;
      console.log(userData)
      console.log(state);
      return { ...state, userData: userData }

    case "GET_CURRENT_USER":
      console.log(state);
      if (!state.userData) return { ...state, userData: [] };
      console.log(state.userData)
      return (state);
    default:
      return state
  }
};

export default accountReducer;