
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDR8AraBj103_jXk54k7j9rwq783wMrEfw",
  authDomain: "tickets-chamado-25598.firebaseapp.com",
  projectId: "tickets-chamado-25598",
  storageBucket: "tickets-chamado-25598.appspot.com",
  messagingSenderId: "536507159114",
  appId: "1:536507159114:web:556875a14979f1d5440cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };



/*
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR8AraBj103_jXk54k7j9rwq783wMrEfw",
  authDomain: "tickets-chamado-25598.firebaseapp.com",
  projectId: "tickets-chamado-25598",
  storageBucket: "tickets-chamado-25598.appspot.com",
  messagingSenderId: "536507159114",
  appId: "1:536507159114:web:556875a14979f1d5440cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/