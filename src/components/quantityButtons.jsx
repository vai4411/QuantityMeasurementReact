import React, { Component } from "react";
import Conversion from "./conversion";
import Api from "../services/quantityApi";

var baseUnits = [];
class QuantityButtons extends Component {
  constructor(props) {
    super(props);
    this.fromInput = React.createRef();
    this.toInput = React.createRef();
    this.fromSelect = React.createRef();
    this.api = new Api();
    this.state = { data: [], subunit: [] , disableUnit : "", index : 0};
  }

  componentWillMount() {
    this.loadUnits();
  }

  async loadUnits() {
    var index = 0;
    const unit = await this.api.loadMainUnit();
    var subUnit = await this.api.loadUnit('Length');
    console.log(unit);
    this.setState({
      data: unit,
      subunit : subUnit
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

  setDisabledUnit = (unit) => {
    this.setState({
      disableUnit : unit
    })
  }

  toggleClass = (index) => {
    // const currentState = this.state.active;
    // var active = this.state.active[index];
    this.setState({ index : index });
};

  render() {
    return (
      <div>
        <div className="type">
          <p>CHOOSE TYPE</p>
        </div>
        <div className="quantity-button">
          {this.state.data.map((data, index) => (
            <div
              className={data + this.state.index}
              tabIndex="0"
              onClick={() => {this.toggleClass(index);this.changeSubunit(index);}}
            >
              {console.log(data + index)}
              <p>{data}</p>
            </div>
          ))}
        </div>
        {console.log(this.state.disableUnit)}
        <div className="quantity-button">
          <Conversion
            heading="FROM"
            unit={this.state.subunit}
            disable={this.setDisabledUnit}
            disableSelectedUnit={this.state.disableUnit}
            ref={this.fromInput}
            result={this.toInput}
          />
          {console.log(this.toInput)}
          <Conversion
            heading="TO"
            unit={this.state.subunit}
            disable={this.setDisabledUnit}
            disableSelectedUnit={this.state.disableUnit}
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
