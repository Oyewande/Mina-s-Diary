import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKNG3UQ0VNUsEiHw8rKVI1hqxXsp1uUqE",
  authDomain: "mina-s-diary.firebaseapp.com",
  projectId: "mina-s-diary",
  storageBucket: "mina-s-diary.firebasestorage.app",
  messagingSenderId: "934338173961",
  appId: "1:934338173961:web:4ca873009d1e1463d32cd8",
  measurementId: "G-SDNJVPBPRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
// const analytics = getAnalytics(app);

export { app, auth, db };