import React, { Component } from 'react'
import axios from 'axios';

class Api extends React.Component{
	convert = (fromUnit,quantity,toUnit) => {
		return axios({
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
			  return response.data.result;
			})
			.catch(function (error) {
			  console.log(error);
			});
			// return "error";
	}
}

export default Api;