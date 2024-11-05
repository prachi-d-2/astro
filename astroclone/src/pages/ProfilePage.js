import React, { useEffect, useState } from 'react';
import EditProfile from './EditProfile'; // Make sure to import the EditProfile component


const API_URL = process.env.REACT_APP_API_URL;

// Example usage
const userEndpoint = `${API_URL}/user/${userId}`; // For fetching a specific user
const registerEndpoint = `${API_URL}/register`; // For registration
const loginEndpoint = `${API_URL}/login`; // For login

const axios = require('axios').default; // Make sure to install axios package first
const handleUpdate = async () => {
    const userId = localStorage.getItem('userId');
    const updatedDetails = {
      username: 'NewUsername',
      email: 'newemail@example.com',
      fullName: 'New Full Name',
      dateOfBirth: '2000-01-01',
    };
  
    try {
      await axios.put(`${API_URL}/user/${userId}`, updatedDetails);
      alert('User details updated successfully');
    } catch (error) {
      alert('Failed to update user details');
    }
  };

  const fetchUserData = async () => {
    const userId = localStorage.getItem('userId'); // Get user ID from local storage
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`); // Use your API URL
        const data = response.data;
        setUser(data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};

  
const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Simulating API call to fetch user data
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const adjustedData = {
                    name: data.name,
                    age: 25, // Placeholder
                    zodiacSign: 'Gemini', // Placeholder
                    bio: 'Adventurous spirit who loves exploring new places.',
                    interests: ['Traveling', 'Astrology', 'Photography'],
                    profilePicture: 'https://via.placeholder.com/150'
                };
                setUser(adjustedData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleLogin = () => {
        // Simulating login
        setIsLoggedIn(true);
    };

    const handleSave = async (updatedData) => {
        // Simulate saving updated data
        setUser(updatedData);
        setIsEditing(false);
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching user data: {error}</div>;
    }

    if (!user) {
        return <div>No user data found.</div>;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            {!isLoggedIn ? (
                <div>
                    <h1>Please Log In</h1>
                    <button onClick={handleLogin} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Log In
                    </button>
                </div>
            ) : (
                <>
                    <h1>{user.name}'s Profile</h1>
                    <img src={user.profilePicture} alt={`${user.name}'s profile`} style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                    <h2>Age: {user.age}</h2>
                    <h2>Zodiac Sign: {user.zodiacSign}</h2>
                    <p>{user.bio}</p>
                    <h3>Interests:</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {user.interests.map((interest, index) => (
                            <li key={index} style={{ backgroundColor: '#f0f0f0', margin: '5px 0', padding: '10px', borderRadius: '5px' }}>
                                {interest}
                            </li>
                        ))}
                    </ul>
                    {isEditing ? (
                        <EditProfile user={user} onSave={handleSave} />
                    ) : (
                        <button onClick={() => setIsEditing(true)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Edit Profile
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

export default ProfilePage;
