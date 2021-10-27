import React, { useEffect, useState } from 'react'
import Data from './Data'

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isActivePrice, setActivePrice] = useState(false)
  const [isActiveName, setActiveName] = useState(false)

  const favoriteItemsUnique = [...new Set(favoriteItems)]
  useEffect(() => {
    setAllItems(Data)
  },[])

  const addFavorite = (newItem) => {
    setFavoriteItems(prevItems => [...prevItems, newItem])
  }

  const removeFavorite = (id) => {
    setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const addToCart = (newItem) => {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const emptyCart = () => {
    setCartItems([])
  }

  const clearFavorites =() => {
    setFavoriteItems([])
  }

  return (
    <Context.Provider value={{
      favoriteItemsUnique,
      addFavorite,
      removeFavorite,
      allItems,
      setAllItems,
      cartItems,
      addToCart,
      removeFromCart,
      emptyCart,
      isActivePrice,
      setActivePrice,
      isActiveName,
      setActiveName,
      clearFavorites
    }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }