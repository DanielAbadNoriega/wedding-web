import { Route, Switch } from "react-router";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products/product-list/ProductsList";


function App() {
	return <div className="App">
        <Navbar />

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

                <Route exact path="/profile">
                    Profile
                </Route>

            </Switch>
        </div>
    </div>;
}

export default App;