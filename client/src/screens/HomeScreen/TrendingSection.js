import Container from "../../components/Container";
import classes from "./TrendingSection.module.css";
import SmallCard from "../../components/SmallCard/SmallCard";
const TrendingSection = () => {
  return (
    <Container>
      <div className={classes.intro}>
        <p>Popular Item in the market</p>
        <h2>Trending Product</h2>
      </div>
      <div className={classes.showcase}>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
      </div>
    </Container>
  );
};

export default TrendingSection;
