import { HttpsError, onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

setGlobalOptions({ region: "asia-northeast1" });

export const throwable = onRequest((req, res) => {
  switch (req.body.data) {
    case "err": {
      throw new HttpsError("internal", "err");
    }
  }

  res.send({
    data: "ok",
  });
});
