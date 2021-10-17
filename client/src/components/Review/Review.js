import classes from "./Review.module.css";
import Rating from "../Rating/Rating";
const Review = ({ name, createdAt, comment, rating }) => {
  return (
    <div className={classes.container}>
      <strong>{name}</strong>
      <Rating value={rating} />
      <p>{createdAt.substring(0, 10)}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Review;
