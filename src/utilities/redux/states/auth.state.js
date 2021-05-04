const { REACT_APP_AUTH_LABEL } = process.env;
const loggedToken = Boolean(sessionStorage.getItem(REACT_APP_AUTH_LABEL));
const state = {
  loggedIn: loggedToken,
  token: loggedToken,
  authToken: "",
  fcmToken: "",
  user: {},
};

export default state;
