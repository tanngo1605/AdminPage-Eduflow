
const initState = {}

export const setCurrentUser = (payload) => ({
  type: "SET_USER",
  payload,
});

const accountReducer = (state = initState, action) => {
  switch(action.type){
    case 'SET_USER':
      let userData = action.paylod;
      console.log(userData)
      return {...state,userData:userData}

    default:
      return state
  }
  return state;
};

export default accountReducer;