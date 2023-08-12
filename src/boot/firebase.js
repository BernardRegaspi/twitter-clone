import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyDFonHQVM08kc6UGJ5zF6C8E8uBXmSZ3PE",
  authDomain: "twitter-2319a.firebaseapp.com",
  projectId: "twitter-2319a",
  storageBucket: "twitter-2319a.appspot.com",
  messagingSenderId: "726397269962",
  appId: "1:726397269962:web:38c562393235b559358133"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database


export default db
