import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Product+1' }, // Example image
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Product+2' }, // Example image
  { id: 3, name: 'Product 3', price: 30, image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Product+3' }, // Example image
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;