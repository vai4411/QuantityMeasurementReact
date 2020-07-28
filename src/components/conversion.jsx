import React, { Component } from "react";

class Conversion extends Component {
  constructor(props) {
    super(props);
    this.selectInput = React.createRef();
    this.textInput = React.createRef();
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput() {
    var quantity = this.textInput.current.value;
    var fromUnit = this.selectInput.current.value;
    var toUnit = this.props.result.current.selectInput.current.value;
    var result = this.props.result.current.textInput.current;
    console.log(quantity);
    console.log(fromUnit);
    console.log(toUnit);
    const axios = require("axios");
    axios({
      method: "post",
      url: "http://localhost:8080/quantity/convert",
      data: {
        firstSubUnit: fromUnit,
        quantity: Number(quantity),
        secondSubUnit: toUnit,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response.data.result);
        result.value = response.data.result;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="conversion">
        <p>{this.props.heading}</p>
        <input ref={this.textInput} onChange={this.changeInput}></input>
        <select ref={this.selectInput} onChange={this.changeInput}>
          {this.props.unit.map((data) => {
            return <option>{data}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Conversion;
