import MainSection from "./MainSection";
import TrendingSection from "./TrendingSection";
import SaleSection from "./SaleSection";
import BestSeller from "./BestSeller";
import Subscribe from "./Subscribe";
const HomeScreen = () => {
  return (
    <div>
      <MainSection></MainSection>
      <TrendingSection></TrendingSection>
      <SaleSection></SaleSection>
      <BestSeller></BestSeller>
      <Subscribe></Subscribe>
    </div>
  );
};

export default HomeScreen;
