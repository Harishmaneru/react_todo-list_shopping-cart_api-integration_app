import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation'; 
import ToDoList from './components/Todo-list';
import ShoppingCart from './components/ShoppingCart';

import WeatherDisplay from './components/WeatherDisplay';

import './index.css';
const App = () => {
  return (
    <BrowserRouter>
      <Navigation /> {/* Include the Navigation component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Todo-list" element={<ToDoList />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/WeatherDisplay" element={<WeatherDisplay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
