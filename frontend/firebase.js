// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "zestygo-food-delivery.firebaseapp.com",
  projectId: "zestygo-food-delivery",
  storageBucket: "zestygo-food-delivery.firebasestorage.app",
  messagingSenderId: "635885419766",
  appId: "1:635885419766:web:d9b2bdd49aab83c8a000d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}