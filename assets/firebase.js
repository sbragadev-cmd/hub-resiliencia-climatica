// assets/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKwvvNLnmUvGH-UuTDDiblTTtb0Zb1Pn8",
  authDomain: "regenera-b61bf.firebaseapp.com",
  projectId: "regenera-b61bf",
  storageBucket: "regenera-b61bf.firebasestorage.app",
  messagingSenderId: "334475303109",
  appId: "1:334475303109:web:1e69c4138f9d2b553278ac",
  measurementId: "G-XBE1TCKHD5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
