export function isMobileDevice() {
  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  return isMobileDevice;
}

export const isServer = (): boolean => {
  return typeof window === "undefined";
};

export function formatDate(dateString: any) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
