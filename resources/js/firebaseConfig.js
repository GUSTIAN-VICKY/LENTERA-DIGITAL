// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmTJD9gZoOX8p5muNKY8z0fsDNFDyTfFs",
  authDomain: "lentera-digital-8b448.firebaseapp.com",
  projectId: "lentera-digital-8b448",
  storageBucket: "lentera-digital-8b448.firebasestorage.app",
  messagingSenderId: "807491419737",
  appId: "1:807491419737:web:0ac7ded489586fa2c0fb48",
  measurementId: "G-4W40V47NFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);