import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. We collect personal information like name, address, and payment details solely for order processing and customer support.</p>
            <h3>Information Collection</h3>
            <p>We may collect the following information when you use our services:</p>
            <ul>
                <li>Name and Contact Details</li>
                <li>Delivery Address</li>
                <li>Payment Information</li>
            </ul>
            <h3>Use of Information</h3>
            <p>We use the information you provide to fulfill your orders and improve our services.</p>
            <h3>Data Protection</h3>
            <p>Your personal data is securely stored and never shared with third parties without your consent.</p>
        </div>
    );
};

export default PrivacyPolicy;
