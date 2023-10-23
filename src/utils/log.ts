import { IS_PRODUCTION } from "@lib/constants";

export function logger(...args: any) {
  if (!IS_PRODUCTION) {
    console.log(...args);
  }
}
