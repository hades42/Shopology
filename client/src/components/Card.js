import classes from "./Card.module.css";

const Card = ({ showcase }) => {
  return (
    <div className={classes.card}>
      <img src={showcase.image} alt="Test"></img>
      <a className={classes.slideOver} href="/shop">
        <h3>{showcase.text}</h3>
        <p>{showcase.category}</p>
      </a>
    </div>
  );
};

export default Card;
