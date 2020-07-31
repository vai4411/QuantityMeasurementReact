import React, { Component } from "react";
import Api from "../services/quantityApi";

class Conversion extends Component {
  constructor(props) {
    super(props);
    this.selectInput = React.createRef();
    this.textInput = React.createRef();
    this.api = new Api();
  }

  changeInput = () => {
    var quantity = this.textInput.current.value;
    var fromUnit = this.selectInput.current.value;
    var toUnit = this.props.result.current.selectInput.current.value;
    this.convertUnits(fromUnit, quantity, toUnit);
  };

  async convertUnits(fromUnit, quantity, toUnit) {
    var length = this.props.result.current.selectInput.current.options.length;
    for (var i = 0; i < length; i++) {
      var option = this.props.result.current.selectInput.current.options[i];
      if (fromUnit == option.value) {
        option.disabled = true;
        option.selected = false;
      } else {
        option.disabled = false;
      }
    }
    const val = await this.api.convert(fromUnit, quantity, toUnit);
    var result = this.props.result.current.textInput.current;
    result.value = val;
    this.props.conversionData(fromUnit, quantity, toUnit,result.value)
  }

  render() {
    return (
      <div className="conversion">
        <p>{this.props.heading}</p>
        <div className="conversion-opration">
        <input
          type="number"
          ref={this.textInput}
          onChange={() => {this.changeInput();
        }}
        ></input>
        <select
          ref={this.selectInput}
          onChange={() => {
            this.changeInput();
          }}
        >
          {this.props.unit.map((data, index) => {
            return <option>{data}</option>;
          })}
        </select>
        </div>
      </div>
    );
  }
}

export default Conversion;