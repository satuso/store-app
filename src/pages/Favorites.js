import React, { useContext } from 'react'
import { Context } from '../Context'
import Item from '../components/Item'

const Favorites = () => {
  const { favoriteItemsUnique, clearFavorites } = useContext(Context)
  const favorites = favoriteItemsUnique.map(item => (
    <Item
      item={item}
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      poem={item.poem}
      url={item.url}
      bday={item.bday}
      animal={item.animal}
      family={item.family} />
  ))
  return (
    <main>
      <h1>Favorites</h1>
      <div className="favorites-container">
        {favorites}
      </div>
      {favorites.length > 0 &&
          <p className="remove"
            onClick={clearFavorites}
            title="remove all favorites"
            aria-label="remove all favorites"
          >
            <i className="fas fa-trash-alt"></i>
          </p>
      }
    </main>
  )
}

export default Favorites