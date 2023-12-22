// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-mern-a4846.firebaseapp.com",
  projectId: "realestate-mern-a4846",
  storageBucket: "realestate-mern-a4846.appspot.com",
  messagingSenderId: "1048514432844",
  appId: "1:1048514432844:web:15cc4d5a8432cc165909e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);