import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4kzBrkGTVUzFNay0h_2NQlhYJc7YjSNw",
  authDomain: "mockwise-396e3.firebaseapp.com",
  projectId: "mockwise-396e3",
  storageBucket: "mockwise-396e3.firebasestorage.app",
  messagingSenderId: "30263741845",
  appId: "1:30263741845:web:2dc24d93bca05c18c0fa9c",
  measurementId: "G-SB6XR3X1NX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);