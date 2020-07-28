import React, { useState } from "react";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Quantity from "./components/quantityButtons";
import "./styles/header.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryDetails from "./components/historyContent";

class App extends React.Component {
  render() {
    var Units = [
      {
        unit: "Length",
        subunits: [
          "Kilometer",
          "Meters",
          "Centimeter",
          "Millimeter",
          "Micrometer",
          "Mile",
          "Foot",
          "Inch",
        ],
      },
      {
        unit: "Tempreture",
        subunits: ["Celsius", "Fahrenheit", "Kelvin"],
      },
      {
        unit: "Volume",
        subunits: ["Litres", "Millilitres", "Gallons"],
      },
    ];

    return (
      <div className="main-window">
        <Router>
          <Header />
          <Welcome msg="Welcome To Quantity Measurement" />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <div className="choose-type"></div>
                  <div>
                    <Quantity units={Units} />
                  </div>
                </div>
              )}
            />
            <Route path="/history" exact component={HistoryDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
