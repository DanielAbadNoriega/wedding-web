import './App.css'
import { Redirect, Route, Switch } from "react-router";
import Home from "./components/misc/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/misc/navbar/Navbar";
import ProductsList from "./components/products/product-list/ProductsList";
import CreateUser from "./components/user/create-user/CreateUser"
import Profile from './components/user/profile/Profile';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
	return (
        <AuthContextProvider>
            <div className="App">
                <Navbar/>
                
                <div className="">
                    <Switch>

                        <Route exact path="/" component={Home}/>

                        <Route exact path="/products" component={ProductsList}/>

                        <Route exact path="#">
                            Wishlist
                        </Route>

                        <Route exact path="/order">
                            Bag
                        </Route>

                        <Route exact path="/login" component={Login}/>

                        <Route exact path="/user" component={CreateUser}/>

                        <Route exact path="/profile" component={Profile}/>

                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </AuthContextProvider>
    );
}

export default App;