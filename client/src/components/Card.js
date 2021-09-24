import classes from "./Card.module.css";
import testImg from "../screens/HomeScreen/images/xhero-slide1.png.pagespeed.ic.KZViXlyXiG.webp";

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={testImg} alt="Test"></img>
      <a className={classes.slideOver} href="/">
        <h3>Something Something</h3>
        <p>Accessories Items</p>
      </a>
    </div>
  );
};

export default Card;
