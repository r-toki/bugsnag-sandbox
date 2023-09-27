import { useState } from "react";

import { throwable } from "./firebase-functions";

export default function App() {
  const [val, set] = useState<string>();

  function onOk() {
    return throwable("").then((res) => set(res.data));
  }

  function onErr() {
    return throwable("err").catch((err) => set(JSON.stringify(err)));
  }

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
      <button onClick={onOk}>ok</button>
      <button onClick={onErr}>err</button>
      <div>{val ?? "undefined"}</div>
    </div>
  );
}
