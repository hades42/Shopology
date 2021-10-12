import classes from "./ProductSection.module.css";
const ProductSection = ({ product }) => {
  return (
    <div className={classes.container}>
      <img className={classes.productImage} src={product.image} alt="Product" />
      <div className={classes.content}>
        <h3 className={classes.productName}>{product.name}</h3>
        <h2 className={classes.productPrice}>${product.price}</h2>
        <ul className={classes.list}>
          <li>
            <a class="active" href="/">
              <span>Category</span> : {product.category}
            </a>
          </li>
          <li>
            <a class="active" href="/">
              <span>Availibility</span> :{" "}
              {product.countInStock > 0 ? "In Stock" : "Not In Stock"}
            </a>
          </li>
        </ul>
        <p className={classes.productDesc}>{product.description}</p>
        <div className={classes.productCount}>
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" name="quantity" value="1"></input>
        </div>
        <button className={classes.addCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductSection;
