import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/actions/productActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <div className="cart-item-info">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
          <button className="btn-remove" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <div className="cart-footer">
        <span>Total: ${total.toFixed(2)}</span>
        <button className="btn-checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;