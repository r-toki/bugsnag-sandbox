import { onSchedule } from "firebase-functions/v2/scheduler";

import { bugsnagWrapper } from "../bugsnag-wrapper";

async function throwOnScheduleCore() {
  throw new Error("throw on schedule.");
}

export const throwOnSchedule = onSchedule(
  "*/5 12-18 * * *",
  bugsnagWrapper(throwOnScheduleCore),
);
