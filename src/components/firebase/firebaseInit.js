// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIi0sdv_XAEUmTsauIAuh2k3MGEuX06Xs",
  authDomain: "saavyas-698ed.firebaseapp.com",
  databaseURL: "https://saavyas-698ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "saavyas-698ed",
  storageBucket: "saavyas-698ed.appspot.com",
  messagingSenderId: "105520966553",
  appId: "1:105520966553:web:4398793f4633216a22c108",
  measurementId: "G-P0WRP7BQEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export const auth = getAuth();
export const authProvider = new GoogleAuthProvider();

export const storage = getStorage(app);
export const db = database;
