export const pluralize = (str, count) => (count === 1 ? str : `${str}s`);

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
