import { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./LoginScreen.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userAction";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.leftSide}>
          <h3>New to our website?</h3>
          <p>
            We will have something right here, but we dont know what we gonna
            put yet?
          </p>
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Create an Account
          </Link>
        </div>
        <div className={classes.rightSide}>
          <h4>login to enter</h4>
          {loading && <Loader />}
          <form onSubmit={submitHandler}>
            {error && <Message variant="danger">{error}</Message>}
            <input
              type="text"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default LoginScreen;
