// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVuyads9o91x7MF9orvKaeJcNMiSIq0zo",
  authDomain: "v-netflix-gpt.firebaseapp.com",
  projectId: "v-netflix-gpt",
  storageBucket: "v-netflix-gpt.firebasestorage.app",
  messagingSenderId: "557372612344",
  appId: "1:557372612344:web:0b0995687b022d7d5f650d",
  measurementId: "G-W4BLGP480N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
