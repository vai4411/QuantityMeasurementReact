import React, { Component } from "react";
import Conversion from "./conversion";

var baseUnits = [];
class QuantityButtons extends Component {
  constructor(props) {
    super(props);
    this.fromInput = React.createRef();
    this.toInput = React.createRef();
    this.state = { data: [], subunit: [] };
  }

  componentWillMount() {
    const url1 = "http://localhost:8080/quantity/base_units";
    const self = this;
    const axios = require("axios");
    axios({
      method: "get",
      url: url1,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        baseUnits = response.data.units;
        self.setState({ data: baseUnits });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  changeSubunit = (id) => {
    this.fromInput.current.textInput.current.value = "";
    this.toInput.current.textInput.current.value = "";
    this.loadSubUnits(id);
  };

  loadUnits = (url) => {
    const axios = require("axios");
    return new Promise(function (resolve, reject) {
      axios({
        method: "get",
        url: url,
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          var units = response.data.units;
          resolve(units);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    });
  };

  async loadSubUnits(id) {
    const val = await this.loadUnits(
      "http://localhost:8080/quantity/sub_units/" + this.state.data[id]
    );
    this.setState({
      subunit: val,
    });
  }

  render() {
    return (
      <div>
        <div className="type">
          <p>CHOOSE TYPE</p>
        </div>
        <div className="quantity-button">
          {this.state.data.map((data, index) => (
            <div
              className={data}
              tabIndex="0"
              onClick={() => this.changeSubunit(index)}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
        <div className="quantity-button">
          <Conversion
            heading="FROM"
            unit={this.state.subunit}
            ref={this.fromInput}
            result={this.toInput}
          />
          <Conversion
            heading="TO"
            unit={this.state.subunit}
            ref={this.toInput}
            result={this.fromInput}
          />
        </div>
      </div>
    );
  }
}

export default QuantityButtons;
