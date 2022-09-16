// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-clone-77829.firebaseapp.com",
  projectId: "twitter-clone-77829",
  storageBucket: "twitter-clone-77829.appspot.com",
  messagingSenderId: "465187055199",
  appId: "1:465187055199:web:4cdee87c7b7b7c7d285dea"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

