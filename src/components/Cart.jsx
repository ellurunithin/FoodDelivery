import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Cart.css';

const Cart = () => {
    // const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem, getTotalAmount, clearCart } = useContext(CartContext);

    const navigate = useNavigate(); // Initialize navigate for routing

    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price.toFixed(2)}
                                <div className="quantity-controls">
                                    {/* Conditionally render Remove button or - button */}
                                    {item.quantity === 1 ? (
                                        <button onClick={() => removeItem(item.id)} className="remove-item-button">
                                            Remove
                                        </button>
                                    ) : (
                                        <button onClick={() => decreaseQuantity(item.id)} className="decrease-quantity-button">
                                            -
                                        </button>
                                    )}
                                    <p>{item.quantity}</p>
                                    <button onClick={() => increaseQuantity(item.id)} className="increase-quantity-button">
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: ${getTotalAmount()}</h3>
                    <div className="clear-cart-container">
                        <button className="clear-cart-button" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                    {/* Checkout button */}
                    <div className="checkout-container">
                        <button
                            className="checkout-button"
                            onClick={() => navigate('/checkout')} // Navigate to Checkout
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
