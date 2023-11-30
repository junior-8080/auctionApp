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


// export const addKey = (value, key, condition = true) => {
//   if (value !== undefined && value !== null && condition)
//     return { [key]: value };
//   return {};
// };


// export function generateBrightColor() {
//   // Generate random values for red, green, and blue components
//   const red = Math.floor(Math.random() * 128) + 128;
//   const green = Math.floor(Math.random() * 128) + 128;
//   const blue = Math.floor(Math.random() * 128) + 128;
//   // Convert the RGB value to a hexadecimal color code
//   const hex = rgbToHex(red, green, blue);
//   return hex;
// }

// export function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length === 1 ? "0" + hex : hex;
// }

// export function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }

// export function getRandomDifferent(arr, last = undefined) {
//   if (arr.length === 0) {
//     return null;
//   } else if (arr.length === 1) {
//     return arr[0];
//   } else {
//     let num = 0;
//     do {
//       num = Math.floor(Math.random() * arr.length);
//     } while (arr[num] === last);
//     return arr[num];
//   }
// }