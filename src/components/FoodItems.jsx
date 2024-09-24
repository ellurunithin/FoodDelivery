import React from 'react';
import './FoodItems.css'; // Optional: Include a CSS file for styling

const FoodItems = [
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        price: 12.99,
        image: 'https://media.istockphoto.com/id/1387498803/photo/carbonara-paste-on-a-beige-background.jpg?s=612x612&w=0&k=20&c=18D6kgXW4E50PIf26CgZgmtiKW9WbK77PY6W3POeAhs='
    },
    {
        id: 2,
        name: 'California Roll',
        price: 8.99,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Cheeseburger',
        price: 10.49,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 4,
        name: 'Margherita Pizza',
        price: 11.99,
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 5,
        name: 'Cappuccino',
        price: 3.99,
        image: 'https://via.placeholder.com/150'
    }
];

const FoodItem = () => {
    return (
        <div className='menu'>
            <h2>Menu</h2>
            <div className='menu-list'>
                {FoodItems.map((item) => (
                    <div key={item.id} className='menu-item'>
                        <img src={item.image} alt={item.name} className='menu-image' />
                        <h3 className='menu-item-name'>{item.name}</h3>
                        <p className='menu-item-price'>${item.price.toFixed(2)}</p>
                        <button className='add-to-cart-button'>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodItem;