import { Container } from "react-bootstrap";
import classes from "../LoginScreen/LoginScreen.module.css";
const RegisterScreen = () => {
  return (
    <Container>
      <div className={classes.wrapper}>
        <div className={classes.leftSide}>
          <h3>Already have an account?</h3>
          <p>
            We will have something right here, but we dont know what we gonna
            put yet?
          </p>
          <a href="/login">Login Now</a>
        </div>
        <div className={classes.rightSide}>
          <h4>Create an account</h4>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default RegisterScreen;
