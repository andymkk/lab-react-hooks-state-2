import React from 'react'

const ProductCard = ({ product, addItemToCart }) => {
  const handleClick = () => {
    addItemToCart(product)
  }

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: 'white'
    }}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      
      <button 
        onClick={handleClick}
        disabled={!product.inStock}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: product.inStock ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: product.inStock ? 'pointer' : 'default'
        }}
        data-testid={'product-' + product.id}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard