import React from 'react';
import { useParams } from 'react-router-dom';
import FoodMenu from './menu/FoodMenu'; // Import the FoodMenu component

const FoodItems = () => {
    const { restaurantId } = useParams(); // Get restaurant ID from URL
    
    // Here you could conditionally return FoodMenu or create a separate menu for each restaurant
    return (
        <div>
            <FoodMenu /> {/* Render the static food menu */}
        </div>
    );
};

export default FoodItems;
