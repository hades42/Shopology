import Container from "../../components/Container";
import classes from "./MainSection.module.css";
import trolly from "./images/xhero-banner.png.pagespeed.ic.Da3KtaVoQv.webp";
import showcase1 from "./images/xhero-slide1.png.pagespeed.ic.KZViXlyXiG.webp";
import showcase2 from "./images/xhero-slide2.png.pagespeed.ic.je2nitqAw1.webp";
import showcase3 from "./images/xhero-slide3.png.pagespeed.ic.jjMnTdDbyV.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../components/Card";

const showcases = [
  {
    image: showcase1,
    text: "Cheaper Products",
    category: "Electronics",
  },
  {
    image: showcase2,
    text: "Fast delivery",
    category: "Clothes",
  },
  {
    image: showcase3,
    text: "Many offers",
    category: "Games",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};
const MainSection = () => {
  return (
    <>
      <div className={classes.heroBanner}>
        <Container>
          <div className={classes.content}>
            <img className={classes.imageFluid} src={trolly} alt="Trolly" />
            <div className={classes.intro}>
              <h4>Shop is fun</h4>
              <h1>Browse Our Premium Product</h1>
              <p>
                Us which over of signs divide dominion deep fill bring they're
                meat beho upon own earth without morning over third. Their male
                dry. They are great appear whose land fly grass.
              </p>
              <a href="/shop">Browse Now</a>
            </div>
          </div>
        </Container>
      </div>
      <div className={classes.showcases}>
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
          {showcases.map((showcase) => (
            <Card key={showcase.text} showcase={showcase} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MainSection;
