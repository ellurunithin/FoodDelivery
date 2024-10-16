import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
    return (
        <div className="terms-of-service">
            <h2>Terms of Service</h2>
            <p>Welcome to the Food Delivery App. By using our services, you agree to the following terms:</p>
            <h3>1. General Terms</h3>
            <p>By accessing our app, you agree to comply with our policies and procedures.</p>
            <h3>2. Orders and Payments</h3>
            <p>All orders must be paid in full before delivery. We accept various payment methods, and refunds are subject to our refund policy.</p>
            <h3>3. Delivery</h3>
            <p>Delivery times may vary depending on location. We are not responsible for delays caused by external factors.</p>
            <h3>4. Changes to Terms</h3>
            <p>We reserve the right to update these terms at any time. Continued use of the app signifies acceptance of the revised terms.</p>
        </div>
    );
};

export default TermsOfService;
