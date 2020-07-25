import React, { Component } from 'react'
import Conversion from './conversion';

class Quantity extends Component{

	constructor(props){
		super(props)
		this.state={
		  subunit : this.props.units[0].subunits
		}
	  }

	  changeSubunit = (id) => {
		  this.setState({
			  subunit : this.props.units[id].subunits
		  })
	  }

	render(){
		console.log(this.props);
		return(
			<div>
		{this.props.units.map((data,index) => {
		return(
			<div>
			<button className='quantity' onClick={this.changeSubunit.bind(this,index)}>
			<img class='image' src={data.icon}></img>
			<p>{data.unit}</p>
			</button>
			</div>
		);
		}
		)
	}
	<div className='quantity-button'>
	<Conversion unit={this.state.subunit}/>
	<Conversion unit={this.state.subunit}/>
	</div>
	</div>
		);
}
}

export default Quantity;