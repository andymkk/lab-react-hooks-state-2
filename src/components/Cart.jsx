import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div style={{flex: 1}}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul style={{listStyle: 'none', padding: 0}}>
          {cart.map(item => (
            <li key={item.id} style={{padding: '10px', borderBottom: '1px solid #eee'}}>
              {item.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart