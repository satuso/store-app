import React, { useContext, useState } from 'react'
import { Context } from '../Context'

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useContext(Context)
  const [counter, setCounter] = useState(1)

  const minus = () => {
    if (counter > 1){
      setCounter(counter - 1)
      removeFromCart(item)
    } else {
      removeFromCart(item.id)
    }
  }
  const plus = () => {
    setCounter(counter + 1)
    addToCart(item)
  }
  const itemPrice = item.price * counter
  return (
    <div className="cart-item">
      <img src={item.url} alt="cart-item" />
      <h2>{item.name} <span>${itemPrice.toFixed(2)} </span></h2>
      <h2 className="cart-item-count"><span onClick={minus} title="remove one item" aria-label="remove one item">-</span> {counter} <span onClick={plus} title="add one item" aria-label="add one item">+</span></h2>
      <div className="cart-item-remove">
        <p className="remove"
          onClick={() => removeFromCart(item.id)}
          title="remove item"
          aria-label="remove item"
        ><i className="fas fa-trash-alt"></i></p>
      </div>
    </div>
  )
}

export default CartItem