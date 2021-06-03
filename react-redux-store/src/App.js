import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"

function App() {
  return (
    <div className="App">
      <h1>React Redux Store</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
