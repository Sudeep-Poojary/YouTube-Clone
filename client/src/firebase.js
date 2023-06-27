import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "video-2ef06.firebaseapp.com",
  projectId: "video-2ef06",
  storageBucket: "video-2ef06.appspot.com",
  messagingSenderId: "854887565157",
  appId: "1:854887565157:web:c0b27c88eae77dcc0a038c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export default app;
