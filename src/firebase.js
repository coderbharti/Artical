// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuzy0Us8-Eo1BZBNcwUSk8OyZBL3ttCvA",
  authDomain: "upcred-97292.firebaseapp.com",
  projectId: "upcred-97292",
  storageBucket: "upcred-97292.appspot.com",
  messagingSenderId: "452519829453",
  appId: "1:452519829453:web:c264ee388ab98cd836ee84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export default app;