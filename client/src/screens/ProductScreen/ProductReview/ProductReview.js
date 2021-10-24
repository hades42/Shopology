import { useState, useEffect } from "react";
import Rating from "../../../components/Rating/Rating";
import Review from "../../../components/Review/Review";
import classes from "./ProductReview.module.css";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/Message";
import { Link } from "react-router-dom";
import {
  createProductReview,
  getProductDetail,
} from "../../../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../constants/productConstants";
const ProductReview = ({ productId }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetail = useSelector((state) => state.productDetail);
  const { product } = productDetail;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successReview, error: errorReview } = productReviewCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    if (successReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
      dispatch(getProductDetail(productId));
    }
  }, [dispatch, successReview, productId]);

  const submitReviewHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(productId, { rating, comment }));
  };
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <div className={classes.ratingWrapper}>
          <div className={classes.ratingCard}>
            <h3>Overall</h3>
            <h2>{product.rating}</h2>
            <h4>({product.numReviews} Reviews)</h4>
          </div>
          <div className={classes.ratingStart}>
            <h4>Based on {product.numReviews} Reviews </h4>
            <ul className={classes.list}>
              <li>
                <div className={classes.startTitle}>5 Star</div>
                <Rating value={5}></Rating>
                <div className={classes.startPercent}>20%</div>
              </li>
              <li>
                <div className={classes.startTitle}>4 Star</div>
                <Rating value={4}></Rating>
                <div className={classes.startPercent}>20%</div>
              </li>
              <li>
                <div className={classes.startTitle}>3 Star</div>
                <Rating value={3}></Rating>
                <div className={classes.startPercent}>20%</div>
              </li>
              <li>
                <div className={classes.startTitle}>2 Star</div>
                <Rating value={2}></Rating>
                <div className={classes.startPercent}>20%</div>
              </li>
              <li>
                <div className={classes.startTitle}>1 Star</div>
                <Rating value={1}></Rating>
                <div className={classes.startPercent}>20%</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.reviewSection}>
          <h2>Reviews</h2>
          <div>
            {product.reviews.length === 0 ? (
              <Message>No Review</Message>
            ) : (
              product.reviews.map((review) => (
                <Review
                  key={review._id}
                  name={review.name}
                  createdAt={review.createdAt}
                  comment={review.comment}
                  rating={review.rating}
                ></Review>
              ))
            )}
          </div>
        </div>
      </div>
      <div className={classes.rightSide}>
        {errorReview && <Message variant="danger">{errorReview}</Message>}
        {userInfo ? (
          <Form onSubmit={submitReviewHandler}>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                row="3"
                className={classes.text}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <button className={classes.submitReview}>Submit</button>
          </Form>
        ) : (
          <Message>
            Please <Link to="/login">log in</Link> to write a review
          </Message>
        )}
      </div>
    </div>
  );
};

export default ProductReview;
