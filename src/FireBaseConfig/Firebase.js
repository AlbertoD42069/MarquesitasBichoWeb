import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCb1aer4-e21GITY_Xa5b1s7fyxbzKU4fw",
  authDomain: "marquesitasbicho-7e2ab.firebaseapp.com",
  databaseURL: "https://marquesitasbicho-7e2ab-default-rtdb.firebaseio.com",
  projectId: "marquesitasbicho-7e2ab",
  storageBucket: "marquesitasbicho-7e2ab.firebasestorage.app",
  messagingSenderId: "345260775018",
  appId: "1:345260775018:web:b14e69039bdf1c270a9c13",
  measurementId: "G-4FJN2SGQ6T"
};
export const MarqBichoApp = initializeApp(firebaseConfig);
export const MarqBichoDB = getFirestore(MarqBichoApp);