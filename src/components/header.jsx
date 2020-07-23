import React from 'react'

function header(props) {
	return(
		<div>
		<p>{props.name}</p>
		<p>{props.link}</p>
		</div>
	)
}

export default header;