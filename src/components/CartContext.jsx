import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create a custom hook to use the CartContext
const useCart = () => {
    return useContext(CartContext);
};

// Create a provider component
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    };

    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const increaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            getTotalAmount, // Added getTotalAmount here
        }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider, useCart };
