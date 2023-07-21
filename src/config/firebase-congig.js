import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY-lhHJRCK6BgbelbVuGxii35Rx5cV5EA",
  authDomain: "fir-with-react-d577a.firebaseapp.com",
  projectId: "fir-with-react-d577a",
  storageBucket: "fir-with-react-d577a.appspot.com",
  messagingSenderId: "850643957922",
  appId: "1:850643957922:web:b9e2ade21ea56fe03c7ffb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);