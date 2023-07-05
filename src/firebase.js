import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBxcwrZIuDlwy4qh1HgYByI3vaR3WZnRv4",
  authDomain: "netflix-watchonline-clone.firebaseapp.com",
  projectId: "netflix-watchonline-clone",
  storageBucket: "netflix-watchonline-clone.appspot.com",
  messagingSenderId: "184024003766",
  appId: "1:184024003766:web:30d1144bd71b86d12f6217",
  measurementId: "G-17T8397S2T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
