import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="app-title">Food Delivery App</h1>
            <nav className="navigation">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#cart">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
