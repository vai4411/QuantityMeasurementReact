import React from "react";

function historyContent(props) {

  var history = [
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

  return (
    <div>
      {/* <th>BASEUNIT</th> */}
      <th>FROM</th>
      <th>TO</th>
      <th>VALUE</th>
      <th>RESULT</th>
      {props.data.map((data) => (
        <div>
          <td>{data}</td>
          <td>{props.data.toUnit}</td>
          <td>{props.data.quantity}</td>
          <td>{props.data.result}</td>
          {/* <td>{data.result}</td> */}
        </div>
      ))} 
    </div>
  );
}

export default historyContent;
