import Cookies from "js-cookie";

const { REACT_APP_AUTH_LABEL } = process.env;

const currentToken = Cookies.get(REACT_APP_AUTH_LABEL);
const loggedToken = Boolean(currentToken);
const state = {
  loggedIn: loggedToken,
  token: currentToken,
  authToken: "",
  fcmToken: "",
  user: {},
};

export default state;
