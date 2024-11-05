import React, { useState } from 'react';

const HoroscopePage = () => {
    const [timeFrame, setTimeFrame] = useState('daily');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // State to track errors

    const horoscopes = {
        daily: {
            default: "Today you will find success in your work!",
            personalized: (sign) => `Today, ${sign}, you will find success in your work!`
        },
        weekly: {
            default: "This week, focus on relationships.",
            personalized: (sign) => `This week, ${sign}, focus on relationships.`
        },
        monthly: {
            default: "This month, it's time to focus on self-care.",
            personalized: (sign) => `This month, ${sign}, it's time to focus on self-care.`
        }
    };

    const renderHoroscope = () => {
        if (!user) {
            return horoscopes[timeFrame].default; // Default message if no user
        }
        return horoscopes[timeFrame].personalized(user.sign); // Personalized message
    };

    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        try {
            // Simulate an API call to authenticate the user
            const response = await mockApiLogin('username', 'password');
            const userData = {
                name: response.name,
                sign: response.sign
            };

            setUser(userData);
            setIsLoggedIn(true);
        } catch (err) {
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Mock API login function
    const mockApiLogin = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate successful login
                if (username === 'user' && password === 'pass') {
                    resolve({
                        name: "John Doe",
                        sign: "Aries" // Simulated zodiac sign for the user
                    });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000); // Simulate network delay
        });
    };

    return (
        <div>
            <h1>Your Horoscope</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : isLoggedIn ? (
                <div>
                    <div>
                        <button onClick={() => setTimeFrame('daily')}>Daily</button>
                        <button onClick={() => setTimeFrame('weekly')}>Weekly</button>
                        <button onClick={() => setTimeFrame('monthly')}>Monthly</button>
                    </div>
                    <p>{renderHoroscope()}</p>
                </div>
            ) : (
                <div>
                    <p>Please log in to see your horoscope.</p>
                    <button onClick={handleLogin}>Log In</button>
                </div>
            )}
        </div>
    );
}

export default HoroscopePage;
