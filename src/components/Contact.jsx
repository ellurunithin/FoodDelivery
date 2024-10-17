import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <ul>
                <li>Email: support@fooddeliveryapp.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Food Street, City, Country</li>
            </ul>
            <p>Our team will get back to you as soon as possible!</p>
        </div>
    );
};

export default Contact;
