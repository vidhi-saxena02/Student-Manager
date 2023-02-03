import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmcdiCl7W4W8NmOkKBiYxDzrELlbMZpxE",
  authDomain: "student-manager-acb92.firebaseapp.com",
  projectId: "student-manager-acb92",
  storageBucket: "student-manager-acb92.appspot.com",
  messagingSenderId: "382273663569",
  appId: "1:382273663569:web:92b5b22b93dd51a24a7e70",
  measurementId: "G-ELYD155BER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
