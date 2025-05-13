
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};




// export const saveToLocalStorage = (key: string, value: any) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// export const getFromLocalStorage = (key: string): any => {
//   const data = localStorage.getItem(key);
//   return data ? JSON.parse(data) : null;
// };