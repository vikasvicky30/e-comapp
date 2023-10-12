import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 20, img: 'https://picsum.photos/200/300?random=1' },
  { id: 2, name: 'Product 2', price: 30, img: 'https://picsum.photos/200/300?random=2' },
  { id: 3, name: 'Product 3', price: 25, img: 'https://picsum.photos/200/300?random=3' },
];


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">E-Commerce Store</div>
          <div className="cart-button">
            <button>Cart ({cart.length})</button>
          </div>
        </nav>
      </header>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Buy</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
        <h3>Total: ${calculateTotalPrice()}</h3>
        <button onClick={() => setCart([])}>Clear Cart</button>
      </div>
    </div>
  );
};

export default App;
