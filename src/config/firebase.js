import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3muvxCd6nF2jwvIDAOxkMlTArDbS7J0s",
  authDomain: "shopping-applive.firebaseapp.com",
  projectId: "shopping-applive",
  storageBucket: "shopping-applive.appspot.com",
  messagingSenderId: "833565909494",
  appId: "1:833565909494:web:127866dd3fbf932dbf27d7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
