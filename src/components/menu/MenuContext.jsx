// MenuContext.js
import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuItems, setMenuItems] = useState([]);

    const addMenuItem = (menuItem) => {
        setMenuItems((prev) => [...prev, menuItem]); // Add the new menu item to the state
    };

    return (
        <MenuContext.Provider value={{ menuItems, addMenuItem }}>
            {children}
        </MenuContext.Provider>
    );
};
