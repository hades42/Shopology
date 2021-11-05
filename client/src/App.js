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
import UserProfile from "./screens/Profile/User/UserProfile";
import CartScreen from "./screens/CartScreen/CartScreen";
import ShippingScreen from "./screens/Shipping/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen/OrderScreen";
import UserEditScreen from "./screens/Profile/Admin/UserEditScreen";
import ProductEditScreen from "./screens/Profile/Admin/ProductEdit/ProductEditScreen";
import ProductCreateScreen from "./screens/Profile/Admin/ProductCreate/ProductCreateScreen";
import RequestDescriptionScreen from "./screens/RequestScreen/RequestDescriptionScreen";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <main>
        <Route path="/shipping" component={ShippingScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/payment" component={PaymentScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/login" component={LoginScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/userProfile" component={UserProfile}></Route>
        <Route path="/cart" component={CartScreen} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/request/:id" component={RequestDescriptionScreen} />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path="/admin/product/create" component={ProductCreateScreen} />
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <FooterArea></FooterArea>
      <FooterBottom></FooterBottom>
    </Router>
  );
}

export default App;
