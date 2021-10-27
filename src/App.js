import React, { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Items from './pages/Items'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Items />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
