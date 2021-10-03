import { useState } from "react";
import Rating from "../../../components/Rating/Rating";
import Review from "../../../components/Review/Review";
import classes from "./ProductReview.module.css";
import { Form } from "react-bootstrap";
const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submitReviewHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <div className={classes.ratingWrapper}>
          <div className={classes.ratingCard}>
            <h3>Overall</h3>
            <h2>4.0</h2>
            <h4>(3 Reviews)</h4>
          </div>
          <div className={classes.ratingStart}>
            <h4>Based on 3 Reviews </h4>
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
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
          </div>
        </div>
      </div>
      <div className={classes.rightSide}>
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
      </div>
    </div>
  );
};

export default ProductReview;
