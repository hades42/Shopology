import { useState } from "react";
import classes from "./ProductSection.module.css";
import { addToCart } from "../../../actions/cartAction";
import { useDispatch } from "react-redux";
import CartModal from "../../../components/CartModal/CartModal";
const ProductSection = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);

  if (qty > product.countInStock) {
    setQty(product.countInStock);
  }
  const cartHandler = () => {
    dispatch(addToCart(product._id, qty));
    setShowModal(true);
  };
  return (
    <div className={classes.container}>
      <CartModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      ></CartModal>
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
        <div className={classes.productCount}>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          ></input>
        </div>
        <button
          disabled={product.countInStock === 0}
          onClick={cartHandler}
          className={classes.addCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
