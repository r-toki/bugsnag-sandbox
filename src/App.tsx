import { useState } from "react";

import { throwable } from "./firebase-functions";

// NOTE: hash 値の確認用

export default function App() {
  const [val, set] = useState<string>();
  const [, asyncThrow] = useState();

  function onOk() {
    throwable("").then((res) => set(res.data));
  }

  function onErr() {
    throwable("err").catch((err) => {
      const errMsg = err.details.message;
      set(errMsg);
      asyncThrow(() => {
        throw new Error(errMsg);
      });
    });
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
