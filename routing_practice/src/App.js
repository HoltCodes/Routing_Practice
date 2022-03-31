import './App.css';
import { Router } from "@reach/router";
import Home from "./components/Home";
import InputPage from "./components/InputPage";
import WorldColor from "./components/WordColor"

function App() {
  return (
    <div>
      <Router>
        <Home path = "/home"/>
        <InputPage path = "/:intOrWord"/>
        <WorldColor path = ":word/:fontColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
