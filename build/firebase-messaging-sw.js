// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDcIUhSwWb_T5VqpyOqCZy0sMThwVkvjF8",
  authDomain: "umany-global-dev.firebaseapp.com",
  databaseURL: "https://umany-global-dev.firebaseio.com",
  projectId: "umany-global-dev",
  storageBucket: "umany-global-dev.appspot.com",
  messagingSenderId: "282064679762",
  appId: "1:282064679762:web:55ab20a954d6bb9d31008b",
  measurementId: "G-V8JZCJB25B",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
