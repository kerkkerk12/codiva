import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6FsUgSO1Bkj-Kiiuby4Xo3F84jf-962o",
  authDomain: "codediva-d62f6.firebaseapp.com",
  projectId: "codediva-d62f6",
  storageBucket: "codediva-d62f6.appspot.com",
  messagingSenderId: "143170025793",
  appId: "1:143170025793:web:c68a020b59691b3301c9c0",
  measurementId: "G-YD7MR9R2NS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  doc,
  setDoc
};
export {db}
export default auth;
