
export const trimAndCapitalize = (str: string): string => {
  return str.trim().charAt(0).toUpperCase() + str.slice(1);
};

export const toSlug = (str: string): string => {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};
