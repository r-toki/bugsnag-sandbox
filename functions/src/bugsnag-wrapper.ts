import Bugsnag from "@bugsnag/js";
import { logger } from "firebase-functions/v2";

import { getEnv } from "./utils";

const isBugsnagNotificationEnabled = ["production"].includes(
  getEnv("RELEASE_STAGE"),
);

if (getEnv("LOADED")) {
  Bugsnag.start({
    apiKey: getEnv("BUGSNAG_API_KEY"),
    releaseStage: getEnv("RELEASE_STAGE") || "local",
    onError: async () => {
      return isBugsnagNotificationEnabled;
    },
  });
}

export function bugsnagWrapper(fn: (...args: any[]) => any) {
  return async (...args: unknown[]) => {
    try {
      return await fn(...args);
    } catch (unknownErr) {
      const err =
        unknownErr instanceof Error
          ? unknownErr
          : new Error(JSON.stringify(unknownErr));
      logger.error(err);
      Bugsnag.notify(err);
      throw err;
    }
  };
}
