import React from 'react';
import './Cart.css'; // Optional: Include a CSS file for styling

const cartItems = [
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        price: 12.99
    },
    {
        id: 2,
        name: 'California Roll',
        price: 8.99
    },
    {
        id: 3,
        name: 'Cheeseburger',
        price: 10.49
    },
    {
        id: 4,
        name: 'Margherita Pizza',
        price: 11.99
    },
    {
        id: 5,
        name: 'Cappuccino',
        price: 3.99
    }
];

const Cart = () => {
    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            <div className='cart-list'>
                {cartItems.map((item) => (
                    <div key={item.id} className='cart-item'>
                        <h3 className='cart-item-name'>{item.name}</h3>
                        <p className='cart-item-price'>${item.price.toFixed(2)}</p>
                        <button className='remove-button'>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
