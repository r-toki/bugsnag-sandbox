import {
  CallableRequest,
  HttpsError,
  onCall,
} from "firebase-functions/v2/https";

import { bugsnagWrapper } from "../util";

export const throwable = onCall(
  bugsnagWrapper(async (req: CallableRequest<any>) => {
    switch (req.data) {
      case "err": {
        throw new HttpsError("internal", "Backend seen this error message.", {
          message: "Frontend seen this error message.",
        });
      }
    }

    return "ok";
  }),
);
