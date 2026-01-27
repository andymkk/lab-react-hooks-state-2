import React from 'react'

const DarkModeToggle = ({ isDark, switchTheme }) => {
  return (
    <button onClick={switchTheme}>
      {isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle