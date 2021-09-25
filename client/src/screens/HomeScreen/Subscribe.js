import Container from "../../components/Container";
import classes from "./Subscribe.module.css";
const Subscribe = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.content}>
          <div className={classes.intro}>
            <h3>Get update from anywhere</h3>
            <p>
              Bearing Void gathering light light his eavening unto dont afraid
            </p>
          </div>
          <div className={classes.signUp}>
            <form className={classes.form}>
              <input className={classes.input} placeholder="Enter your email" />
              <button className={classes.btn}>Subscribe Now</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
