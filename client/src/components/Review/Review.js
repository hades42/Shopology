import classes from "./Review.module.css";
import Rating from "../Rating/Rating";
const Review = () => {
  return (
    <div className={classes.container}>
      <strong>Van Nguyen Nguyen</strong>
      <Rating value={4} />
      <p>3-10-2021</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo
      </p>
    </div>
  );
};

export default Review;
