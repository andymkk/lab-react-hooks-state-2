import React from 'react'
import ProductCard from './ProductCard'

const products = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Banana', price: '$0.75', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.50', category: 'Dairy', inStock: true }
]

const ProductList = ({ filter, addItemToCart }) => {
  let showingProducts = products
  
  if (filter !== 'all') {
    showingProducts = products.filter(p => p.category === filter)
  }

  return (
    <div style={{flex: 2}}>
      <h2>Available Products</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
        {showingProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          showingProducts.map(product => (
            <ProductCard key={product.id} product={product} addItemToCart={addItemToCart} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductList