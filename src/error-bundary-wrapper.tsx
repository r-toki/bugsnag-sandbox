import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import React, { PropsWithChildren } from "react";

import { assertIsDefined } from "./util";

Bugsnag.start({
  apiKey: import.meta.env.VITE_BUGSNAG_API_KEY,
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin("react")?.createErrorBoundary(React);

type ErrorViewProps = {
  error: Error;
  info: React.ErrorInfo;
  clearError: () => void;
};

function ErrorView(props: ErrorViewProps) {
  return (
    <div>
      <div>Error happened.</div>
      <div>{props.error.message}</div>
      <a href="/">to index</a>
    </div>
  );
}

export function ErrorBoundaryWrapper(props: PropsWithChildren) {
  assertIsDefined(ErrorBoundary);
  return (
    <ErrorBoundary FallbackComponent={ErrorView}>
      {props.children}
    </ErrorBoundary>
  );
}
