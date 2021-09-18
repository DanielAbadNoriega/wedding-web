import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import { AuthContextProvider } from "./contexts/AuthContext";
import { CartContextProvider } from "./contexts/CartContext";
import Home from "./components/misc/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/misc/navbar/Navbar";
import ProductsList from "./components/products/product-list/ProductsList";
import CreateUser from "./components/user/create-user/CreateUser";
import Profile from "./components/user/profile/Profile";
import Cart from "./components/misc/cart/Cart";
import ProductDetail from "./components/products/product-detail/ProductDetail";
import { ProductContextProvider } from "./contexts/ProductContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <div className="App">
            <Navbar />

            <div className="">
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/products" component={ProductsList} />

                <Route exact path="/detail" component={ProductDetail} />

                <Route exact path="/order" component={Cart} />

                <Route exact path="/login" component={Login} />

                <Route exact path="/user" component={CreateUser} />

                <Route exact path="/profile" component={Profile} />

                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
