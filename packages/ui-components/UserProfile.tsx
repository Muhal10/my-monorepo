// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { apiFetchWithAuth } from '../utils/apiHelpers';

// Define a type for user data
interface UserData {
  name: string;
  email: string;
}

const UserProfile = () => {
  // Type the state to reflect the structure of user data
  const [userData, setUserData] = useState<UserData | null>(null); // null initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiFetchWithAuth('https://www.w3schools.com/');
        setUserData(data); // Data is now typed as UserData
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);  // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Render more user data here */}
    </div>
  );
};

export default UserProfile;
