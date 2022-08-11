// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import database into the code

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "shortener-5b56b.firebaseapp.com",
  projectId: "shortener-5b56b",
  storageBucket: "shortener-5b56b.appspot.com",
  messagingSenderId: "728774553722",
  appId: "1:728774553722:web:ba8c9a3a9ec9bda9830bc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// To use this db in the components, export it
export const database = getDatabase(app);
