import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation cartQty={"0"} />
      </Router>
    </div>
  );
}

export default App;