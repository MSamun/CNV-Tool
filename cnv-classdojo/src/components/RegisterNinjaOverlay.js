import React, { useState } from 'react'
import { Component } from 'react';
import axios from 'axios';

import '../css/RegisterNinjaOverlay.css';

export default class RegisterNinjaOverlay extends Component
{
	constructor(props)
	{
		super(props);

		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeBeltLevel = this.onChangeBeltLevel.bind(this);
		this.onChangePoints = this.onChangePoints.bind(this);
		this.onChangeDropInType = this.onChangeDropInType.bind(this);
		this.onSubmit = this.onSubmit.bind(this); 

		this.state =
		{
			firstName: "",
			lastName: "",
			beltLevel: "",
			points: 0,
			dropInType: "",
			isActive: true,
			profilePictureID: 0
		}
	}

	onChangeFirstName(e)
	{ 
		this.setState({firstName: e.target.value});
	}

	onChangeLastName(e)
	{
		this.setState({lastName: e.target.value});
	}

	onChangeBeltLevel(e)
	{
		this.setState({beltLevel: e.target.value});
	}

	onChangePoints(e)
	{
		this.setState({points: e.target.value});
	}

	onChangeDropInType(e)
	{
		this.setState({dropInType: e.target.value});
	}

	async onSubmit(e)
	{
		e.preventDefault();

		const user = 
		{
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			beltLevel: this.state.beltLevel,
			points: this.state.points,
			dropInType: this.state.dropInType,
			isActive: true,
			profilePictureID: 0
		}

		console.log(user);

			await axios.post("http://localhost:5000/register/add", user).then(res => 
			{
				alert("User added!");
				console.log(res.data)
			})
			.catch(() => alert("Account creation failed! Please try again."));
	}
 
	render()
	{
		return (
			<>
				<div id = "overlay-background"/>
		
				<div id = "main-overlay">
					<h2 className = "cnv-tool-title">ADD A NEW NINJA</h2>

					<br/><br/>
					<div className = "login-input-container">
						<input id = "userfirstName" type = "text" name = "userfirstName" value = {this.state.firstName} onChange = {this.onChangeFirstName} required/>
						<label id = "input-container-label" htmlFor = "userfirstName">*First Name</label>
					</div>

					<br/>
					<div className = "login-input-container">
						<input id = "userlastName" type = "text" name = "userlastName" value = {this.state.lastName} onChange = {this.onChangeLastName} required/>
						<label id = "input-container-label" htmlFor = "userlastName">*Last Name</label>
					</div>

						<label className = "bank-app-label"> Belt Level:
							<br/><br/>
							<select className = "cnv-beltLevel-dropdown">
								<option className = "cnv-beltLevel-dropdown-option" value = "white">White Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "yellow">Yellow Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "orange">Orange Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "green">Green Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "blue">Blue Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "purple">Purple Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "brown">Brown Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "red">Red Belt</option>
								<option className = "cnv-beltLevel-dropdown-option" value = "black">Black Belt</option>
							</select>
						</label>
		
						<br/><br/><br/>
				</div>
			</>	
		  )
	}
}
