import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../css/LoginNinjaPage.css';

const LoginNinjaPage = () => 
{
	const [fullName, setFullName] = useState('');
	// const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate(); 

	async function loginUser(event) 
	{
		event.preventDefault();
		// const credentials = 
		// {
		// 	email: email,
		// 	password: password
		// }

		// const { response }  = await axios.post("http://localhost:5000/login", credentials)
		const response = await fetch('http://localhost:5000/login', 
		{
			method: 'POST',
			headers: 
			{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
				{
					fullName
				}
			),
		})
		const data = await response.json();

		if (data.user)
		{
			localStorage.setItem('token', data.user);
			// errorMessageStyle = hiddenStyle;
			alert("Login successful!");
			navigate("/bankAccountOverview");
		}
		else
		{
			// errorMessageStyle = showErrorStyle;
			setError("Error! Invalid email address and/or password.");
			navigate("/login");
		}
	}

	return (
		<div className = "cnv-tool-div" id = "cnv-tool-overview-container">

			<div className = "cnv-tool-div" id = "login-container">

				<form onSubmit = {loginUser}>

					<span id = "login-signIn-title">NINJA SIGN-IN</span>

					<div className = "login-input-container">
						<input id = "ninjaFullName" value = {fullName} onChange = {(e) => setFullName(e.target.value)} required/>
						<label id = "input-container-label" htmlFor = "name">FirstName.LastName</label>		
					</div>

					<br/>
					<input className = "cnv-tool-buttons" id = "ninja-signIn-button" type = "submit" value = "Login"/>
				</form>

				<br/>
				<div className = "cnv-tool-div" id = "adminLogin-link-div">

					<label className = "cnv-tool-static-label"> Not a student? </label>

					<Link to="/loginAdmin">
						<label className = "cnv-tool-static-label"> Administrator Login </label>
					</Link>
				</div>
			</div>
		</div>
	)
};

export default LoginNinjaPage;
