import React, { Component } from "react";
import Api from '../services/quantityApi';

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
    console.log(quantity);
    console.log(fromUnit);
    console.log(toUnit);
    this.convertUnits(fromUnit,quantity,toUnit);
  }

  async convertUnits(fromUnit,quantity,toUnit) {
    const val = await this.api.convert(fromUnit,quantity,toUnit);
    var result = this.props.result.current.textInput.current;
    result.value = val;
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
