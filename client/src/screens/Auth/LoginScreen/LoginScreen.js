import { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./LoginScreen.module.css";
const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.leftSide}>
          <h3>New to our website?</h3>
          <p>
            We will have something right here, but we dont know what we gonna
            put yet?
          </p>
          <a href="/register">Create an Account</a>
        </div>
        <div className={classes.rightSide}>
          <h4>login to enter</h4>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default LoginScreen;
