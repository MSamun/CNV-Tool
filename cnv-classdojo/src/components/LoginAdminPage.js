import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../css/LoginNinjaPage.css';

const LoginAdminPage = () => 
{
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate(); 

	async function loginUser(event) 
	{
		event.preventDefault();
		navigate('/adminOverview');
	}

	return (
		<div className = "cnv-tool-div" id = "cnv-tool-overview-container">

			<div className = "cnv-tool-div" id = "login-container">

				<form onSubmit = {loginUser}>

					<span id = "login-signIn-title">ADMINISTRATOR</span>

					<div className = "login-input-container">
						<input id = "adminEmail" type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} required/>
						<label id = "input-container-label" htmlFor = "email">Email Address</label>		
					</div>

					<br/>
					<div className = "login-input-container">
						<input id = "adminPassword" type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
						<label id = "input-container-label" htmlFor = "password">Password</label>		
					</div>

					<br/>
					<input className = "cnv-tool-buttons" id = "ninja-signIn-button" type = "submit" value = "Login"/>
				</form>

				<br/>
				<div className = "cnv-tool-div" id = "studentLogin-link-div">

					<label className = "cnv-tool-static-label"> Not an admin? </label>

					<Link to="/">
						<label className = "cnv-tool-static-label"> Student Login </label>
					</Link>
				</div>
			</div>
		</div>
	)
};

export default LoginAdminPage;
