import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>© Ty Store {year}</p>
    </footer>
  )
}
export default Footer