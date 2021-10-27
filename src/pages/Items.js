import React, { useState, useContext } from 'react'
import Item from '../components/Item'
import { Context } from '../Context'
import Data from '../Data'

const Items = () => {
  const [toggle, setToggle] = useState(false)
  const { allItems, setAllItems, isActivePrice, isActiveName, setActivePrice, setActiveName } = useContext(Context)
  const sortedItems = [...allItems]

  const sortByPrice = () => {
    setToggle(!toggle)
    setActivePrice(true)
    setActiveName(false)
    if (toggle){
      sortedItems.sort((a, b) => a.price-b.price)
      return setAllItems(sortedItems)
    } else {
      sortedItems.sort((a, b) => b.price-a.price)
      return setAllItems(sortedItems)
    }
  }
  const sortByName = () => {
    setToggle(!toggle)
    setActiveName(true)
    setActivePrice(false)
    if (toggle){
      sortedItems.sort((a, b) => a.name.localeCompare(b.name))
      return setAllItems(sortedItems)
    } else {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name))
      return setAllItems(sortedItems)
    }
  }
  const unsort = () => {
    const sortedItems = Data
    setAllItems(sortedItems)
    setActiveName(false)
    setActivePrice(false)
  }

  const items = allItems.map(item =>
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
      family={item.family}
      count={item.count}
    />)

  return (
    <main>
      <h1>Items</h1>
      <h3>Sort by: <span className={isActivePrice ? 'active': 'sort'} onClick={sortByPrice}>Price</span> <span className={isActiveName ? 'active': 'sort'} onClick={sortByName}>Name</span> {isActiveName || isActivePrice ? <span className="sort" onClick={unsort} title="unsort items" aria-label="unsort items"><i className="fas fa-minus-circle"></i></span> : ''}</h3>
      <div className="item-container">
        {items}
      </div>
    </main>
  )
}
export default Items