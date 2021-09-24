import classes from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

function App() {
  return (
    <Router>
      <main className={classes.mainSection}>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
    </Router>
  );
}

export default App;