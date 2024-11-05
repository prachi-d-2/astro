import React, { useState } from 'react';

const EditProfile = ({ user, onSave }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        age: user.age,
        zodiacSign: user.zodiacSign,
        bio: user.bio,
        interests: user.interests.join(', '), // Convert interests array to a string
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert interests string back to an array
        const updatedData = {
            ...formData,
            interests: formData.interests.split(',').map(interest => interest.trim()), // Split and trim each interest
        };
        onSave(updatedData); // Pass updated data to the ProfilePage
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'left', margin: '20px auto', maxWidth: '400px' }}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <div>
                <label>Zodiac Sign:</label>
                <input
                    type="text"
                    name="zodiacSign"
                    value={formData.zodiacSign}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <div>
                <label>Bio:</label>
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <div>
                <label>Interests (comma-separated):</label>
                <input
                    type="text"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <button
                type="submit"
                style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Save
            </button>
        </form>
    );
}

export default EditProfile;
