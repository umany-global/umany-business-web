import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@utilities/i18n";
import reportWebVitals from "./reportWebVitals";
// LIBS
import { ThemeProvider } from "@material-ui/core/";
import { Provider } from "react-redux";
import firebase from "firebase/app";

import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";

import theme from "@utilities/theme";

// STORE
import store from "@utilities/redux";

// CONSTANTS
const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
