
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCKQ76VlGDlvbbGdMmjkbikk6WGFOjSga4",
  authDomain: "ashley-jenkins-5131c.firebaseapp.com",
  databaseURL: "https://ashley-jenkins-5131c-default-rtdb.firebaseio.com",
  projectId: "ashley-jenkins-5131c",
  storageBucket: "ashley-jenkins-5131c.appspot.com",
  messagingSenderId: "536268297942",
  appId: "1:536268297942:web:6e427ff5e4d4a8f6e39b77"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);