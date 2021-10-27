import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import {
  getProductDetail,
  updateProduct,
} from "../../../../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../../../../constants/productConstants";
import DropNotif from "../../../../components/Modal/Modal";
import MarkdownEditor from "../../../../components/TextEditor/MarkdownEditor";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadingDesc, setUploadingDesc] = useState(false);

  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  const currentId = product._id;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (!product.name || currentId !== productId) {
      dispatch(getProductDetail(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [dispatch, productId, currentId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const uploadImageForDesc = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploadingDesc(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "/api/upload/descripion",
        formData,
        config
      );

      setDescription(description + "\n" + data);
      setUploadingDesc(false);
    } catch (error) {
      console.error(error);
      setUploadingDesc(false);
    }
  };

  const onChange = (value) => {
    setDescription(value);
  };

  return (
    <>
      <Container className="mb-5">
        <Link to="/userProfile" className="btn btn-primary my-3">
          Go Back
        </Link>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {successUpdate && (
          <DropNotif
            heading="Update Product"
            text="Update Product Successfully"
            resetData={() => {
              dispatch({ type: PRODUCT_UPDATE_RESET });
            }}
          ></DropNotif>
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Col xs={6} md={4}>
              <Image className="img-fluid" src={image} rounded />
            </Col>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the quantity"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="selection">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                placeholder="Enter the category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Books">Books</option>
                <option value="Games">Games</option>
                <option value="Electronics">Electronics</option>
                <option value="Men">Men Fashions</option>
                <option value="Women">Women Fashions</option>
                <option value="Baby">Baby</option>
                <option value="Automobile">Automobile</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mt-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.File
                className="mb-3"
                id="image-file"
                custom
                onChange={uploadImageForDesc}
              ></Form.File>
              {uploadingDesc && <Loader />}
              <MarkdownEditor text={description} onChange={onChange} />
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Update
            </Button>
            <Link
              to={`/product/${product._id}`}
              className="btn btn-primary mt-3 ms-3"
            >
              Go to product
            </Link>
          </Form>
        )}
      </Container>
    </>
  );
};

export default ProductEditScreen;
