import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import Header from '../../Components/Header/Header';
import { Button } from '../Home/styled';
import MapFeatures from './mapFeatures';

export default function Map() {
	const [content, setContent] = useState("");

	return (
		<div>
			<Header/>
			<MapFeatures setTooltipContent={setContent}/>
			<ReactTooltip>{content}</ReactTooltip>
			<Link to='/'><Button>Voltar ao Home</Button></Link>
		</div>
	);
}
