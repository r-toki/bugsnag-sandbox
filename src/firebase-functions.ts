import { httpsCallable } from "firebase/functions";

import { functions } from "./firebase-initialize";

export async function throwable(data: string) {
  return httpsCallable<string, string>(functions, "throwable")(data);
}
