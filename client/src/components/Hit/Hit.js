import classes from "../SmallCard/SmallCard.module.css";
import { Link } from "react-router-dom";
import { Highlight } from "react-instantsearch-dom";
const Hit = ({ hit }) => {
  return (
    <div className={classes.container}>
      <Link to={`/product/${hit.id}`}>
        <img src={hit.image} alt="product" />
      </Link>
      <div className={classes.content}>
        <p className={classes.category}>
          <Highlight attribute="category" hit={hit} tagName="mark" />
        </p>
        <p className={classes.category}>
          <Highlight attribute="brand" hit={hit} tagName="mark" />
        </p>
        <Link to={`/product/${hit.id}`}>
          <Highlight attribute="name" hit={hit} tagName="mark" />
        </Link>
        <p className={classes.price}>
          $<Highlight attribute="price" hit={hit} tagName="mark" />
        </p>
      </div>
    </div>
  );
};
export default Hit;
