import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9PCwGDwcmBnqtJ9aH6m1MFaOHhICRR6I",
  authDomain: "lecture-1-ff503.firebaseapp.com",
  databaseURL: "https://lecture-1-ff503-default-rtdb.firebaseio.com",
  projectId: "lecture-1-ff503",
  storageBucket: "lecture-1-ff503.appspot.com",
  messagingSenderId: "804819887935",
  appId: "1:804819887935:web:23aebd9af14d4a8d39d58a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const googleProvider = new GoogleAuthProvider();
