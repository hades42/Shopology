import classes from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Navigation from "./components/Navigation/Navigation";
import FooterArea from "./screens/HomeScreen/FooterArea";
import FooterBottom from "./screens/HomeScreen/FooterBottom";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import Shop from "./components/Shop/Shop";
import ScrollToTop from "./components/ScrollToTop";
import LoginScreen from "./screens/Auth/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen/RegisterScreen";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation cartQty={"0"}></Navigation>
      <main className={classes.mainSection}>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/login" component={LoginScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <FooterArea></FooterArea>
      <FooterBottom></FooterBottom>
    </Router>
  );
}

export default App;
