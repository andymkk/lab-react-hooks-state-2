import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('all')

  const addItemToCart = (item) => {
    if (!cart.find(cartItem => cartItem.id === item.id)) {
      setCart([...cart, item])
    }
  }

  const switchTheme = () => {
    setIsDark(!isDark)
  }

  const changeFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className={`container ${isDark ? 'dark' : ''}`}>
      <div className="top-bar">
        <h1>Shopping App</h1>
        <DarkModeToggle isDark={isDark} switchTheme={switchTheme} />
      </div>
      
      <div className="controls">
        <label>Filter by Category: </label>
        <select value={filter} onChange={changeFilter}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <div className="main-area">
        <ProductList filter={filter} addItemToCart={addItemToCart} />
        <Cart cart={cart} />
      </div>
    </div>
  )
}

export default App