// STORE
import store from "@utilities/redux";
import Cookies from "js-cookie";

import { AUTH_LOGOUT, HANDLE_ERROR } from "@/utilities/redux/actions/constants";

const { REACT_APP_FCM_LABEL, REACT_APP_AUTH_LABEL } = process.env;

// eslint-disable-next-line import/no-anonymous-default-export
export default (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const authToken = Cookies.get(REACT_APP_AUTH_LABEL);
      const fcmToken = Cookies.get(REACT_APP_FCM_LABEL);
      config.headers["Umany-ai"] = fcmToken;
      if (authToken) {
        config.headers["Authorization"] = authToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      console.log("response :>> ", response);
      return response;
    },
    (error) => {
      if (error && error.response) {
        const { status, data } = error.response;
        if ([401, 403].indexOf(status) >= 0) {
          store.dispatch({ type: AUTH_LOGOUT });
        }
        error = { status, message: data.error.message };
        store.dispatch({ type: HANDLE_ERROR, message: error.message });
      }
      return Promise.reject(error);
    }
  );
};
