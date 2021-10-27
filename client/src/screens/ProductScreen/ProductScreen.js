import { useEffect, useState } from "react";
import classes from "./ProductScreen.module.css";
import Container from "../../components/Container";
import Subscribe from "../HomeScreen/Subscribe";
import ProductSection from "./ProductSection/ProductSection";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductReview from "./ProductReview/ProductReview";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../actions/productActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;

  const productId = match.params.id;
  useEffect(() => {
    dispatch(getProductDetail(productId));
  }, [dispatch, productId]);

  const [selection, setSelection] = useState("1");

  const changeSelection = (e) => {
    setSelection(e.target.getAttribute("data-selection"));
  };

  let selectionShow;
  if (selection === "1") {
    selectionShow = <ProductDescription content={product.description} />;
  } else if (selection === "2") {
    selectionShow = <ProductReview productId={productId} />;
  }
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <ProductSection product={product}></ProductSection>
          <div className={classes["selection-container"]}>
            <ul className={classes.navSelection}>
              <li
                className={classes.navItem}
                data-selection="1"
                onClick={changeSelection}
              >
                Description
              </li>
              <li
                className={classes.navItem}
                data-selection="2"
                onClick={changeSelection}
              >
                Reviews
              </li>
            </ul>
            {selectionShow}
          </div>
        </>
      )}
      <Subscribe></Subscribe>
    </Container>
  );
};

export default ProductScreen;
