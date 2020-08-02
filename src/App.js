import React, { useState } from "react";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Quantity from "./components/quantityButtons";
import "./styles/header.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryDetails from "./components/historyContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      data: [],
    };
  }

  unitConversionRecord = (data) => {
    var value = JSON.parse(localStorage.getItem("history"));
    this.setState({
      history: [...this.state.history, data],
      data: value,
    });
    localStorage.setItem("history", JSON.stringify(this.state.history));
  };

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
                    <Quantity
                      units={Units}
                      conversions={this.unitConversionRecord}
                    />
                  </div>
                </div>
              )}
            />
            {console.log(this.state)}
            <Route
              path="/history"
              exact
              render={() => <HistoryDetails data={this.state.data} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
