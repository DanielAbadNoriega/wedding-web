import { Redirect, Route, Switch } from "react-router";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/misc/navbar/Navbar";
//import ProductsListHooks from "./components/products/product-list/ProductsListHooks";
import ProductsList from "./components/products/product-list/ProductsList";


function App() {
	return <div className="App">
        <Navbar/>
        
        <div className="">
            <Switch>

                <Route exact path="/" component={Home}/>

                <Route exact path="/products" component={ProductsList} />

                <Route exact path="#">
                    Wishlist
                </Route>

                <Route exact path="/order">
                    Bag
                </Route>

                <Route exact path="/profile" component={Login} />

                <Redirect to="/" />
            </Switch>
        </div>
    </div>;
}

export default App;