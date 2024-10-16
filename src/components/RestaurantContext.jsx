import React, { createContext, useState } from 'react';

// Create a context for restaurants
export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([
        {
            id: 1,
            name: 'Pasta Paradise',
            description: 'Delicious pasta dishes made fresh daily.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OEjNSzXP4-wyyDS9ASG2Zy96RWZgVbzSTQ&s',
        },
        {
            id: 2,
            name: 'Sushi Station',
            description: 'Authentic sushi with the freshest ingredients.',
            image: 'https://i.pinimg.com/originals/84/dd/b9/84ddb9a45fa7c8655db79970302235c7.jpg',
        },
        {
            id: 3,
            name: 'Burger Bistro',
            description: 'Juicy burgers cooked to perfection.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4SR0Xw3U2uqAZGdALq3zylCZwP835DdWtQ&s',
        },
        {
            id: 4,
            name: 'Pizza Place',
            description: 'The best pizzas in town.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1mE2slzB2-4nCyOGUZdIKKyTsExPXtaTJA&s',
        },
        {
            id: 5,
            name: 'Coffee Shop',
            description: 'A cozy place to enjoy your favorite brews.',
            image: 'https://media.gettyimages.com/id/1317789159/photo/interior-of-a-local-coffee-shop.jpg?s=612x612&w=gi&k=20&c=g231rbQ-qsdqIOt8HtSVDDN_ajP2HJlzElYr8PQs7gY=',
        },
    ]);

    const addRestaurant = (restaurant) => {
        setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);
    };

    const editRestaurant = (updatedRestaurant) => {
        setRestaurants((prevRestaurants) =>
            prevRestaurants.map((restaurant) =>
                restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
            )
        );
    };

    return (
        <RestaurantContext.Provider value={{ restaurants, addRestaurant, editRestaurant }}>
            {children}
        </RestaurantContext.Provider>
    );
};
