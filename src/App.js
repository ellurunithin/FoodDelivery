import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import FoodItems from './components/FoodItems';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './components/CartContext'; // Import the CartProvider
import Contact from './components/Contact';
// import AddMenuItem from './components/AddMenuItem';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AddRestaurant from './components/AddRestaurant';
import EditRestaurant from './components/EditRestaurant';
import { RestaurantProvider } from './components/RestaurantContext';

function App() {
    return (
        <RestaurantProvider>
        <CartProvider>
        
                <div className="app-container">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/food-items/:restaurantId" element={<FoodItems />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/privacy" element={<PrivacyPolicy />} />
                            <Route path="/terms" element={<TermsOfService />} />
                            <Route path='/add-restaurant' element={<AddRestaurant />} />
                            <Route path='/edit-restaurant/:id' element={<EditRestaurant />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            
        </CartProvider>
        </RestaurantProvider>
    );
}

export default App;
