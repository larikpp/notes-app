
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDthvu4buRzZ3HSHF9KzTt5wHnvDIYlT5U",
  authDomain: "react-notes-e0bdb.firebaseapp.com",
  projectId: "react-notes-e0bdb",
  storageBucket: "react-notes-e0bdb.appspot.com",
  messagingSenderId: "6471277457",
  appId: "1:6471277457:web:3826229f6896f421df1830"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')