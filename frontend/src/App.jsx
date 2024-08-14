import { React } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Shop from './components/Shop';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Item from './components/Item'
import Signup from './components/Signup';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/item/:id' element={<Item />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}