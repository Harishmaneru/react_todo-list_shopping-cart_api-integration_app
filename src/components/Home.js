import React from 'react';

const Home = () => {
  return (
    <div>
      <div id='home-container'>
      <h1>Assignment: React Application Development</h1>
      <p>This is a simple to-do list and shopping cart application.</p>
      </div>
      <div className="button-container">
        <a href="/Todo-list" className="home-button">To-Do List</a>
        <a href="/ShoppingCart" className="home-button">Shopping Cart</a>
        <a href="/WeatherDisplay" className="home-button">API Integration</a>
      </div>
    </div>
  );
};

export default Home;
