import React from "react";

class historyContent extends React.Component {

  constructor(props){
    super(props)
  }

  history = [
    {
      baseunit: "Length",
      from: "Feet",
      to: "Inch",
      value: 1,
      result: 3,
    },
    {
      baseunit: "Length",
      from: "Feet",
      to: "Inch",
      value: 1,
      result: 3,
    },
    {
      baseunit: "Length",
      from: "Feet",
      to: "Inch",
      value: 1,
      result: 3,
    },
  ];

  render(){
  return (
    <div>
      <th>FROM</th>
      <th>TO</th>
      <th>VALUE</th>
      <th>RESULT</th>
      {this.props.data.map((data) => (
        <div>
          <td>{data.fromUnit}</td>
          <td>{data.toUnit}</td>
          <td>{data.quantity}</td>
          <td>{data.result}</td>
        </div>
       ))}
    </div>
  );
  }
}

export default historyContent;
