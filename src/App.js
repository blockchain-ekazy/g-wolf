import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mint from "./Components/Mint";
import Shop from "./Components/Shop";
import RoadMap from "./Components/RoadMap";

function App() {
  return (
    <div>
      <div>
        {/* <Home/> */}

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Mint" component={Mint} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/roadmap" component={RoadMap} />
          </Switch>
        </BrowserRouter>
      </div>
      <ToastContainer autoClose={4000} hideProgressBar theme="colored" />
    </div>
  );
}

export default App;
