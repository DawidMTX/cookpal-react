
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_AUTH_KEY}`,
  authDomain: "cookpal-auth.firebaseapp.com",
  projectId: "cookpal-auth",
  storageBucket: "cookpal-auth.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_AUTH_M_ID}`,
  appId: `${process.env.REACT_APP_AUTH_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {auth, db}