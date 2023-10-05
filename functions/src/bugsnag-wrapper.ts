import Bugsnag from "@bugsnag/js";
import { logger } from "firebase-functions/v2";

import { getEnv } from "./utils";

const releaseStageMap: Record<string, string> = {
  "bugsnag-sandbox": "production",
};
let releaseStage;
if (getEnv("FUNCTIONS_EMULATOR") == "true") releaseStage = "development";
else releaseStage = releaseStageMap[getEnv("GCLOUD_PROJECT")];

if (getEnv("LOADED")) {
  Bugsnag.start({
    apiKey: getEnv("BUGSNAG_API_KEY"),
    releaseStage,
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
