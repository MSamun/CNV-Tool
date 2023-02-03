import React, { useEffect, useState } from 'react';
import RegisterNinjaOverlay from './RegisterNinjaOverlay';
import '../css/AdminOverviewPage.css'

export default function AdminOverviewPage() 
{
	// var token = localStorage.getItem('token');
	// var user = jwtDecode(token);

	// const [localUser, setLocalUser] = useState(user);

	// console.log(localUser);
	
	const [isOpen, setIsOpen] = useState(false);

	const determineAccountToOpen = (accountChosen) =>
	{

	};

	return (
		<>
		<ul id = "adminOverview-nav-bar">
			<li><button>Ninjas</button></li>
			<li><button>Prizes</button></li>
			<li><button>Challenges</button></li>
		</ul>

		<div className = "cnv-tool-div" id = "cnv-tool-ninjaInfo-container">
			<h1 className = "cnv-tool-title">Ninja Information</h1>

			<br/><br/>
			<button className = "cnv-tool-buttons" onClick = {() => setIsOpen(true)}>Add Ninja</button>
			{/* <RegisterNinjaOverlay/> */}
		</div>

		<div className = "cnv-tool-div" id = "cnv-tool-prizes-container">
			<h1 className = "cnv-tool-title">Prizes</h1>
		</div>

		<div className = "cnv-tool-div" id = "cnv-tool-challenges-container">
			<h1 className = "cnv-tool-title">Challenges</h1>
		</div>
		</>
  	);
}