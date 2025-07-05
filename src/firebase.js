// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBBNyDzGh7LFmT1xOq7jB6H3eZqrV8nfAk",
  authDomain: "vibespot-onsbi.firebaseapp.com",
  projectId: "vibespot-onsbi",
  storageBucket: "vibespot-onsbi.firebasestorage.app",
  messagingSenderId: "768060648762",
  appId: "1:768060648762:web:c2559aeeb2d7ace8c0b403"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

