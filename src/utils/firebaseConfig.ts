import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1uu8VA6uaGcky6xp1qCoDfIjV0bTSVvo",
  authDomain: "meetdevashu.firebaseapp.com",
  projectId: "meetdevashu",
  storageBucket: "meetdevashu.appspot.com",
  messagingSenderId: "223347307854",
  appId: "1:223347307854:web:779eb6421f00ee37309a1f"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
