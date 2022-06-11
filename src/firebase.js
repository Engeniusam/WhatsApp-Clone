import firebase from "firebase/compat/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBahhJIHApgf_SVmGb-er2MknwfqH2kEFY",
  authDomain: "whats-app-clone-b5cff.firebaseapp.com",
  projectId: "whats-app-clone-b5cff",
  storageBucket: "whats-app-clone-b5cff.appspot.com",
  messagingSenderId: "742883219011",
  appId: "1:742883219011:web:804183dccdd6a8cdd426f6",
  measurementId: "G-5779WB3QZL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
