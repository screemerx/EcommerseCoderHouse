import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDphW1YrrTCZB0RDhDG0AIWNCSDZTKeAZI",
  authDomain: "pokecommerce-valdez.firebaseapp.com",
  projectId: "pokecommerce-valdez",
  storageBucket: "pokecommerce-valdez.appspot.com",
  messagingSenderId: "1091558015063",
  appId: "1:1091558015063:web:d1cf6cd4749d36342ca312",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
