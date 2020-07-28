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
