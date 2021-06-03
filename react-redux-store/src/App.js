import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import IndividualProduct from "./pages/IndividualProduct"

function App() {
  return (
    <div className="App">
      <h1>React Redux Store</h1>
      <Router>
        <nav>
            <p className="nav-link"><Link to="/">Home</Link></p>
            <p className="nav-link"><Link to="/products">Products</Link></p>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/products/id" component={IndividualProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
