import React from 'react';
import { Link } from 'react-router-dom';

function history(){
	return(
		<div>
		<Link to='/history'>
		<li>History</li>
		</Link>
		</div>
	)
}

export default history;