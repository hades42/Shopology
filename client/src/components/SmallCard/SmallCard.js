import classes from "./SmallCard.module.css";
import { Link } from "react-router-dom";
const SmallCard = ({ product }) => {
  return (
    <div className={classes.container}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="product" />
      </Link>
      <div className={classes.content}>
        <p className={classes.category}>{product.category}</p>
        <a href="/">{product.name}</a>
        <p className={classes.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default SmallCard;
