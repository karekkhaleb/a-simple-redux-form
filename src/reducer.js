import {SUBMIT_USER} from "./actions/actionTypes";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type){
      case SUBMIT_USER:
          return {
              ...state,
              user: action.payload
          };
      default:
          return state;
  }
};
export default reducer;
