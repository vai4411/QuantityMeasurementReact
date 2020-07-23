import React, { Component } from 'react'

class Conversion extends Component{
	render(){
		const value=this.props;
		return(
			<div className='conversion'>
			<p>{value.id}</p>
			<input></input>
			<select></select>
			</div>
		)
	}
}

export default Conversion;