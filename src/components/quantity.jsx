import React, { Component } from 'react'

class Quantity extends Component{
	render(){
		const item=this.props;
		return(
		<button className='quantity'><img src={item.icon}></img><p>{item.desc}</p></button>
		)
	}
}

export default Quantity;