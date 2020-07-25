import React from 'react'

function header(props) {
	return(
		<div  className='header'>
		<h2>{props.name}</h2>
		</div>
	)
}

export default header;