import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import SingleProduct from "./components/SingleProduct"
import ShoppingCart from "./components/ShoppingCart"
import HomeIcon from "./images/home.png"
import FavoritesIcon from "./images/favorites.png"
import CartIcon from "./images/cart-icon.png"

function App() {
  return (
    <div className="App">
      <h1 className="app-header">Shoplift</h1>
      <Router>
        <nav className="navbar">
            <p><Link className="navlink" to="/">
              <img src={HomeIcon} className="navicon"></img> 
            </Link></p>
            <p><Link className="navlink" to="/products">
              <img src={FavoritesIcon} className="navicon"></img> 
            </Link></p>
            <p><Link className="navlink" to="/shoppingcart">
              <img src={CartIcon} className="navicon"></img> 
            </Link></p>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/shoppingcart" component={ShoppingCart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
