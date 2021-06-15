export const updateState = (isLoggedIn) => async (dispatch) => {
  try {
    if (isLoggedIn) {
      dispatch(loginAction());
    } else {
      dispatch(logoutAction());
    }
  } catch (error) {
    console.log(error);
  }
};
export const loginAction = () => {
  return {
    type: "LOGGED_IN",
  };
};

export const logoutAction = () => {
  return {
    type: "LOGGED_OUT",
  };
};
