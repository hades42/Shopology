import Container from "../../components/Container";
import classes from "./TrendingSection.module.css";
import SmallCard from "../../components/SmallCard/SmallCard";
import { useDispatch, useSelector } from "react-redux";
import { trendingProducts } from "../../actions/productActions";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const TrendingSection = () => {
  const dispatch = useDispatch();
  const productTrending = useSelector((state) => state.productTrending);
  let { loading, error, products } = productTrending;

  if(window.screen.width <= 700) {
    products = products.slice(0, 6)
  }

  useEffect(() => {
    dispatch(trendingProducts());
  }, [dispatch]);

  return (
    <Container>
      <div className={classes.intro}>
        <p>Popular Item in the market</p>
        <h2>Trending Product</h2>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <div className={classes.showcase}>
          {products.map((product) => (
            <SmallCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default TrendingSection;
