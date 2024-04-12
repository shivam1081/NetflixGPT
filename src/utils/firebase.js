// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmpldg4a2URzKYf0D_BSbGIY7RrNnrMv4",
  authDomain: "netflixgpt-shivam.firebaseapp.com",
  projectId: "netflixgpt-shivam",
  storageBucket: "netflixgpt-shivam.appspot.com",
  messagingSenderId: "511230375777",
  appId: "1:511230375777:web:47037b59f1df5178e83720",
  measurementId: "G-PQZXH70518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Calling once as it is used everywhere
 export const auth = getAuth();