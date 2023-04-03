import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3Aa5wKRs4BrB50FjUNrfvzHkaw2RZet0",
  authDomain: "thedojo-61480.firebaseapp.com",
  projectId: "thedojo-61480",
  storageBucket: "thedojo-61480.appspot.com",
  messagingSenderId: "912188563409",
  appId: "1:912188563409:web:fd9c90d14c25a9a17c4af0",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
