import React from 'react';

function historyContent(){
	var history = [{
		baseunit:'Length',
		from:'Feet',
		to:'Inch',
		value:1,
		result:3
	},
	{
	baseunit:'Length',
	from:'Feet',
	to:'Inch',
	value:1,
	result:3
	},
	{
		baseunit:'Length',
		from:'Feet',
		to:'Inch',
		value:1,
		result:3
	}];

	return(
		<div>
		{history.map((data) =>
		<div>
			<td>{data.baseunit}</td>
			<td>{data.from}</td>
			<td>{data.to}</td>
			<td>{data.value}</td>
			<td>{data.result}</td>
		</div>
		)}
		</div>
	)
}

export default historyContent;