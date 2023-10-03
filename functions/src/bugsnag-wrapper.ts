import Bugsnag from "@bugsnag/js";

import { getEnv } from "./utils";

const isBugsnagNotificationEnabled = ["production"].includes(
  getEnv("RELEASE_STAGE"),
);

if (getEnv("LOADED")) {
  Bugsnag.start({
    apiKey: getEnv("BUGSNAG_API_KEY"),
    releaseStage: getEnv("RELEASE_STAGE") || "xxx",
    onError: async () => {
      return isBugsnagNotificationEnabled;
    },
  });
}

export function bugsnagWrapper(fn: (...args: any[]) => any) {
  return async (...args: unknown[]) => {
    try {
      return await fn(...args);
    } catch (err) {
      Bugsnag.notify(err as Error);
      throw err;
    }
  };
}
