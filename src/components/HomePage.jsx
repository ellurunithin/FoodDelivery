import React from 'react';
import './HomePage.css';

const restaurants = [
    {
        id: 1,
        name: 'Pasta Paradise',
        description: 'Delicious pasta dishes made fresh daily.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OEjNSzXP4-wyyDS9ASG2Zy96RWZgVbzSTQ&s'
    },
    {
        id: 2,
        name: 'Sushi Station',
        description: 'Authentic sushi with the freshest ingredients.',
        image: 'https://i.pinimg.com/originals/84/dd/b9/84ddb9a45fa7c8655db79970302235c7.jpg'
    },
    {
        id: 3,
        name: 'Burger Bistro',
        description: 'Juicy burgers cooked to perfection.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4SR0Xw3U2uqAZGdALq3zylCZwP835DdWtQ&s'
    },
    {
        id: 4,
        name: 'Pizza Place',
        description: 'The best pizzas in town.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1mE2slzB2-4nCyOGUZdIKKyTsExPXtaTJA&s'
    },
    {
        id: 5,
        name: 'Coffee Shop',
        description: 'A cozy place to enjoy your favorite brews.',
        image: 'https://media.gettyimages.com/id/1317789159/photo/interior-of-a-local-coffee-shop.jpg?s=612x612&w=gi&k=20&c=g231rbQ-qsdqIOt8HtSVDDN_ajP2HJlzElYr8PQs7gY='
    }
];

const HomePage = () => {
    return (
        <div className='home'>
          <div className='search-bar'>
            <input type='text' placeholder='Search restaurant or food' className="search-bar" />
            </div>
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
                        <button className="view-menu-button">View Menu</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
