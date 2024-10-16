import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { RestaurantContext } from './RestaurantContext'; // Import the RestaurantContext
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const { restaurants } = useContext(RestaurantContext); // Get restaurants from context

    const handleViewMenu = (id) => {
        navigate(`/food-items/${id}`); // Navigate to the FoodItems page with restaurant ID
    };

    const handleAddRestaurant = () => {
        navigate('/add-restaurant'); // Navigate to the Add Restaurant page
    };

    return (
        <div className='home'>
            <div className='search-bar'>
                <input type='text' placeholder='Search restaurant or food' className="search-bar" />
            </div>
            <button className="add-restaurant-button" onClick={handleAddRestaurant}>Add Restaurant</button>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="restaurant-card">
                        <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="restaurant-image"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://via.placeholder.com/400'; }}
                        />
                        <h2 className="restaurant-name">{restaurant.name}</h2>
                        <p className="restaurant-description">{restaurant.description}</p>
                        <button className="view-menu-button" onClick={() => handleViewMenu(restaurant.id)}>View Menu</button>
                        <button className="edit-restaurant-button" onClick={() => navigate(`/edit-restaurant/${restaurant.id}`)}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
