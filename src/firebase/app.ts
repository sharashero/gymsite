import { initializeApp } from "firebase/app";


const firebaseConfig = {
  appId: import.meta.env.VITE_FIREBASE_APPID,
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
};


const app = initializeApp(firebaseConfig);
export default app;
