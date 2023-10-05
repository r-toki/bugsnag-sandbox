import { httpsCallable } from "firebase/functions";

import { functions, getHttpsFunctionUrl } from "./firebase-initialize";

export async function throwOnCall() {
  return httpsCallable(functions, "throwOnCall")();
}

export async function throwOnRequest() {
  return fetch(getHttpsFunctionUrl("throwOnRequest"));
}
