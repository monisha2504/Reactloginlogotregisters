const initialLoginState = {
  isLoggedIn: false,
};
const loginReducer = (state = initialLoginState, action) => {
  console.log("type=>" + action.type);
  switch (action.type) {
    case "LOGGED_IN":
      return true;
    case "LOGGED_OUT":
      return false;
    default:
      return false;
  }
};

export default loginReducer;
