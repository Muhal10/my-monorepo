// apiService.ts
import { apiFetchWithAuth } from '../utils/apiHelpers';

export const getUserData = async () => {
  return await apiFetchWithAuth('https://www.w3schools.com/');
};
