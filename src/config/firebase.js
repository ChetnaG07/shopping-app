// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHTZvqPA8F4bg19J8A7Wra7iOwclMhxgI",
  authDomain: "shopping-app-d95eb.firebaseapp.com",
  projectId: "shopping-app-d95eb",
  storageBucket: "shopping-app-d95eb.appspot.com",
  messagingSenderId: "954008185536",
  appId: "1:954008185536:web:1a7a12aa54b7d02aa39b25",
  measurementId: "G-ZZ61YZBQ4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
