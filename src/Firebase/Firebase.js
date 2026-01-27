import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
 apiKey: "AIzaSyDXDOB6ro8_whtnvbRRqkSbBlCNCLqZyyI",
 authDomain: "bookcottage-fdd6e.firebaseapp.com",
 projectId: "bookcottage-fdd6e",
 storageBucket: "bookcottage-fdd6e.firebasestorage.app",
 messagingSenderId: "164484841928",
 appId: "1:164484841928:web:5b9e71ef111b3862cf80fd"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 