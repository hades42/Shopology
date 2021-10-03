import { useState } from "react";
import classes from "./ProductScreen.module.css";
import Container from "../../components/Container";
import Subscribe from "../HomeScreen/Subscribe";
import ProductSection from "./ProductSection/ProductSection";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductReview from "./ProductReview/ProductReview";
const ProductScreen = () => {
  const [selection, setSelection] = useState("1");

  const changeSelection = (e) => {
    setSelection(e.target.getAttribute("data-selection"));
  };

  let selectionShow;
  if (selection === "1") {
    selectionShow = <ProductDescription />;
  } else if (selection === "2") {
    selectionShow = <ProductReview />;
  }
  return (
    <Container>
      <ProductSection></ProductSection>
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
      <Subscribe></Subscribe>
    </Container>
  );
};

export default ProductScreen;
