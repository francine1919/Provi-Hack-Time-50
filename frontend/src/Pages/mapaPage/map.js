import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import MapFeatures from './mapFeatures';

export default function Map() {
	const [content, setContent] = useState("");

	return (
		<div>
			<Link to='/'><button>Volta Home</button></Link>
			<MapFeatures setTooltipContent={setContent}/>
			<ReactTooltip>{content}</ReactTooltip>
		</div>
	);
}
