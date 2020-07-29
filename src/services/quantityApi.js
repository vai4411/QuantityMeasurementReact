import React, { Component } from 'react'
import axios from 'axios';
const url = "http://localhost:8080/quantity/";

class Api extends React.Component{
	convert = (fromUnit,quantity,toUnit) => {
		return axios({
			method: "post",
			url: url + "convert",
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
	}

	loadUnit = (unit) => {
    	return axios({
        method: "get",
        url: url + "sub_units/" + unit,
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
		return response.data.units;
        })
        .catch(function (error) {
          console.log(error);
		});
	}
}

export default Api;