import { useState } from "react";

import { throwable } from "./firebase-functions";

export default function App() {
  const [val, set] = useState<string>();

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
      <button onClick={() => throwable("").then((res) => set(res.data))}>
        ok
      </button>
      <button
        onClick={() =>
          throwable("err").catch((err) => set(JSON.stringify(err)))
        }
      >
        err
      </button>
      <div>{val ?? "undefined"}</div>
    </div>
  );
}
