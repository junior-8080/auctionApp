//returns an objects containing values whose key are in the keys param ; replaces undefined and null value for each key with an empty string
export const formInit = (item: any, keys: string[]) => {
  return keys.reduce((subSet: any, key) => {
    subSet[key] = item[key] || "";
    return subSet;
  }, {});
};
