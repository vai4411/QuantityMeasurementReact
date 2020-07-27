import React, { Component } from 'react'
import Conversion from './conversion';

class Quantity extends Component{


	constructor(props){
		super(props)
		this.state={
		  subunit : this.props.units[0].subunits,
		  isSelected : false,
		}
	  }

	  changeSubunit = (id) => {
		  this.setState({
			  subunit : this.props.units[id].subunits,
			  isSelected : true
		  })
	  }

	render(){
		var result;
		if(this.state.isSelected === true){
		}
		else{
			result =<img src={this.props.units[0].icon}></img>
		}

		return(
			<div>
			<div className='quantity-button'>
			<div className='length' tabIndex='0' onClick={() => this.changeSubunit(0)}>
				{result}
			</div>
			<div className='tempreture' tabIndex='0' onClick={() => this.changeSubunit(1)}></div>
			<div className='volume' tabIndex='0' onClick={() => this.changeSubunit(2)}></div>
			</div>
			<div className='quantity-button'>
			<Conversion heading='FROM' unit={this.state.subunit}/>
			<Conversion heading='TO' unit={this.state.subunit}/>
			</div>
			</div>
		);
	}
}

export default Quantity;