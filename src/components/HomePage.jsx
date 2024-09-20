import Header from './Header';
import HeroSection from './HeroSection';
import SearchBar from './SearchBar';
import Offers from './Offers';
import FoodItems from './FoodItems';
import Restaurants from './Restaurants';
import Cart from './Cart';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SearchBar />
      <Offers />
      <FoodItems />
      <Restaurants />
      <Cart />
      <Footer />
    </div>
  );
}

export default HomePage;
