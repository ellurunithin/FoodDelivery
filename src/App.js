import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import FoodItems from './components/FoodItems';
import Cart from './components/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './components/Cart/CartContext'; // Import the CartProvider
import Contact from './components/Footer/Contact';
// import AddMenuItem from './components/AddMenuItem';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import TermsOfService from './components/Footer/TermsOfService';
import AddRestaurant from './components/AddRestaurant';
import EditRestaurant from './components/EditRestaurant';
import { RestaurantProvider } from './components/HomePage/RestaurantContext';

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
                            {/* <Route path="/add-menu-item" element={<AddMenuItem />} />
                            <Route path="/edit-menu-item/:id" element={<EditMenuItem />} /> */}
                            {/* <Route path="/add-food-item" element={<FoodItemForm />} />
                            <Route path="/edit-food-item/:id" element={<FoodItemForm />} /> For editing */}
                        </Routes>
                    </main>
                    <Footer />
                </div>
            
        </CartProvider>
        </RestaurantProvider>
    );
}

export default App;
