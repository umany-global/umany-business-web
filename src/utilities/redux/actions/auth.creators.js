import AuthClient from "@api/clients/auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";

// CONSTANTS
import {
  HANDLE_PHONE_LOGIN,
  HANDLE_GOOGLE_LOGIN,
} from "@/utilities/redux/actions/constants";

export const loginWithPhone = (data) => {
  return async (dispatch) => {
    try {
      let response = await AuthClient.loginPhone(data);
      response = await firebase.auth().signInWithCustomToken(response.data);
      const phone_token = await response.user.getIdToken(true);
      const authToken = await firebase.auth().currentUser.getIdToken();
      const fcmToken = await firebase.messaging().getToken();
      await AuthClient.validClientToken({
        phone_token,
        authToken,
        phone_number: data.phone,
        fcmToken: fcmToken,
      });
      dispatch({
        type: HANDLE_PHONE_LOGIN,
        payload: response.data,
        authToken,
      });
    } catch (error) {
      console.log("error", error);
      // // console.log("error :>> ", error);
    }
  };
};

export const loginWithProvider = (data) => {
  return async (dispatch) => {
    const provider = new firebase.auth[data.provider]();
    try {
      const response = await firebase.auth().signInWithPopup(provider);
      let result = await firebase
        .auth()
        .signInWithCredential(response.credential);
      const phone_token = await result.user.getIdToken(true);
      const authToken = await firebase.auth().currentUser.getIdToken();
      const fcmToken = await firebase.messaging().getToken();
      console.log("fcmToken", fcmToken);
      await AuthClient.validClientToken({
        phone_token,
        authToken,
        fcmToken,
        // phone_number: data.phone,
      });
      console.log("result", result);
      dispatch({
        type: HANDLE_GOOGLE_LOGIN,
        // payload: result.data,
        authToken,
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
};
