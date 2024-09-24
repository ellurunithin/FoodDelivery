import React from 'react';

function Checkout() {
    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form className="checkout-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="payment-method">Payment Method</label>
                    <select id="payment-method" required>
                        <option value="">Select a payment method</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="cash">Cash on Delivery</option>
                    </select>
                </div>
                <button type="submit" className="place-order-button">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
