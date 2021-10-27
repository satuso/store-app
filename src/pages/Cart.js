import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

const Cart = () => {
  const [buttonText, setButtonText] = useState('Place Order')
  const { cartItems, emptyCart } = useContext(Context)
  const [msg, setMsg] = useState('')
  const cartItemElements = [...new Set(cartItems)].map(item => (
    <CartItem key={item.id} item={item} price={item.price} url={item.url} />
  ))
  const priceList = cartItems.map(item => parseFloat(item.price).toFixed(2))
  let totalCost = 0
  const reducer = (previousValue, currentValue) => Number(previousValue)+ Number(currentValue)
  if (priceList.length > 0){
    totalCost = priceList.reduce(reducer)
  }
  const totalCostDisplay = totalCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  function placeOrder() {
    setButtonText('Ordering...')
    setTimeout(() => {
      setMsg('Order placed! Thank you for your order.')
      setButtonText('Place Order')
      emptyCart()
    }, 1500)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      <p><b>{msg}</b></p>
      <div className="cart-item-container">
        {cartItemElements}
      </div>
      {
        cartItems.length > 0 ?
          <div className="order-button">
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <button
              onClick={emptyCart}
              title="empty cart"
              aria-label="empty cart"
            >Empty Cart</button>
            <button
              onClick={placeOrder}
              title="place order"
              aria-label="place order"
            >{buttonText}</button>
          </div> :
          <p>You have no items in your cart.</p>
      }
    </main>
  )
}

export default Cart