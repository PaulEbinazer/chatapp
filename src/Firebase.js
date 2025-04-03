// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY
  ,
  authDomain: "chatapp-bbee6.firebaseapp.com",
  projectId: "chatapp-bbee6",
  storageBucket: "chatapp-bbee6.firebasestorage.app",
  messagingSenderId: "787594679981",
  appId: "1:787594679981:web:5d51162ffb3c1cc4bb9824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)