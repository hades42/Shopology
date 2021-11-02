import Container from "../../components/Container";
import classes from "./FooterArea.module.css";
import { Link } from "react-router-dom";
const FooterArea = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.content}>
          <div className={classes.mission}>
            <h2>Our Mission</h2>
            <p>
              So seed seed green that winged cattle in. Gathering thing made fly
              you're no divided deep moved us lan Gathering thing us land years
              living.
            </p>
            <p>
              So seed seed green that winged cattle in. Gathering thing made fly
              you're no divided deep moved
            </p>
          </div>
          <div className={classes.quickLink}>
            <h3>Quick Links</h3>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/">Shop</Link>
              <Link to="/">Contact</Link>
            </ul>
          </div>
          <div className={classes.contact}>
            <h3>Contact Us</h3>
            <div className={classes.wrapContact}>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i className="fas fa-location-arrow"></i>
                </div>
                <div className={classes["card-content"]}>
                  <h4>Head Office</h4>
                  <p>123, Ahihi, City</p>
                </div>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i className="fas fa-phone"></i>
                </div>
                <div className={classes["card-content"]}>
                  <h4>Phone Number</h4>
                  <p>+123 456 789</p>
                  <p>+123 456 789</p>
                </div>
              </div>
              <div className={classes.card}>
                <div className={classes.icon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={classes["card-content"]}>
                  <h4>Head Office</h4>
                  <p>123, Ahihi, City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterArea;
