import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const subscribeEmail = async (email) => {
  try {
    await addDoc(collection(db, "subscribers"), { email, timestamp: new Date() });
    console.log("Subscription successful!");
    return true;
  } catch (error) {
    console.error("Error subscribing:", error.message);
    return false;
  }
};