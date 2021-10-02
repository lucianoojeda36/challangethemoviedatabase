import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import DashBoard from "./pages/dashboard/DashBoard";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/DashBoard" component={DashBoard} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
