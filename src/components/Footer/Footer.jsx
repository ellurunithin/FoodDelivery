import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/contact">Contact Us</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
            </div>
            <p className="footer-text">© 2024 Food Delivery App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
