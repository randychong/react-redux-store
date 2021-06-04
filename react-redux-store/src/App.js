import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import SingleProduct from "./components/SingleProduct"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  return (
    <div className="App">
      <h1>React Redux Store</h1>
      <Router>
        <nav className="navbar">
            <p className="nav-link"><Link to="/">Home</Link></p>
            <p className="nav-link"><Link to="/products">Products</Link></p>
            <p className="nav-link"><Link to="/shoppingcart">Shopping Cart</Link></p>
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
