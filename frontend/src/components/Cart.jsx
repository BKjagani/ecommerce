import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import "../css/Cart.css";
import { Link } from "react-router-dom";
import cartImage from "../img/cart.png";
import axios from "axios";
import Auth from "./Auth";
export const Cart = forwardRef((props, ref) => {
  <Auth />;
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/cart/showCart", {
            headers : {
                'x-access-token' : localStorage.getItem('token')
            }
        }
      );
      const cartItems = await response.data.cartList;
      console.log(cartItems);
      setProductDetails(cartItems);
      calculateTotalPayment(cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalPayment = (products) => {
    const total = products.reduce((sum, product) => {
      if (product && product.product.price) {
        return sum + product.product.price;
      }
      return sum;
    }, 0);
    setTotalPayment(total);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handlePayment = () => {
    alert("Payment process initiated!");
  };

  const deleteCartItem = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/cart/deleteItem/${productId}`
      );
      fetchCartItems();
    } catch (error) {
      console.log("Error deleting cart item:", error);
    }
  };

  // Expose a method to clear the cart
  useImperativeHandle(ref, () => ({
    clearCart() {
      setCartItems([]);
      setProductDetails([]);
      setTotalPayment(0);
    },
  }));

  return (
    <>
      <button
        className="btn btn-outline-light"
        type="button"
        onClick={openCart}
      >
        <i className="bi bi-cart3"></i> Cart
      </button>
      <div className={`overlay ${cartOpen ? "show" : ""}`} id="cartOverlay">
        <div className="cart-container">
          <a className="close-cart" onClick={closeCart}>
            <h2>
              <i className="bi bi-x-lg"></i>
            </h2>
          </a>
          <h2>My Cart</h2>
          {productDetails.length > 0 ? (
            <>
              {productDetails.map(
                (product, index) =>
                  product && (
                    <div className="cart-item" key={index}>
                      <img
                        src={`http://localhost:4000/${product.product.image}`}
                        alt={product.product.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-details">
                        <h3>{product.product.name}</h3>
                        <p>${product.product.price}</p>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteCartItem(product.product._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  )
              )}
              <div className="cart-total">
                <h3>Total Payment: ${totalPayment}</h3>
              </div>
              <button className="btn custom-btn hibtn" onClick={handlePayment}>
                Pay Now
              </button>
              <Link
                to="/product"
                className="btn custom-btn hibtn"
                onClick={closeCart}
              >
                Continue Shopping
              </Link>
            </>
          ) : (
            <>
              <img src={cartImage} height="200" width="300" alt="Cart" />
              <h3>You don't have any items in your cart</h3>
              <p>Your Pearls are just a click away</p>
              <Link to="/" className="btn custom-btn hibtn" onClick={closeCart}>
                Start Shopping
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
});
