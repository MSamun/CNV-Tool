import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import LoginNinjaPage from "./components/LoginNinjaPage";
import LoginAdminPage from "./components/LoginAdminPage";
import AdminOverviewPage from "./components/AdminOverviewPage";

import './css/App.css';




const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginNinjaPage/>} exact />
				<Route path="/loginAdmin" element={<LoginAdminPage/>} />
				<Route path="/adminOverview" element={<AdminOverviewPage/>} />
				<Route path="*" element={<ErrorPage/>} />
			</Routes>
		</BrowserRouter>
	);
};


export default App;
