import { addDoc, collection, Timestamp } from "firebase/firestore";

import { throwOnCall, throwOnRequest } from "./firebase-functions";
import { db } from "./firebase-initialize";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "start",
      }}
    >
      <div>App</div>
      <button onClick={throwOnCall}>throwOnCall</button>
      <button onClick={throwOnRequest}>throwOnRequest</button>
      <button
        onClick={() =>
          addDoc(collection(db, "todos"), { createdAt: Timestamp.now() })
        }
      >
        throwOnTrigger
      </button>
    </div>
  );
}
