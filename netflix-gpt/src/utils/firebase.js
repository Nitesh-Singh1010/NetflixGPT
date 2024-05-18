
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
  apiKey: "AIzaSyDObDpMSlzbO0FoaIGE6dmQibOMlE_9J94",
  authDomain: "netflixgpt-1e553.firebaseapp.com",
  projectId: "netflixgpt-1e553",
  storageBucket: "netflixgpt-1e553.appspot.com",
  messagingSenderId: "50206212708",
  appId: "1:50206212708:web:3e61bdeed9815430c4d571",
  measurementId: "G-1QETERX8QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();