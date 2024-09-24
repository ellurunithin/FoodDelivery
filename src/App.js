import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import FoodItem from './components/FoodItems';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <HomePage />
                <FoodItem/> 
                <Cart/>
                <Checkout/>
            </main>
            <Footer />
        </div>
    );
}

export default App;
