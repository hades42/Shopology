import { Container } from "react-bootstrap";
import classes from "../LoginScreen/LoginScreen.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userAction";
import { Link } from "react-router-dom";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(username, email, password));
    }
  };
  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.leftSide}>
          <h3>Already have an account?</h3>
          <p>
            We will have something right here, but we dont know what we gonna
            put yet?
          </p>
          <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
            Login Now
          </Link>
        </div>
        <div className={classes.rightSide}>
          <h4>Create an account</h4>
          {error && <Message variant="danger">{error}</Message>}
          {message && <Message variant="danger">{message}</Message>}
          {loading && <Loader></Loader>}
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default RegisterScreen;
