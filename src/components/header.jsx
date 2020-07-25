import React from 'react';
import { Link } from 'react-router-dom';

function header() {
	return(
		<div>
		<Link to='/'>
		<h1>Quanment</h1>
		</Link>
		<Link to='/history'>
		<li>History</li>
		</Link>
		</div>
	)
}

export default header;