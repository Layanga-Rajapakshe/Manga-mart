import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Home_page/homepage';
import Footer from './Landing_page/footer';
import HeroSection from './Landing_page/hero';
import Aboutpage from './About_page/aboutpage';
import Signuppage from './Login_page/signuppage';
import Loginpage from './Login_page/loginpage';
import Product from './Product_page/product';
import { Toaster } from 'react-hot-toast';
import Settings from './Profile/settings';
import Favourites from './Profile/favourites';
import Cart from './Cart/cart';
import PrivateRoute from './Components/PrivateRoute';
import Shipping from './Orders/shipping';
import PlaceOrder from './Orders/placeorder';
import Order from './Orders/order';
import Hero from './Video_hero_page/hero';
import Navbar from './Navbar/navbar';
import Profile from './Profile/profile';
import Orders from './Profile/profile_orders';
import Genrepage from './Genres/genrepage';
import Search from './Search_page.jsx/search';
import Errorpage from './404 page/errorpage';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/test" element={<HeroSection />} />
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/genre/:name/:genre" element={<Genrepage />} />
          <Route path="/search/:query" element={<Search />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<Errorpage />} />

          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
      <Footer />
    </div>
  );
};

export default App;
