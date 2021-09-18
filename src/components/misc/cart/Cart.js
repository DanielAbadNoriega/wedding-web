import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="Cart inline my-2 my-lg-0">
      <button
        type="button"
        className="btn position-relative fa fa-cart-arrow-down"
      >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cart.products.length}
          <span className="visually-hidden">Cart Products</span>
        </span>
      </button>

      {cart.products.map((product, i) => (
        <div className="ProductItem card mt-2" key={i}>
          <img
            src={product.images}
            alt={product.title}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: {product.price}€</p>
            <p className="card-text">Units: {product.quantity}</p>
          </div>
        </div>
      ))}
      <div className="d-grid gap-2 d-md-block col-5 mt-2">
        <button type="button" className="btn fa fa-money">
          {" "}
          Final price: {cart.finalPrice.toFixed(2)}€
        </button>
        <NavLink exact to="" className="btn btn-success">
          Checkout
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
