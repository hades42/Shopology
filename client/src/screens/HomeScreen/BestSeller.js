import Container from "../../components/Container";
import classes from "./BestSeller.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallCard from "../../components/SmallCard/SmallCard";
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
  return (
    <Container>
      <div className={classes.intro}>
        <p>Popular Item in the market</p>
        <h2>Best Sellers</h2>
      </div>
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
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
        </Carousel>
      </div>
    </Container>
  );
};

export default BestSeller;
