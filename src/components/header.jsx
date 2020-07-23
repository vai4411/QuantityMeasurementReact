import React from 'react'

function header(props) {
	return(
		<div  className='header'>
		<h2>{props.name}</h2>
		<p>{props.link}</p>
		</div>
	)
}

export default header;