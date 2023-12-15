import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import ModalC from "./modal";

const Cart = () => {
  const { cartItem, handleRemoveFromCart, handleDecrease, handleIncrease } =
    useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cartItem.reduce((acc, item) => {
      console.log("price", item.price);
      console.log("type of", typeof item.price);
      console.log("quantity", item.quantity);
      return acc + parseFloat(item.price) * item.quantity;
    }, 0);
    console.log("new total", newTotal);
    setTotal(newTotal);
  }, [cartItem]);
  return (
    <div className="Cart">
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title">Cart</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{(item.price * item.quantity).toFixed(3)}</td>
                    <div className="cartitem-quantity">
                      <span className="deandinQuantity">
                        <button
                          className="btn btn-sm "
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                      </span>
                      {item.quantity}
                      <span className="deandinQuantity">
                        <button
                          className="btn btn-sm "
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <td></td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="card-submit">
              {cartItem.length === 0 ? (
                <div className="order-btn">
                  <div className="d-grid">
                    <button type="button" className="btn btn-info" disabled>
                      Your cart is empty
                    </button>
                  </div>
                </div>
              ) : (
                <div className="order-btn">
                  <div className="d-grid">
                    <h4 className="card-title">
                      <strong> Summary: </strong>
                      <strong>{total.toFixed(3)} $</strong>
                    </h4>
                    <ModalC />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
