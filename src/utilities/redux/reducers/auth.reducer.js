import AuthState from "@utilities/redux/states/auth.state";
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  HANDLE_AUTH,
  HANDLE_PHONE_LOGIN,
  HANDLE_GOOGLE_LOGIN,
} from "@/utilities/redux/actions/constants";

const { REACT_APP_FCM_LABEL, REACT_APP_AUTH_LABEL } = process.env;

// Use the initialState as a default value
export default function appReducer(state = AuthState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case AUTH_LOGIN: {
      const { authToken } = action.payload;
      const loggedIn = Boolean(authToken);
      console.log('loggedIn', loggedIn)
      return {
        ...state,
        authToken,
        loggedIn,
      };
    }
    case HANDLE_PHONE_LOGIN: {
      const { authToken } = action;
      if (authToken) sessionStorage.setItem(REACT_APP_AUTH_LABEL, authToken);
      return {
        ...state,
        authToken,
        loggedIn: true,
      };
    }
    case HANDLE_GOOGLE_LOGIN: {
      const { authToken } = action;
      if (authToken) sessionStorage.setItem(REACT_APP_AUTH_LABEL, authToken);
      return {
        ...state,
        authToken,
        loggedIn: true,
      };
    }
    case AUTH_LOGOUT: {
      // sessionStorage.removeItem(REACT_APP_FCM_LABEL);
      sessionStorage.removeItem(REACT_APP_AUTH_LABEL);
      return {
        ...state,
        authToken: "",
        loggedIn: false,
      };
    }
    case HANDLE_AUTH: {
      const { fcmToken, authToken } = action.payload;
      if (fcmToken) sessionStorage.setItem(REACT_APP_FCM_LABEL, fcmToken);
      if (authToken) sessionStorage.setItem(REACT_APP_AUTH_LABEL, authToken);
      return {
        ...state,
        ...action.payload,
      };
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
