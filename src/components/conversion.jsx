import React, { Component } from 'react'

class Conversion extends Component{
	render(){
		return(
			<div className='conversion'>
			<input></input>
			<select>
			{this.props.unit.map((data) => {
			return(
			<option>{data}</option>
			)
		})}
		</select>
		</div>
		)
	}
}

export default Conversion;