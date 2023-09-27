import Bugsnag from "@bugsnag/js";

const isBugsnagStarted = false;

export function bugsnagWrapper(fn: (...args: any[]) => any) {
  return async (...args: unknown[]) => {
    try {
      return await fn(...args);
    } catch (err) {
      if (!isBugsnagStarted)
        Bugsnag.start({
          apiKey: process.env.BUGSNAG_API_KEY as string,
        });
      Bugsnag.notify(err as Error);
      throw err;
    }
  };
}
