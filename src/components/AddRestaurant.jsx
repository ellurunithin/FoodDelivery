import React, { useState, useContext } from 'react';
import { RestaurantContext } from './RestaurantContext'; // Import the RestaurantContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./AddRestaurant.css";

const AddRestaurant = () => {
    const { addRestaurant } = useContext(RestaurantContext); // Get addRestaurant from context
    const navigate = useNavigate(); // Initialize the navigate function
    const [newRestaurant, setNewRestaurant] = useState({
        name: '',
        description: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRestaurant((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const restaurantToAdd = {
            id: Date.now(), // Generate a unique ID
            ...newRestaurant,
        };
        addRestaurant(restaurantToAdd); // Add the new restaurant
        navigate('/'); // Navigate back to the homepage
    };

    return (
        <div>
            <h2>Add Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Restaurant Name'
                    value={newRestaurant.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='description'
                    placeholder='Description'
                    value={newRestaurant.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='image'
                    placeholder='Image URL'
                    value={newRestaurant.image}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Add Restaurant</button>
            </form>
        </div>
    );
};

export default AddRestaurant;
