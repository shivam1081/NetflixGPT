// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5rbk52iOR2Sxs1VSBcjfpYiZWgO8DUso",
  authDomain: "netflixgpt-21ac9.firebaseapp.com",
  projectId: "netflixgpt-21ac9",
  storageBucket: "netflixgpt-21ac9.appspot.com",
  messagingSenderId: "1075191481006",
  appId: "1:1075191481006:web:a3acd413c462527ce3233f",
  measurementId: "G-85YE2X48WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Calling once as it is used everywhere
 export const auth = getAuth();