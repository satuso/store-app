import React, { useContext } from 'react'
import { Context } from '../Context'

const Item = ({ id, item, name, price, url, bday, family, animal, poem }) => {
  const {
    addFavorite,
    removeFavorite,
    favoriteItemsUnique,
    addToCart,
    cartItems,
    removeFromCart
  } = useContext(Context)

  const heartIcon = () => {
    const alreadyFavorited = favoriteItemsUnique.some(item => item.id === id)
    if (alreadyFavorited) {
      return <i className="fas fa-heart" onClick={() => removeFavorite(id)} title="remove from favorites" aria-label="remove from favorites"></i>
    } else {
      return <i className="far fa-heart" onClick={() => addFavorite(item)} title="add to favorites" aria-label="add to favorites"></i>
    }
  }

  const cartIcon = () => {
    const alreadyInCart = cartItems.some(item => item.id === id)
    if (alreadyInCart) {
      return <i className="fas fa-cart-plus" onClick={() => removeFromCart(id)} title="remove from cart" aria-label="remove from cart"></i>
    } else {
      return <i className="fas fa-shopping-cart" onClick={() => addToCart(item)} title="add to cart" aria-label="add to cart"></i>
    }
  }

  return (
    <div className="item">
      <img src={url} alt={name} className="item-img"/>
      <div className="item-desc">
        <h1>{name} <span>${price}</span></h1>
        <p>Birthday: {bday}</p>
        <p>Animal: {animal}</p>
        <p>Family: {family}</p>
        <p className="poem">{poem}</p>
      </div>
      <div className="item-icons">
        <div className="icons">{heartIcon()}</div>
        <div className="icons">{cartIcon()}</div>
      </div>
    </div>
  )
}

export default Item