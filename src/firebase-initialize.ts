import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyA4_mRtUuE6rxWSgjrcs-NG8wL58ydTA1o",
  authDomain: "bugsnag-sandbox.firebaseapp.com",
  projectId: "bugsnag-sandbox",
  storageBucket: "bugsnag-sandbox.appspot.com",
  messagingSenderId: "333338337078",
  appId: "1:333338337078:web:a94bed500678dc73829d97",
  measurementId: "G-QN6TGFPC0D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app, "asia-northeast1");

if (process.env.NODE_ENV != "production") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

export function getHttpsFunctionUrl(name: string) {
  return import.meta.env.VITE_FIREBASE_HTTPS_FUNCTIONS_URL.replace(
    "FUNCTION_NAME",
    name,
  );
}
