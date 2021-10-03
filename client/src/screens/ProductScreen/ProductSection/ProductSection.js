import testImge from "../../HomeScreen/images/xhero-slide1.png.pagespeed.ic.KZViXlyXiG.webp";
import classes from "./ProductSection.module.css";
const ProductSection = () => {
  return (
    <div className={classes.container}>
      <img className={classes.productImage} src={testImge} alt="Product" />
      <div className={classes.content}>
        <h3 className={classes.productName}>Product Name</h3>
        <h2 className={classes.productPrice}>$200</h2>
        <ul className={classes.list}>
          <li>
            <a class="active" href="/">
              <span>Category</span> : Household
            </a>
          </li>
          <li>
            <a class="active" href="/">
              <span>Availibility</span> : In Stock
            </a>
          </li>
        </ul>
        <p className={classes.productDesc}>
          Mill Oil is an innovative oil filled radiator with the most modern
          technology. If you are looking for something that can make your
          interior look awesome, and at the same time give you the pleasant warm
          feeling during the winter.
        </p>
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
