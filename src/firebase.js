// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCJpCRmptZ6aR1mGaNrVkQbtSAqPYjHVM",
  authDomain: "smash-photo-tag.firebaseapp.com",
  projectId: "smash-photo-tag",
  storageBucket: "smash-photo-tag.appspot.com",
  messagingSenderId: "254442612408",
  appId: "1:254442612408:web:4331af89da93d6657b764d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


