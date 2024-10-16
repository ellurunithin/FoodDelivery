import React, { createContext, useState } from 'react';

// Create a context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    // Function to add an item to the cart
    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    // Function to increase the quantity of an item
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Function to decrease the quantity of an item
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    // Function to remove an item from the cart
    const removeItem = (id) => {
        console.log(`Removing item with id: ${id}`);  // For debugging
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    // Function to clear the entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Function to get the total amount
    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cartItems, removeItem, addToCart, increaseQuantity, decreaseQuantity, clearCart, getTotalAmount }}>
            {children}
        </CartContext.Provider>
    );
};
