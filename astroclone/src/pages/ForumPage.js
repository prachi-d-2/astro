import React, { useEffect, useState } from 'react';

// Mock data (in a real app, this would likely come from an API)
const mockUsers = [
    { id: 1, name: 'Alice', zodiac: 'Aries', posts: ['Post 1 by Alice', 'Post 2 by Alice'] },
    { id: 2, name: 'Bob', zodiac: 'Taurus', posts: ['Post 1 by Bob'] },
    { id: 3, name: 'Charlie', zodiac: 'Gemini', posts: ['Post 1 by Charlie', 'Post 2 by Charlie'] },
    // Add more users as needed
];

const ForumPage = ({ currentUserId }) => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        // Find the current user based on the passed user ID
        const currentUser = mockUsers.find(user => user.id === currentUserId);
        if (currentUser) {
            setUserPosts(currentUser.posts);
        }
    }, [currentUserId]);

    return (
        <div>
            <h1>Astrology Forum</h1>
            <p>Join the discussion with other astrology enthusiasts!</p>
            {/* Display user's posts dynamically */}
            {userPosts.length > 0 ? (
                <div>
                    <h2>Your Posts:</h2>
                    <ul>
                        {userPosts.map((post, index) => (
                            <li key={index}>{post}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No posts found for you.</p>
            )}
        </div>
    );
};

export default ForumPage;