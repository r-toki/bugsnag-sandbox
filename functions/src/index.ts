import { HttpsError, onCall } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

setGlobalOptions({ region: "asia-northeast1" });

export const throwable = onCall({}, (req) => {
  switch (req.data) {
    case "err": {
      throw new HttpsError("internal", "err", {
        message: "You might have done something wrong.",
      });
    }
  }

  return "ok";
});
