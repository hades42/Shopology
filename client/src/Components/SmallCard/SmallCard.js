import classes from "./SmallCard.module.css";
import testing from "../../screens/HomeScreen/images/xhero-slide1.png.pagespeed.ic.KZViXlyXiG.webp";
const SmallCard = () => {
  return (
    <div className={classes.container}>
      <a href="/">
        <img src={testing} alt="product" />
      </a>
      <div className={classes.content}>
        <p className={classes.category}>Accessories</p>
        <a href="/">Shoes</a>
        <p className={classes.price}>$150</p>
      </div>
    </div>
  );
};

export default SmallCard;
