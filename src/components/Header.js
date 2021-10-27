import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

const Header = () => {
  const { cartItems, favoriteItemsUnique } = useContext(Context)
  const favoriteClassName = favoriteItemsUnique.length > 0 ? 'fas fa-heart' : 'far fa-heart'
  const cartClassName = cartItems.length > 0 ? 'fas fa-cart-plus' : 'fas fa-shopping-cart'
  return (
    <header>
      <div className="title"><Link to="/">Ty Store</Link></div>
      <div><Link to="/favorites"><i className={favoriteClassName}></i><span>{favoriteItemsUnique.length}</span></Link>
        <Link to="/cart"><i className={cartClassName}></i><span>{cartItems.length}</span></Link></div>
    </header>
  )
}
export default Header