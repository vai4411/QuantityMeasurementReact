import React, { Component } from 'react'

class Quantity extends Component{
	render(){
		const item=this.props;
		return(
			<div>
				<button><img src={item.icon}></img></button>
			</div>
		)
	}
}

export default Quantity;