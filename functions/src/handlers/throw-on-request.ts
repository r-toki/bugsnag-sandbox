import { onRequest } from "firebase-functions/v2/https";

import { bugsnagWrapper } from "../bugsnag-wrapper";

const throwOnRequestCore = async () => {
  throw new Error("throw on request.");
};

export const throwOnRequest = onRequest(bugsnagWrapper(throwOnRequestCore));
