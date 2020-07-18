import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

const HatPage = () => {
  return (
    <div>
      <h2>HAT PAGE</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
