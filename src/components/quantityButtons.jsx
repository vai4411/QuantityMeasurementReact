import React, { Component } from "react";
import Conversion from "./conversion";
import Api from "../services/quantityApi";

var baseUnits = [];
class QuantityButtons extends Component {
  constructor(props) {
    super(props);
    this.fromInput = React.createRef();
    this.toInput = React.createRef();
    this.state = { data: [], subunit: [] };
    this.api = new Api();
  }

  componentWillMount() {
    this.loadUnits();
  }

  async loadUnits() {
    const unit = await this.api.loadMainUnit();
    console.log(unit);
    this.setState({
      data: unit,
    });
  }

  changeSubunit = (id) => {
    this.fromInput.current.textInput.current.value = "";
    this.toInput.current.textInput.current.value = "";
    this.loadSubUnits(id);
  };

  async loadSubUnits(id) {
    const val = await this.api.loadUnit(this.state.data[id]);
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
          {console.log(this.toInput)}
          <Conversion
            heading="TO"
            unit={this.state.subunit}
            ref={this.toInput}
            result={this.fromInput}
          />
          {console.log(this.toInput)}
        </div>
      </div>
    );
  }
}

export default QuantityButtons;
