import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDYRsYEy556gF2P_82ejoPQfcgQ-NPc16w",
  authDomain: "crwn-db-5ca89.firebaseapp.com",
  databaseURL: "https://crwn-db-5ca89.firebaseio.com",
  projectId: "crwn-db-5ca89",
  storageBucket: "",
  messagingSenderId: "119291360201",
  appId: "1:119291360201:web:6ce2df1465216df8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
