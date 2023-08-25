import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setCartItems([...cartItems, { name: newItem, price: Math.random() * 100 }]);
      setNewItem('');
    }
  };

  const handleRemoveItem = index => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const totalItems = cartItems.length;
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div id="cart-container">
  <h2 id="cart-heading">Shopping Cart</h2>
  <input
    type="text"
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
    placeholder="Enter item name"
    id="item-input"
  />
  <button id="add-item-button" onClick={handleAddItem}>Add Item</button>
  <ul id="item-list">
    {cartItems.map((item, index) => (
      <li key={index}>
        <span>{item.name} - ₹{item.price.toFixed(2)}</span>
        <button onClick={() => handleRemoveItem(index)} className="remove-button">Remove</button>
      </li>
    ))}
  </ul>
  <p id="total-items">Total items: {totalItems}</p>
  <p id="subtotal">Subtotal: ₹{subtotal.toFixed(2)}</p>
</div>

  );
};

export default ShoppingCart;
