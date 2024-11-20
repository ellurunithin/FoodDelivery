import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="app-title">Food Delivery App</h1>
            <nav className="navigation">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li> {/* Use Link instead of <a> */}
                    <li><Link to="/cart">Cart</Link></li> {/* Use Link instead of <a> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
