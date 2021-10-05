import Container from "../../components/Container";
import classes from "./BestSeller.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallCard from "../../components/SmallCard/SmallCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useEffect } from "react";
import { topProduct } from "../../actions/productActions";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};
const BestSeller = () => {
  const dispatch = useDispatch();
  const productTop = useSelector((state) => state.productTop);
  const { loading, error, products } = productTop;

  useEffect(() => {
    dispatch(topProduct());
  }, [dispatch]);
  return (
    <Container>
      <div className={classes.intro}>
        <p>Popular Item in the market</p>
        <h2>Best Sellers</h2>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className={classes.showcase}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {products.map((product) => (
              <SmallCard key={product._id} product={product} />
            ))}
          </Carousel>
        </div>
      )}
    </Container>
  );
};

export default BestSeller;
