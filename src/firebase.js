import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCEym8yleSPFlRj4cnLUxKISMg4k9TmK7s",
  authDomain: "netflix-clone-watchonline.firebaseapp.com",
  projectId: "netflix-clone-watchonline",
  storageBucket: "netflix-clone-watchonline.appspot.com",
  messagingSenderId: "90687218538",
  appId: "1:90687218538:web:9224a72447ee0aa4143b13",
  measurementId: "G-2YPM2F4BDW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
