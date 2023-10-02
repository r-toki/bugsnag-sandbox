import Bugsnag from "@bugsnag/js";

if (process.env.LOADED) {
  Bugsnag.start({
    apiKey: process.env.BUGSNAG_API_KEY as string,
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
