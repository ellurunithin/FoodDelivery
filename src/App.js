
import './App.css';
import Header from './components/Header';
import SearchBar from './components/Search';
import Offers from './components/Offers';
import FoodItems from './components/FoodItems';
import Restaurants from './components/Restaurants';
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {
  return (
    <div><Header />
      <SearchBar />
      <Offers />
      <FoodItems />
      <Restaurants />
      <Cart />
      <Footer />
      </div>
  );
}

export default App;
