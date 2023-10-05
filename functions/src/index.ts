import { setGlobalOptions } from "firebase-functions/v2/options";

setGlobalOptions({ region: "asia-northeast1" });

export { throwOnCall } from "./handlers/throw-on-call";
export { throwOnRequest } from "./handlers/throw-on-request";
export { throwOnSchedule } from "./handlers/throw-on-scheduler";
export { throwOnTrigger } from "./handlers/throw-on-trigger";
