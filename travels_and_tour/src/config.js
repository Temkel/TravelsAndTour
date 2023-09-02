// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ-Iy_vNciEFLM-emSSrnmXHGcPJ4XG6A",
  authDomain: "travelsandtour-fb82b.firebaseapp.com",
  projectId: "travelsandtour-fb82b",
  storageBucket: "travelsandtour-fb82b.appspot.com",
  messagingSenderId: "271041494121",
  appId: "1:271041494121:web:01a295588403f5eafe76f8",
  measurementId: "G-G94Y6V5LEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider()

export const db = getFirestore(app)

const analytics = getAnalytics(app);

