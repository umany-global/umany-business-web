import React from "react";
import ReactDOM from "react-dom";
import { config } from "@/components/firebase/config";
import "./index.css";
import App from "./App";
import "@utilities/i18n";
import reportWebVitals from "./reportWebVitals";
// import { registerServiceWorker } from "./serviceWorker";
// LIBS
import { ThemeProvider } from "@material-ui/core/";
import { Provider } from "react-redux";
import firebase from "firebase/app";

import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";

// THEMES
import theme from "@utilities/theme";

// STORE
import store from "@utilities/redux";

// CONSTANTS

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
// registerServiceWorker();
reportWebVitals();
