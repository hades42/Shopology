import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import { Pagination } from "@mui/material";
import { getProducts } from "../../../../actions/productActions";
import { deleteProduct } from "../../../../actions/productActions";
import DropNotif from "../../../../components/Modal/Modal";
import { PRODUCT_DELETE_RESET } from "../../../../constants/productConstants";

const ProductListScreen = ({ history, match }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const productAll = useSelector((state) => state.productAll);
  const { loading, error, products, pageCount } = productAll;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  useEffect(() => {
    dispatch(getProducts("", "", "", "", "", page));
  }, [dispatch, page, history, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };
  const pageHandler = (e, value) => {
    setPage(value);
  };

  return (
    <Container className="mb-5">
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Link
            className="my-3 btn btn-primary"
            to="/admin/product/create"
            style={{ marginLeft: "auto" }}
          >
            <i className="fas fa-plus"></i> Create Product
          </Link>
        </Col>
      </Row>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {loadingDelete && <Loader />}
          {errorDelete && <Message>{errorDelete}</Message>}
          {successDelete && (
            <DropNotif
              heading="Delete Product"
              text="Delete product successfully"
              resetData={() => {
                dispatch(getProducts("", "", "", "", "", page));
                dispatch({ type: PRODUCT_DELETE_RESET });
              }}
            />
          )}
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>RATING</th>
                <th>IN STOCK</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>{product.rating}</td>
                  <td>{product.countInStock}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination
            count={pageCount}
            size="large"
            page={page}
            onChange={pageHandler}
          />
        </>
      )}
    </Container>
  );
};

export default ProductListScreen;
