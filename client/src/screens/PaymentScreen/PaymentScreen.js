import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../components/CheckoutStep/CheckoutStep";
import { savePaymentMethod } from "../../actions/cartAction";
import classes from "../Shipping/ShippingScreen.module.css";

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { shippingAddress } = userInfo;

  if (
    !shippingAddress.fullname ||
    !shippingAddress.phone ||
    !shippingAddress.city ||
    !shippingAddress.postalCode ||
    !shippingAddress.address ||
    !shippingAddress.state
  ) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PalPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 />
      <div className={classes.wrapper}>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button type="submit" variant="primary" className="my-3">
            Continue
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default PaymentScreen;
