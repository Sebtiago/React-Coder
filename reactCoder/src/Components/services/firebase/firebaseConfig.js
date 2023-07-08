import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJ9jp4dEEBbM_-vw1HwbUQ_UBpDVXfozU",
  authDomain: "reactcoder-261b6.firebaseapp.com",
  projectId: "reactcoder-261b6",
  storageBucket: "reactcoder-261b6.appspot.com",
  messagingSenderId: "324228457841",
  appId: "1:324228457841:web:8f25e171a18b1357c482d0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)