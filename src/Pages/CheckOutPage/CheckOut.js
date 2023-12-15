import "./CheckOut.css";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Modal, Button } from "react-bootstrap";

function CheckOut() {
  // product
  const { cartItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cartItem.reduce((acc, item) => {
      return acc + parseFloat(item.price) * item.quantity;
    }, 0);
    setTotal(newTotal);
  }, [cartItem]);
  const [cardNumber, setCardNumber] = useState("");
  const [isValidCardNumber, setIsValidCardNumber] = useState(true);
  const [expiry, setExpiry] = useState("");
  const [isValidExpiry, setIsValidExpiry] = useState(true);
  const [cvc, setCvc] = useState("");
  const [isValidCvc, setIsValidCvc] = useState(true);
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (e) => {
    let inputName = e.target.value;

    if (inputName.length > 50) {
      inputName = inputName.slice(0, 50);
    }

    const isValidFormat = /^[\p{L}\s]*$/u.test(inputName);

    setName(inputName);
    setIsNameValid(isValidFormat);
  };

  const handleCardNumberChange = (e) => {
    let inputCardNumber = e.target.value.replace(/\s/g, "");

    if (inputCardNumber.length > 16) {
      inputCardNumber = inputCardNumber.slice(0, 16);
    }

    const formattedCardNumber = inputCardNumber
      .replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1 ");

    const trimmedCardNumber = formattedCardNumber.trim();

    const isValidFormat = /^\d{4} \d{4} \d{4} \d{4}$/.test(trimmedCardNumber);

    setCardNumber(trimmedCardNumber);
    setIsValidCardNumber(isValidFormat);
  };

  const handleExpiryChange = (e) => {
    let inputExpiry = e.target.value.replace(/\s/g, "");

    if (inputExpiry.length > 5) {
      inputExpiry = inputExpiry.slice(0, 5);
    }

    const formattedExpiry = inputExpiry
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2");

    const isValidFormat = /^(0[1-9]|1[0-2])\/\d{2}$/.test(formattedExpiry);

    setExpiry(formattedExpiry);
    setIsValidExpiry(isValidFormat);
  };

  const handleCvcChange = (e) => {
    let inputCvc = e.target.value.replace(/\s/g, "");

    if (inputCvc.length > 3) {
      inputCvc = inputCvc.slice(0, 3);
    }

    const isValidFormat = /^\d{3}$/.test(inputCvc);

    setCvc(inputCvc);
    setIsValidCvc(isValidFormat);
  };

  const handleEmailChange = (e) => {
    let inputEmail = e.target.value;

    if (inputEmail.length > 50) {
      inputEmail = inputEmail.slice(0, 50);
    }
    const isValidFormat =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputEmail);

    setEmail(inputEmail);
    setIsEmailValid(isValidFormat);
  };

  const handleClickOrder = () => {
    setShowModal(true);
  };

  // paypal
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total.toFixed(2),
          },
        },
      ],
    });
  };

  const [showModal, setShowModal] = useState(false);

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      setShowModal(true);
    });
  };

  const handleModalOkClick = () => {
    setShowModal(false);
    window.location.href = "/";
  };

  return (
    <div className="checkout">
      <div className="container">
        <div className="d-flex mt-2">
          <form className="row g-3">
            <div className="title">
              <h2>Payment Infomation</h2>
            </div>
            <div className="col-12">
              <label for="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${isNameValid ? "" : "is-invalid"}`}
                id="inputName"
                placeholder=""
                value={name}
                onChange={handleNameChange}
              />
              {!isNameValid && (
                <div className="invalid-feedback">
                  Invalid name. Only letters and spaces are allowed.{" "}
                </div>
              )}
            </div>
            <div className="col-12">
              <label for="inputCardNumber" className="form-label">
                Card Number
              </label>
              <input
                type="text"
                className={`form-control ${
                  isValidCardNumber ? "" : "is-invalid"
                }`}
                id="inputCardNumber"
                placeholder="1234 1234 1234 1234"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              {!isValidCardNumber && (
                <div className="invalid-feedback">
                  Invalid card number format
                </div>
              )}
            </div>
            <div className="input-group">
              <input
                type="text"
                className={`form-control ${isValidExpiry ? "" : "is-invalid"}`}
                id="inputExpiry"
                placeholder="MM/YY"
                value={expiry}
                onChange={handleExpiryChange}
              />
              {!isValidExpiry && (
                <div className="invalid-feedback">
                  Invalid expiration date format
                </div>
              )}
              <input
                type="text"
                className={`form-control ${isValidCvc ? "" : "is-invalid"}`}
                id="inputCvc"
                placeholder="123"
                value={cvc}
                onChange={handleCvcChange}
              />
              {!isValidCvc && (
                <div className="invalid-feedback">Invalid CVC format</div>
              )}
            </div>
            <div className="col-md-12">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
                id="inputEmail4"
                value={email}
                onChange={handleEmailChange}
              />
              {!isEmailValid && (
                <div className="invalid-feedback">Invalid email address.</div>
              )}
            </div>
            <hr></hr>
            <div className="text-center">Or, pay with PayPal</div>
            {isPending ? (
              <p>LOADING...</p>
            ) : (
              <>
                <PayPalButtons
                  disable-funding="card"
                  style={{ layout: "horizontal", tagline: "false" }}
                  createOrder={(data, actions) => onCreateOrder(data, actions)}
                  onApprove={(data, actions) => onApproveOrder(data, actions)}
                />
                <Modal
                  show={showModal}
                  onHide={() => setShowModal(false)}
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Your payment has been successfully processed! Click OK to
                      return to the home page.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleModalOkClick}>
                      OK
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            )}
          </form>
          <div className="youroder col-5">
            <h3>Order Details</h3>
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
                    <div className="cartitem-quantity">{item.quantity}</div>
                    <td></td>
                  </tr>
                ))}
              </tbody>
              <div className="card-submit">
                {cartItem.length === 0 ? (
                  <div className="order-btn">
                    <div className="d-grid">
                      <strong className="fs-4">EMPTY</strong>
                    </div>
                  </div>
                ) : (
                  <div className="order-btn">
                    <div className="d-grid">
                      <h4 className="card-title">
                        <strong> Summary: </strong>
                        <strong>{total.toFixed(2)} $</strong>
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </table>
            <div className="col-12">
              <div className="agree">
                <p className="small">
                  By clicking the "Submit" button, you are agreeing to our terms
                  and conditions.
                </p>
              </div>
            </div>
            <button
              className="btn btn-primary col-12 disable"
              onClick={handleClickOrder}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
