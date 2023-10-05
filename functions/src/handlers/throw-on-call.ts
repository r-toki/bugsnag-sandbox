import { onCall } from "firebase-functions/v2/https";

import { bugsnagWrapper } from "../bugsnag-wrapper";

const throwOnCallCore = async () => {
  throw new Error("throw on call.");
};

export const throwOnCall = onCall(bugsnagWrapper(throwOnCallCore));
