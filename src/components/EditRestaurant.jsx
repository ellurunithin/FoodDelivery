import React, { useState, useContext, useEffect } from 'react';
import { RestaurantContext } from './RestaurantContext'; // Import the RestaurantContext
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate

const EditRestaurant = () => {
    const { editRestaurant, restaurants } = useContext(RestaurantContext); // Get editRestaurant and restaurants from context
    const { id } = useParams(); // Get the restaurant ID from URL parameters
    const navigate = useNavigate(); // Initialize the navigate function
    const [restaurant, setRestaurant] = useState({
        name: '',
        description: '',
        image: '',
    });

    useEffect(() => {
        const foundRestaurant = restaurants.find((r) => r.id === parseInt(id));
        if (foundRestaurant) {
            setRestaurant(foundRestaurant); // Set the restaurant data for editing
        }
    }, [id, restaurants]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurant((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editRestaurant({ ...restaurant, id: parseInt(id) }); // Edit the restaurant
        navigate('/'); // Navigate back to the homepage
    };

    return (
        <div>
            <h2>Edit Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Restaurant Name'
                    value={restaurant.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='description'
                    placeholder='Description'
                    value={restaurant.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type='text'
                    name='image'
                    placeholder='Image URL'
                    value={restaurant.image}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Update Restaurant</button>
            </form>
        </div>
    );
};

export default EditRestaurant;
