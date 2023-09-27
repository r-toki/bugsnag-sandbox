import "./index.css";
import "./firebase-initialize.ts";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { ErrorBoundaryWrapper } from "./error-bundary-wrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundaryWrapper>
      <App />
    </ErrorBoundaryWrapper>
  </React.StrictMode>,
);
