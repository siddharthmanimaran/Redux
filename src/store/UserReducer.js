import * as actions from "./actions";
const initialData = {
  users: ["admin", "end-user", "dev"],
  logIn: "none",
};
const userReducer = (state = initialData, action) => {
  if (action.type === actions.LOGIN) {
    console.log("Login", action.payload);
    return {
      ...state,
      logIn: action.payload.lt,
    };
  }
  return state;
};

export default userReducer;
