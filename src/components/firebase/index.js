// import firebase from "firebase/app";
// import "@firebase/messaging";

// let messaging;

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

// firebase.initializeApp(config);

// // we need to check if messaging is supported by the browser
// if (firebase.messaging.isSupported()) {
//   messaging = firebase.messaging();
// }

export { config };
