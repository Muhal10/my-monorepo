// apiHelpers.ts
export const apiFetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('authToken');  // Replace with your token retrieval logic

  const headers: HeadersInit = {
    ...(token && { Authorization: `Bearer ${token}` }), // Add Authorization header if token exists
    'Content-Type': 'application/json',  // You can add other common headers here if needed
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
