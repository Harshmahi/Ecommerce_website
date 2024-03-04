// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYne-hxPu2MCx18SO1mpz82KY386xKw-w",
  authDomain: "myfirstapp-b0c00.firebaseapp.com",
  projectId: "myfirstapp-b0c00",
  storageBucket: "myfirstapp-b0c00.appspot.com",
  messagingSenderId: "618518241283",
  appId: "1:618518241283:web:cec8f78299d4b470f86e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}