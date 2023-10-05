import { throwOnCall, throwOnRequest } from "./firebase-functions";

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
      <button onClick={throwOnCall}>onCallError</button>
      <button onClick={throwOnRequest}>onRequestError</button>
    </div>
  );
}
