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
    this.state = { data: [], subunit: [], index: 0 };
  }

  componentWillMount() {
    this.loadUnits();
  }

  async loadUnits() {
    const unit = await this.api.loadMainUnit();
    var subUnit = await this.api.loadUnit("Length");
    console.log(unit);
    this.setState({
      data: unit,
      subunit: subUnit,
    });
    this.shuffleOptions();
  }

  changeSubunit = (id) => {
    this.fromInput.current.textInput.current.value = "";
    this.toInput.current.textInput.current.value = "";
    this.loadSubUnits(id);
    this.shuffleOptions();
  };

  async loadSubUnits(id) {
    const val = await this.api.loadUnit(this.state.data[id]);
    this.setState({
      subunit: val,
    });
  }

  toggleClass = (index) => {
    this.setState({ index: index });
  };

  shuffleOptions = () => {
    var option1 = this.fromInput.current.selectInput.current.options;
    var option2 = this.toInput.current.selectInput.current.options;
    if (option1[0].selected) {
      option2[1].selected = true;
    }
    if (option1[1].selected) {
      option2[0].selected = true;
    }
    if (option2[0].selected) {
      option1[1].selected = true;
    }
    if (option2[1].selected) {
      option1[0].selected = true;
    }
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
              onClick={() => {
                this.toggleClass(index);
                this.changeSubunit(index);
              }}
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
