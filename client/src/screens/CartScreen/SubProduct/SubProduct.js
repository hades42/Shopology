import { Row, Col, ListGroup, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../actions/cartAction";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const SubProduct = ({ item }) => {
  const dispatch = useDispatch();
  const [subQty, setSubQty] = useState(item.qty);

  useEffect(() => {
    dispatch(addToCart(item.product, Number(subQty)));
  }, [item.product, subQty, dispatch]);

  const changeQty = (e) => {
    if (e.target.value > item.countInStock) {
      setSubQty(item.countInStock);
    } else if (e.target.value < 1) {
      setSubQty(1);
    } else {
      setSubQty(e.target.value);
    }
  };
  return (
    <>
      <ListGroup.Item key={item.product}>
        <Row>
          <Col md={2}>
            <Image src={item.image} alt={item.name} fluid rounded />
          </Col>
          <Col md={3}>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
          </Col>
          <Col md={2}>${item.price}</Col>
          <Col md={2}>
            <Form.Control
              type="number"
              value={item.qty}
              onChange={changeQty}
            ></Form.Control>
          </Col>
          <Col md={2}>
            <Button
              type="button"
              variant="light"
              onClick={() => dispatch(removeFromCart(item.product))}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default SubProduct;
