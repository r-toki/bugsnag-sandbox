import { initializeApp } from "firebase/app";
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
const functions = getFunctions(app, "asia-northeast1");

if (process.env.NODE_ENV != "production") {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

export { functions };
