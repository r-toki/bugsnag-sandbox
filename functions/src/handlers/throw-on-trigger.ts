import { onDocumentWritten } from "firebase-functions/v2/firestore";

import { bugsnagWrapper } from "../bugsnag-wrapper";

async function throwOnTriggerCore() {
  throw new Error("throw on trigger.");
}

export const throwOnTrigger = onDocumentWritten(
  "todos/{todoId}",
  bugsnagWrapper(throwOnTriggerCore),
);
