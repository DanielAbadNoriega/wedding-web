import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Chart () {
    const { cart } = useContext(CartContext);

    return (
        <div className="inline my-2 my-lg-0">
              <button className="btn" id="cart">
                <i className="fa fa-shopping-cart fa-2x"></i>
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cart.products.length}
                </span>
              </button>
              <div className="container">
                <div className="shopping-cart">
                  <div className="shopping-cart-items">
                    {cart.products.map((product) => (
                      <div className="clearfix" id={product.id}>
                        <img src={product.images} alt={product.title} />
                        <span className="item-name me-2">{product.title}</span>
                        <span className="item-quantity me-2">
                          Units: {product.quantity}
                        </span>
                        <span className="item-price">{product.price}€</span>
                      </div>
                    ))}
                  </div>
                  <div className="shopping-cart-bottom">
                    <div className="shopping-cart-total">
                      <span className="lighter-text">Total: </span>
                      <span className="main-color-text">
                        {cart.finalPrice.toFixed(2)}
                      </span>
                      <NavLink exact to="" className="btn btn-info">
                        Checkout
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Chart;