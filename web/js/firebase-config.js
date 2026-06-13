// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvBpKU4-4EZkOUOIJg43FCogoCYEK8-6k",
  authDomain: "eduardospizza-acc5e.firebaseapp.com",
  projectId: "eduardospizza-acc5e",
  storageBucket: "eduardospizza-acc5e.firebasestorage.app",
  messagingSenderId: "1019424725975",
  appId: "1:1019424725975:web:d8ccf876278008cc6dc992",
  measurementId: "G-S2JSMFVV7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const realtimeDb = getDatabase(app);
